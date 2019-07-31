import React from "react"
import { useThemeUI } from "theme-ui"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => {
  const { theme, colorMode } = useThemeUI()

  const colors = colorMode === `light` ? theme.colors : theme.colors.modes.dark

  return (
    <Layout>
      <Parallax pages={5}>
        <Hero colors={colors} offset={0} />
        <Projects colors={colors} offset={1} />
        <About colors={colors} offset={3} />
        <Contact colors={colors} offset={4} />
      </Parallax>
    </Layout>
  )
}

export default Cara
