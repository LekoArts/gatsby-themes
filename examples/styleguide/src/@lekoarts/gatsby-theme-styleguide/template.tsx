import type { HeadFC } from "gatsby"
import ThemeTemplate from "@lekoarts/gatsby-theme-styleguide/src/template"
import * as React from "react"
import Seo from "../../components/seo"

export default ThemeTemplate

export const Head: HeadFC = () => <Seo />
