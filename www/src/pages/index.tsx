import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutMe from "../components/about-me"
import ThoughtsArchive from "../components/thoughts-archive"

const Index = () => (
  <Layout>
    <Hero />
    <Themes />
    <AboutMe />
    <ThoughtsArchive />
  </Layout>
)

export default Index
