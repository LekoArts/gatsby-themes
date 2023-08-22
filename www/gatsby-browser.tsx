import type { GatsbyBrowser } from "gatsby"
import "./src/styles/fonts.css"

export const onRouteUpdate: GatsbyBrowser["onRouteUpdate"] = () => {
  if (process.env.NODE_ENV === `production` && typeof window.plausible !== `undefined`) {
    window.plausible(`pageview`)
  }
}
