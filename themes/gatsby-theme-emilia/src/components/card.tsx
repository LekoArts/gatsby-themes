/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"

type Props = {
  item: {
    slug: string
    cover: ChildImageSharp
    title: string
  }
  overlay: string
  shadow: string[]
}

const Card = ({ item, overlay, shadow }: Props) => (
  <Styled.a
    as={Link}
    sx={{
      outline: `none`,
      "&:focus": {
        boxShadow: `rgba(${overlay}, 0.5) 0px 0px 0px 10px`,
      },
      "&:hover, &:focus": {
        "[data-name='card-overlay']": {
          opacity: 1,
        },
      },
    }}
    to={item.slug}
  >
    <div
      sx={{
        zIndex: 20,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        opacity: 0,
        transition: `all 0.3s ease-in-out`,
        color: `white`,
        backgroundColor: `rgba(${overlay}, 0.9)`,
      }}
      data-name="card-overlay"
    >
      <Styled.h2 sx={{ my: 0, textShadow: `rgba(0, 0, 0, 0.2) 0px 2px 12px`, color: `white` }}>{item.title}</Styled.h2>
    </div>
    <Img fluid={item.cover.childImageSharp.fluid} style={{ boxShadow: shadow.join(`, `) }} />
  </Styled.a>
)

export default Card
