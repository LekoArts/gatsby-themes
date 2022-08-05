import React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutMe from "../components/about-me"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <Hero />
    <Themes />
    <AboutMe />
  </Layout>
)

export default Index

export const Head: HeadFC = () => <SEO />
