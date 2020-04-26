export type ChildImageSharpFixed = {
  fixed: {
    width: number
    height: number
    src: string
    srcSet: string
    base64: string
    srcWebp: string
    srcSetWebp: string
  }
}

export type ChildImageSharpFluid = {
  fluid: {
    aspectRatio: number
    src: string
    srcSet: string
    sizes: string
    base64: string
    tracedSVG: string
    srcWebp: string
    srcSetWebp: string
    presentationHeight: number
  }
}
