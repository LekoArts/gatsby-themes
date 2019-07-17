/** @jsx jsx */
import React from "react"
import { jsx, Container, Styled } from "theme-ui"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutMe from "../components/about-me"

const Index = () => (
  <Layout>
    <Hero />
    <Themes />
    <AboutMe />
  </Layout>
)

export default Index
