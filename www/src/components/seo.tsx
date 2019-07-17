import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const defaultProps = {
  title: ``,
  description: false,
  meta: [],
  pathname: false,
  image: false,
}

type Props = {
  title?: string
  description?: string
  meta?:
    | {
        property: string
        content: string
        name?: undefined
      }[]
    | {
        name: string
        content: string
        property?: undefined
      }[]
    | any
  pathname?: string
  image?: string
}

const SEO = ({ title, description, meta, pathname, image }: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }
  return (
    <Helmet
      htmlAttributes={{ lang: siteLanguage }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `image`,
          content: seo.image,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:image:alt`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:url`,
          content: seo.url,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          property: `twitter:image`,
          content: seo.image,
        },
        {
          property: `twitter:image:alt`,
          content: seo.description,
        },
      ].concat(meta)}
    >
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5a67d8" />
      <meta name="msapplication-TileColor" content="#f7fafc" />
    </Helmet>
  )
}

export default SEO

SEO.defaultProps = defaultProps
