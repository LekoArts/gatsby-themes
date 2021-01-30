import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

const useResponsive = () => {
  const [isClient, setIsClient] = useState(false)

  const isBigScreen = useMediaQuery({
    minWidth: `1100px`,
  })

  useEffect(() => {
    if (typeof window !== `undefined`) setIsClient(true)
  }, [])

  return {
    isBigScreen: isClient ? isBigScreen : false,
    isClient,
  }
}

export default useResponsive
