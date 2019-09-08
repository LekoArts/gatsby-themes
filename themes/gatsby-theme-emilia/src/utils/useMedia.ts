import { useEffect, useState } from "react"

/* eslint-disable */
export default function useMedia(queries: string[], values: number[], defaultValue: number) {
  const match = () => values[queries.findIndex(q => {
    if (typeof window !== `undefined`) {
      return matchMedia(q).matches
    }
  })] || defaultValue
  const [value, set] = useState(match)
  useEffect(() => {
    const handler = () => set(match)
    if (typeof window !== `undefined`) {
      window.addEventListener(`resize`, handler)
    }
    return () => window.removeEventListener(`resize`, handler)
  }, [])
  return value
}
