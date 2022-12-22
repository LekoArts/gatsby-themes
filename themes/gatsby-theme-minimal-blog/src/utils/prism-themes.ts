import github from "prism-react-renderer/themes/github"
import vsDark from "prism-react-renderer/themes/vsDark"
import { themeWithCssVariables } from "./prism-utils"

const { theme: lightTheme, variables: lightThemeVars } = themeWithCssVariables(github)
const { theme: darkTheme, variables: darkThemeVars } = themeWithCssVariables(vsDark)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
