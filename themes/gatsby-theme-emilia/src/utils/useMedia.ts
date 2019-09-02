import { useEffect, useState } from "react"

/* eslint-disable */
export default function useMedia(queries: string[], values: number[], defaultValue: number) {
  const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(handler)
  }, [])
  return value
}
