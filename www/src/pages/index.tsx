import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutMe from "../components/about-me"
import NewsletterArchive from "../components/newsletter-archive"

const Index = () => (
  <Layout>
    <Hero />
    <Themes />
    <AboutMe />
    <NewsletterArchive />
  </Layout>
)

export default Index
