/** @jsx jsx */
import type { HeadFC } from "gatsby"
import { jsx, Container } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { useTrail } from "react-spring"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "./layout"
import ProjectItem from "./project-item"
import SEO from "./seo"

export type EmmaProjectsProps = {
  projects: {
    color: string
    slug: string
    title: string
    service: string
    client: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }[]
}

const Projects: React.FC<EmmaProjectsProps> = ({ projects }) => {
  const trail = useTrail(projects.length, {
    from: { height: `0%` },
    to: { height: `100%` },
  })

  if (projects.length === 0) {
    return (
      <Layout>
        <Container>
          <Themed.p>
            Hi!{` `}
            <span role="img" aria-label="Wave emoji">
              👋
            </span>
            {` `}
            <br />
            Thanks for using <b>@lekoarts/gatsby-theme-emma</b>. You currently don't have any content in your{` `}
            <i>projects</i> folder - that's why this page displays a placeholder text. Head over to the{` `}
            <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma">
              README
            </Themed.a>
            {` `}
            to learn how to setup them.
          </Themed.p>
          <Themed.p>
            <b>TL;DR:</b> <br />
            The starter automatically created the folder <code>content/projects</code>. Go into this folder, create a
            new folder called <code>example</code> and create an <code>index.mdx</code> file there and place an image.
            Edit the frontmatter like described in the{` `}
            <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma">
              README
            </Themed.a>
            .
          </Themed.p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
        width: `100%`,
      }}
    >
      {trail.map((style, index) => (
        <ProjectItem style={style} eager={index === 0} node={projects[index]} key={projects[index].slug} />
      ))}
    </Layout>
  )
}

export default Projects

export const Head: HeadFC = () => <SEO />
