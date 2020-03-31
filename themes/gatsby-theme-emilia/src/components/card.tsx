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
  overlay?: string | undefined
  shadow?: string[]
  inGrid?: boolean
}

const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
const shadowArray = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Card = ({ item, overlay = `0, 0, 0`, shadow = shadowArray, inGrid = false }: Props) => {
  const h = item.cover.childImageSharp.fluid.presentationHeight
  const count = Math.floor(h / 50)

  let conditionalStyles = {}

  if (inGrid) {
    conditionalStyles = {
      height: 0,
      paddingBottom: `${100 / item.cover.childImageSharp.fluid.aspectRatio}%`,
      gridRowEnd: `span ${count}`,
      mb: 4,
    }
  }

  return (
    <Styled.a
      as={Link}
      aria-label={`Visit ${item.title} project page`}
      sx={{
        outline: `none`,
        "&:focus": {
          boxShadow: `${shadow.join(`, `)}, rgba(${overlay}, 0.5) 0px 0px 0px 10px`,
        },
        "&:hover, &:focus": {
          "[data-name='card-overlay']": {
            opacity: 1,
          },
        },
        boxShadow: shadow.join(`, `),
        position: `relative`,
        ...conditionalStyles,
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
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        data-name="card-overlay"
      >
        <Styled.h2 sx={{ my: 0, textShadow: `rgba(0, 0, 0, 0.2) 0px 2px 12px`, color: `white` }}>
          {item.title}
        </Styled.h2>
      </div>
      <Img fluid={item.cover.childImageSharp.fluid} />
    </Styled.a>
  )
}

export default Card
