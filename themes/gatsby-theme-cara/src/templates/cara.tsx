import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Photo from "../components/photo"
import Photo2 from "../components/photo2"
import CodePhoto from "../components/codePhoto"
import About from "../components/about"
import About2 from "../components/about2"
import About3 from "../components/about3"
import Contact from "../components/contact"
import Video from "../components/video"
import Schemetics from "../components/schemetics"
import Header from "../components/header"

const Cara = () => (
  <Layout>
    <Parallax pages={12}>
      <Hero offset={0.2} factor={1} />
      <Projects offset={1.2} factor={2} />
      <About offset={3} factor={1} />
      <About2 offset={4} factor={1} />
      <Photo offset={5} factor={0.5} />
      <About3 offset={6} factor={1} />
      <Photo2 offset={7} factor={0.5} />
      <CodePhoto offset={8} factor={1} />
      {/* <Video offset={9} factor={1} /> */}
      <Schemetics offset={9} factor={1} />
      <Contact offset={10} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
