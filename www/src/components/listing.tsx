/** @jsx jsx */
import { Flex, Box, jsx, Container, useColorMode, ThemeUICSSObject, get } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage as Img, IGatsbyImageData } from "gatsby-plugin-image"
import { Circle, Donut } from "./shapes"
import iconExternal from "../icons/icon-external-window.svg"

type Props = {
  allThemes: {
    nodes: {
      title: string
      url: string
      preview: string
      description: string
      shapes: {
        color:
          | `blue`
          | `orange`
          | `pink`
          | `purple`
          | `gray`
          | `black`
          | `red`
          | `yellow`
          | `green`
          | `indigo`
          | `teal`
          | `darkIndigo`
          | `strangerThings`
        type: `circle` | `donut`
        size: string[]
        xOffset: string[]
        yOffset: string[]
        opacity: number
      }[]
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const cardStyle: ThemeUICSSObject = {
  position: `relative`,
  transition: `all 0.3s ease-in-out`,
  display: `block`,
  boxShadow: [`md`, `md`, `lg`],
  zIndex: 2,
  borderRadius: `lg`,
  "&:hover": {
    transform: `translateY(-4px)`,
    boxShadow: [`lg`, `lg`, `xl`],
    "[data-name='card-overlay']": {
      opacity: 1,
    },
  },
  ".gatsby-image-wrapper": {
    display: `block !important`,
  },
  ".gatsby-image-wrapper [data-placeholder-image], .gatsby-image-wrapper [data-main-image]": {
    borderRadius: `lg`,
  },
}

const Listing = () => {
  const {
    allThemes: { nodes: themes },
  } = useStaticQuery<Props>(ListingQuery)

  const [mode] = useColorMode<"light" | "dark" | "strangerThings">()

  let buttonStyles: ThemeUICSSObject = {}
  let overlayStyles: ThemeUICSSObject = {}

  if (mode === `strangerThings`) {
    buttonStyles = {
      background: `black`,
      border: `2px solid #E7251D`,
    }
    overlayStyles = {
      backgroundColor: `rgba(231, 37, 29, 0.9)`,
    }
  }

  return (
    <Container sx={{ py: 4 }}>
      {themes.map((theme, index) => {
        const isEven = index % 2 === 0

        return (
          <Box
            key={theme.title}
            sx={{
              py: [5, 5, 6],
              display: `grid`,
              gridTemplateColumns: [`1fr`, `1fr`, `1fr 1fr`],
              gridGap: [3, 4, 5],
              alignItems: `flex-start`,
            }}
          >
            <div
              sx={{
                width: `100%`,
                maxWidth: [`600px`, `900px`, `600px`],
                position: `relative`,
                order: isEven ? 1 : [1, 1, 2],
              }}
            >
              {theme.shapes.map((shape) => {
                switch (shape.type) {
                  case `circle`:
                    return (
                      <Circle
                        key={`${shape.size}-${shape.color}-${shape.xOffset}`}
                        size={shape.size}
                        color={shape.color}
                        left={isEven ? shape.xOffset : `unset`}
                        right={isEven ? `unset` : shape.xOffset}
                        top={shape.yOffset}
                        sx={{ zIndex: 0, opacity: shape.opacity }}
                      />
                    )
                  case `donut`:
                    return (
                      <Donut
                        key={`${shape.size}-${shape.color}-${shape.xOffset}`}
                        width="20px"
                        size={shape.size}
                        color={shape.color}
                        left={isEven ? shape.xOffset : `unset`}
                        right={isEven ? `unset` : shape.xOffset}
                        top={shape.yOffset}
                        sx={{ zIndex: 0, opacity: shape.opacity }}
                      />
                    )
                  default:
                    return null
                }
              })}
              <a
                href={theme.preview}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`Visit a preview of theme ${theme.title}`}
                sx={{
                  ...cardStyle,
                  "[data-name='card-overlay']": {
                    position: `absolute`,
                    borderRadius: `lg`,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: 10,
                    backgroundColor: `rgba(90, 103, 216, 0.9)`,
                    color: `white`,
                    fontFamily: `body`,
                    fontSize: `3xl`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    transition: `all 0.3s ease-in-out`,
                    opacity: 0,
                    ...overlayStyles,
                  },
                }}
              >
                <div data-name="card-overlay" aria-hidden>
                  <div sx={{ display: `flex`, alignItems: `center` }}>
                    <img width="40" height="40" sx={{ mr: 3 }} alt="" src={iconExternal} /> Preview
                  </div>
                </div>
                {theme?.image?.childImageSharp?.gatsbyImageData && (
                  <Img image={theme.image.childImageSharp.gatsbyImageData} alt="" />
                )}
              </a>
            </div>
            <Flex sx={{ flexDirection: `column`, alignItems: `flex-start`, order: isEven ? 2 : [2, 2, 1] }}>
              <h3 sx={(t) => get(t, `styles.h3`)}>{theme.title}</h3>
              <Themed.p>{theme.description}</Themed.p>
              <a href={theme.url} sx={{ variant: `buttons.primary`, mt: 3, ...buttonStyles }}>
                Get Started
              </a>
            </Flex>
          </Box>
        )
      })}
      <p sx={{ mt: 6, fontSize: [`default`, `xl`, `xl`, `2xl`], textAlign: `center` }}>
        <span sx={{ fontWeight: `bold` }}>Do you want more Gatsby content?</span> <br /> Check out my existing{` `}
        <Themed.a href="https://github.com/LekoArts?tab=repositories&q=gatsby&type=source&language=&sort=stargazers">
          open source Gatsby projects
        </Themed.a>
        !
      </p>
    </Container>
  )
}

export default Listing

const ListingQuery = graphql`
  {
    allThemes(sort: { title: ASC }) {
      nodes {
        title
        url
        preview
        description
        shapes {
          color
          type
          size
          xOffset
          yOffset
          opacity
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, quality: 90, aspectRatio: 1.7, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
