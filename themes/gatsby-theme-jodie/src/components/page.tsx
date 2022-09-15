/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "./layout"
import Seo from "./seo"

export type JodiePageProps = {
  page: {
    title: string
    slug: string
    excerpt: string
    color: string
    custom: boolean
    cover: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
}

const Page: React.FC<React.PropsWithChildren<PageProps<JodiePageProps>>> = ({ data: { page }, children }) => (
  <Layout color={page.color || undefined}>
    <div
      sx={{
        variant: page.custom ? `content.custom` : `content.page`,
      }}
      data-testid="page-content"
    >
      {children}
    </div>
  </Layout>
)

export default Page

export const Head: HeadFC<JodiePageProps> = ({ data: { page }, location }) => (
  <Seo
    title={page.title}
    description={page.excerpt}
    pathname={location.pathname}
    image={page.cover.childImageSharp.resize.src}
  />
)
