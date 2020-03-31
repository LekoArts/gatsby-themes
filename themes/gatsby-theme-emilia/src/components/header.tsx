/** @jsx jsx */
import { Header as ThemeHeader, jsx, Styled } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import HeaderBackground from "./header-background"
import Location from "../assets/location"
import SocialMediaList from "./social-media-list"

const Header = () => {
  const { name, location, assetsPath } = useEmiliaConfig()
  const avatar = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 140, height: 140, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
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
    <ThemeHeader>
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
            {avatar && avatar.file && avatar.file.childImageSharp ? (
              <Img fixed={avatar.file.childImageSharp.fixed} />
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
          <Styled.h1>{name}</Styled.h1>
        </animated.div>
        <animated.div style={fadeUpPropsDelay}>
          <div
            sx={{
              svg: {
                width: `20px`,
                height: `20px`,
                ".primary": { color: `iconPrimary` },
                ".secondary": { color: `iconSecondary` },
                mr: 2,
              },
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              color: `text`,
            }}
          >
            <Location /> {location}
          </div>
        </animated.div>
        <div data-testid="social-header" sx={{ mt: 4, mb: 6, a: { mx: 2 } }}>
          <animated.div style={fadeLongProps}>
            <SocialMediaList />
          </animated.div>
        </div>
      </div>
    </ThemeHeader>
  )
}

export default Header
