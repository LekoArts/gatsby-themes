import Prism from "@theme-ui/prism"

const components = {
  pre: (props) => props.children,
  code: Prism,
}

export default components
