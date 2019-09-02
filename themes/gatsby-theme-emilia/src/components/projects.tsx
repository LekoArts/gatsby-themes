/** @jsx jsx */
import { jsx, Container, Styled, Main } from "theme-ui"
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import Header from "./header"

type Props = {
  projects: {
    color: string
    slug: string
    title: string
    service: string
    client: string
    cover: ChildImageSharp
  }[]
}

const Projects = ({ projects }: Props) => {
  if (projects.length === 0) {
    return (
      <Layout>
        <Header />
        <Styled.p>
          Hi!{` `}
          <span role="img" aria-label="Wave emoji">
            👋
          </span>
          {` `}
          <br />
          Thanks for using <b>@lekoarts/gatsby-theme-emilia</b>. You currently don't have any content in your{` `}
          <i>projects</i> folder - that's why this page displays a placeholder text. Head over to the{` `}
          <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia">
            README
          </Styled.a>
          {` `}
          to learn how to setup them.
        </Styled.p>
        <Styled.p>
          <b>TL;DR:</b> <br />
          The starter automatically created the folder <code>content/projects</code>. Go into this folder, create a new
          folder called <code>example</code> and create an <code>index.mdx</code> file there and place an image. Edit
          the frontmatter like described in the{` `}
          <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia">
            README
          </Styled.a>
          .
        </Styled.p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          {projects.map(project => (
            <div key={project.slug}>{project.title}</div>
          ))}
        </Container>
      </Main>
    </Layout>
  )
}

export default Projects
