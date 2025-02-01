import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"
import { merge } from "theme-ui"

const theme = merge(originalTheme, {
	fonts: {
		body: `"Work Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
	},
})

export default theme
