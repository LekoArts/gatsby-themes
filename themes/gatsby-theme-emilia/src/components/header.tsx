/** @jsx jsx */
import { Header as ThemeHeader, jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import HeaderBackground from "./header-background"
import Location from "../assets/location"
import SocialMediaList from "./social-media-list"

const Header = () => {
  const { name, location } = useEmiliaConfig()
  const avatar = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "assets" }, name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 140, height: 140, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <ThemeHeader>
      <HeaderBackground />
      <div sx={{ textAlign: `center`, my: 5, zIndex: 10 }}>
        <div
          sx={{
            overflow: `hidden`,
            borderRadius: `full`,
            height: [`100px`, `140px`],
            width: [`100px`, `140px`],
            display: `inline-block`,
            boxShadow: `lg`,
            "> div": {
              height: [`100px !important`, `140px !important`],
              width: [`100px !important`, `140px !important`],
            },
          }}
        >
          <Img fixed={avatar.file.childImageSharp.fixed} />
        </div>
        <Styled.h1>{name}</Styled.h1>
        <div
          sx={{
            svg: {
              width: `20px`,
              ".primary": { color: `iconPrimary` },
              ".secondary": { color: `iconSecondary` },
              mr: 2,
            },
            display: `flex`,
            justifyContent: `center`,
            color: `textMuted`,
          }}
        >
          <Location /> {location}
        </div>
        <div sx={{ mt: 4, mb: 6 }}>
          <SocialMediaList />
        </div>
      </div>
    </ThemeHeader>
  )
}

export default Header
