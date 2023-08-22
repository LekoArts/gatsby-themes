declare module "react-responsive"
declare module "react-share"
declare module "*.svg"

declare namespace React {
  interface MetaHTMLAttributes {
    value?: string
  }
}

declare global {
  interface Window {
    plausible: (name: string, options?: { callback?: () => void; props?: { [key: string]: string } }) => void
  }
}
