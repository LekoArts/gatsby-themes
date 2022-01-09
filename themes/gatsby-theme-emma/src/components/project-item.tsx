/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { animated } from "react-spring"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type ProjectItemProps = {
  node: {
    color: string
    title: string
    slug: string
    service: string
    client: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  style: any
  eager?: boolean
}

const ProjectItem = ({ node, style, eager }: ProjectItemProps) => (
  <animated.div
    sx={{
      position: `relative`,
      "&:before": {
        content: `""`,
        display: `block`,
        paddingTop: `100%`,
      },
    }}
    style={style}
  >
    <div
      sx={{
        left: 0,
        height: `100%`,
        position: `absolute`,
        top: 0,
        width: `100%`,
        a: {
          color: `white`,
          height: `100%`,
          left: 0,
          opacity: 0,
          padding: 4,
          position: `absolute`,
          top: 0,
          width: `100%`,
          zIndex: 10,
          transition: `all 0.3s ease-in-out`,
          textDecoration: `none`,
          "&:hover": {
            color: `white`,
            opacity: 1,
            textDecoration: `none`,
          },
        },
      }}
    >
      <div
        sx={{
          // @ts-ignore
          "> div": {
            height: `100%`,
            left: 0,
            position: `absolute !important`,
            top: 0,
            width: `100%`,
            "> div": {
              position: `static !important`,
            },
          },
        }}
      >
        <GatsbyImage loading={eager ? `eager` : `lazy`} image={node.cover.childImageSharp.gatsbyImageData} alt="" />
      </div>
      <Link to={node.slug} aria-label={`View detail page of ${node.title}`}>
        <div
          sx={{
            backgroundColor: node.color,
            height: `100%`,
            left: 0,
            position: `absolute`,
            top: 0,
            width: `100%`,
            zIndex: -2,
          }}
        />
        <div sx={{ fontSize: 5, fontWeight: `bold` }}>{node.client}</div>
        <div sx={{ fontSize: 2 }}>{node.service}</div>
      </Link>
    </div>
  </animated.div>
)

export default ProjectItem
