import { themes } from "prism-react-renderer"
import { themeWithCssVariables } from "./prism-utils"

const { github, vsDark } = themes
const { theme: lightTheme, variables: lightThemeVars } = themeWithCssVariables(github)
const { theme: darkTheme, variables: darkThemeVars } = themeWithCssVariables(vsDark)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
