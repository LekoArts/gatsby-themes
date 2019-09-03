/** @jsx jsx */
import React from "react"
import { Header as ThemeHeader, jsx, Styled, Container } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import HeaderBackground from "./header-background"
import LeftArrow from "../assets/left-arrow"
import useEmiliaConfig from "../hooks/use-emilia-config"

type Props = {
  title: string
  areas: string[]
  description?: string
  date: string
}

const HeaderProject = ({ title, areas, description, date }: Props) => {
  const { name } = useEmiliaConfig()
  const avatar = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "assets" }, name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <ThemeHeader>
      <HeaderBackground />
      <Container sx={{ textAlign: `center`, my: 4, zIndex: 10 }}>
        <Link
          to="/"
          sx={{
            display: `flex`,
            alignItems: `center`,
            color: `text`,
            textDecoration: `none`,
            svg: {
              transition: `transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
            },
            "&:hover, &:focus": { svg: { transform: `translateX(-6px)` } },
          }}
        >
          <LeftArrow />
          <div
            sx={{
              overflow: `hidden`,
              borderRadius: `full`,
              width: `40px`,
              height: `40px`,
              display: `inline-block`,
              boxShadow: `md`,
              mx: 2,
            }}
          >
            <Img fixed={avatar.file.childImageSharp.fixed} />
          </div>
          <span sx={{ fontWeight: `medium` }}>{name}</span>
        </Link>
        <div sx={{ mt: 4, mb: [6, 6, 7] }}>
          <Styled.h1>{title}</Styled.h1>
          <Styled.p sx={{ mb: 0, mt: 4 }}>{date}</Styled.p>
          <div>
            {areas.map((area, index) => (
              <React.Fragment key={area}>
                {index > 0 && `, `}
                {area}
              </React.Fragment>
            ))}
          </div>
          {description && (
            <div sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>
              <MDXRenderer>{description}</MDXRenderer>
            </div>
          )}
        </div>
      </Container>
    </ThemeHeader>
  )
}

export default HeaderProject
