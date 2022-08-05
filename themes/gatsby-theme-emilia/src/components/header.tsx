/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import HeaderBackground from "./header-background"
import SocialMediaList from "./social-media-list"
import Svg from "./svg"

type AvatarStaticQuery = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const Header = () => {
  const { name, location, assetsPath } = useEmiliaConfig()
  const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } })
  const fadeLongProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Flex as="header" variant="layout.projectHead">
      <HeaderBackground />
      <div sx={{ textAlign: `center`, my: 5, zIndex: 10 }}>
        <animated.div style={fadeProps}>
          <div
            sx={{
              overflow: `hidden`,
              borderRadius: `full`,
              height: [`100px`, `140px`],
              width: [`100px`, `140px`],
              display: `inline-block`,
              boxShadow: `lg`,
              "> div:not([data-placeholder='true'])": {
                height: [`100px !important`, `140px !important`],
                width: [`100px !important`, `140px !important`],
              },
            }}
          >
            {avatar?.file?.childImageSharp?.gatsbyImageData ? (
              <GatsbyImage image={avatar.file.childImageSharp.gatsbyImageData} alt="Avatar" />
            ) : (
              <div
                sx={{
                  fontSize: 0,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  width: `100% !important`,
                  right: 0,
                  p: 3,
                  backgroundColor: `red.2`,
                }}
                data-placeholder="true"
              >
                Place an image with the name "avatar" inside the directory "{assetsPath}"
              </div>
            )}
          </div>
        </animated.div>
        <animated.div style={fadeUpProps}>
          <Heading as="h1" variant="styles.h1">
            {name}
          </Heading>
        </animated.div>
        <animated.div style={fadeUpPropsDelay}>
          <Flex
            sx={{
              justifyContent: `center`,
              alignItems: `center`,
              color: `text`,
            }}
          >
            <Svg
              id="location"
              width="20px"
              height="20px"
              sx={{
                color: `iconPrimary`,
                mr: 2,
              }}
            />
            {` `}
            {location}
          </Flex>
        </animated.div>
        <div data-testid="social-header" sx={{ mt: 4, mb: 6, a: { mx: 2 } }}>
          <animated.div style={fadeLongProps}>
            <SocialMediaList />
          </animated.div>
        </div>
      </div>
    </Flex>
  )
}

export default Header
