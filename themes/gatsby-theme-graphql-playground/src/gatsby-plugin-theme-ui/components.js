import Prism from "@theme-ui/prism"
import NavLink from "../components/nav-link"

const components = {
  a: NavLink,
  pre: (props) => props.children,
  code: Prism,
}

export default components
