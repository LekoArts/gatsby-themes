/** @jsx jsx */
import { css, jsx, Styled } from "theme-ui"
import { Sidenav } from "@theme-ui/sidenav"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Global } from "@emotion/core"
import useNavigation from "../hooks/use-navigation"

const Layout = ({ children }) => {
  const nav = useNavigation()

  return (
    <Styled.root>
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `background`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <div sx={{ display: `grid`, gridTemplateColumns: `300px 1fr`, gridColumnGap: 3, minHeight: `100vh` }}>
        <Sidenav
          sx={{
            a: {
              fontWeight: `normal !important`,
              "&:hover": {
                textDecoration: `none !important`,
              },
            },
            "ul > li": { paddingLeft: 2, fontWeight: `bold`, a: { px: 0 } },
            "ul > li > ul > li": { paddingLeft: 3 },
            p: 2,
          }}
        >
          <MDXRenderer>{nav}</MDXRenderer>
        </Sidenav>
        <main sx={{ backgroundColor: `gray.1`, padding: 5 }}>
          <div>{children}</div>
          <footer>Theme by LekoArts</footer>
        </main>
      </div>
    </Styled.root>
  )
}

export default Layout
