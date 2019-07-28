import React from "react"
import { useThemeUI } from "theme-ui"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Projects from "../components/projects"

const Cara: React.FC = () => {
  const { theme } = useThemeUI()

  const { colors } = theme

  return (
    <Layout>
      <Parallax pages={3}>
        <Hero colors={colors} />
        <Projects colors={colors} />
      </Parallax>
      <Footer />
    </Layout>
  )
}

export default Cara
