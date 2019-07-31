declare module 'theme-ui'
declare module 'gatsby-plugin-mdx'
declare module 'gatsby-plugin-theme-ui'

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

declare module "@mdx-js/react" {
  import { ComponentType, StyleHTMLAttributes } from "react"
  type MDXProps = {
    children: React.ReactNode
    components: { wrapper: React.ReactNode }
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}