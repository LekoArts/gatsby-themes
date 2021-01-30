import { keyframes } from "@emotion/react"

export const down = keyframes`
  from {
    transform: translate3d(0,0,0);
  }

  to {
    transform: translate3d(0,50px,0);
  }
`

export const up = keyframes`
  from {
    transform: translate3d(0,0,0);
  }

  to {
    transform: translate3d(0,-50px,0);
  }
`

export const downWide = keyframes`
  from {
    transform: translate3d(0,0,0);
  }

  to {
    transform: translate3d(0,200px,0);
  }
`

export const upWide = keyframes`
  from {
    transform: translate3d(0,0,0);
  }

  to {
    transform: translate3d(0,-150px,0);
  }
`
