import Prism from "@theme-ui/prism"
import NavLink from "../components/nav-link"

export default {
  a: NavLink,
  pre: props => props.children,
  code: Prism,
}
