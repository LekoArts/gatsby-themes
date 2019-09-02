/** @jsx jsx */
import { Header as ThemeHeader, jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import HeaderBackground from "./header-background"
import Location from "../assets/location"

const Header = () => {
  const { name, location, socialMedia } = useEmiliaConfig()
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
        <div sx={{ svg: { width: `20px`, ".primary": { color: `gray.8` }, ".secondary": { color: `gray.6` } } }}>
          <Location /> {location}
        </div>
        <div sx={{ mt: 4, mb: 5 }}>
          {socialMedia.map(entry => (
            <Styled.a sx={{ mx: 2 }} key={entry.title} href={entry.href}>
              {entry.title}
            </Styled.a>
          ))}
        </div>
      </div>
    </ThemeHeader>
  )
}

export default Header
