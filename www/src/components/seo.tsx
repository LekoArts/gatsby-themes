import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"
import useBuildTime from "../hooks/use-build-time"

type SEOProps = {
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
  title?: string
  thought?: boolean
  datePublished?: string
  info?: string
}

const SEO = ({
  description = ``,
  meta = [],
  pathname = ``,
  image = ``,
  title = ``,
  thought = false,
  datePublished = ``,
  info = ``,
}: SEOProps) => {
  const site = useSiteMetadata()
  const buildTime = useBuildTime()

  const {
    title: defaultTitle,
    titleAlt: defaultTitleAlt,
    siteUrl,
    description: defaultDescription,
    headline,
    language,
    image: defaultImage,
    author,
  } = site

  const seo = {
    title: title || defaultTitleAlt,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  const schemaHomepage = {
    "@context": `http://schema.org`,
    "@type": `WebPage`,
    author: {
      "@id": `${siteUrl}/#identity`,
    },
    copyrightHolder: {
      "@id": `${siteUrl}/#identity`,
    },
    copyrightYear: `2019-07-17T23:33:12-05:00`,
    creator: {
      "@id": `${siteUrl}/#creator`,
    },
    dateModified: buildTime,
    datePublished: `2019-07-17T23:33:12-05:00`,
    description: defaultDescription,
    headline,
    image: {
      "@type": `ImageObject`,
      url: seo.image,
    },
    inLanguage: `en`,
    mainEntityOfPage: siteUrl,
    name: defaultTitleAlt,
    publisher: {
      "@id": `${siteUrl}/#creator`,
    },
    url: siteUrl,
  }

  const orgaCreator = (input: string) => ({
    "@context": `http://schema.org`,
    "@id": `${siteUrl}/#${input}`,
    "@type": `Organization`,
    address: {
      "@type": `PostalAddress`,
      addressCountry: `DE`,
      addressLocality: ``,
      postalCode: ``,
    },
    name: defaultTitleAlt,
    alternateName: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    email: `hello@lekoarts.de`,
    founder: `LekoArts`,
    foundingDate: `2017-12-08`,
    foundingLocation: `Germany`,
    image: {
      "@type": `ImageObject`,
      url: `${siteUrl}/social/avatar.png`,
      height: `512`,
      width: `512`,
    },
    logo: {
      "@type": `ImageObject`,
      url: `${siteUrl}/social/avatar_small.png`,
      height: `60`,
      width: `60`,
    },
    sameAs: [
      `https://github.com/LekoArts`,
      `https://www.instagram.com/lekoarts.de`,
      `https://www.behance.net/lekoarts`,
      `https://dribbble.com/LekoArts`,
      `https://youtube.de/LekoArtsDE`,
      `https://twitter.com/lekoarts_de`,
    ],
  })

  const schemaNewsletter = {
    "@context": `http://schema.org`,
    "@type": `Article`,
    articleSection: `Newsletter`,
    author: {
      "@id": `${siteUrl}/#identity`,
    },
    copyrightHolder: {
      "@id": `${siteUrl}/#identity`,
    },
    copyrightYear: `2019`,
    creator: {
      "@id": `${siteUrl}/#creator`,
    },
    dateModified: buildTime,
    datePublished,
    description: seo.description,
    genre: `Technology`,
    headline: info,
    image: {
      "@type": `ImageObject`,
      url: seo.image,
    },
    inLanguage: `en`,
    mainEntityOfPage: seo.url,
    name: seo.title,
    publisher: {
      "@id": `${siteUrl}/#creator`,
    },
    speakable: {
      "@type": `SpeakableSpecification`,
      cssSelector: [`.thought-speakable`],
    },
    url: seo.url,
  }

  const breadcrumbs = {
    "@context": `http://schema.org`,
    "@type": `BreadcrumbList`,
    description: `Breadcrumbs list`,
    itemListElement: [
      {
        "@type": `ListItem`,
        item: {
          "@id": siteUrl,
          name: `Homepage`,
        },
        position: 1,
      },
      {
        "@type": `ListItem`,
        item: {
          "@id": seo.url,
          name: seo.title,
        },
        position: 2,
      },
    ],
    name: `Breadcrumbs`,
  }

  return (
    <Helmet meta={meta}>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:label1" value="Support" />
      <meta name="twitter:label2" value="Author's Homepage" />
      <meta name="twitter:data1" value="https://www.patreon.com/lekoarts" />
      <meta name="twitter:data2" value="https://www.lekoarts.de/en" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5a67d8" />
      <link rel="preload" href="/fonts/Benguiat-Bold.woff2" as="font" type="font/woff2" crossOrigin="true" />
      <meta name="msapplication-TileColor" content="#f7fafc" />
      {thought && <meta name="article:published_time" content={datePublished} />}
      <script type="application/ld+json">{JSON.stringify(orgaCreator(`identity`))}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator(`creator`))}</script>
      {thought ? (
        <script type="application/ld+json">{JSON.stringify(schemaNewsletter)}</script>
      ) : (
        <script type="application/ld+json">{JSON.stringify(schemaHomepage)}</script>
      )}
      {thought && <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>}
    </Helmet>
  )
}

export default SEO
