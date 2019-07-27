/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Intro from "../sections/intro.mdx"
import Footer from "../components/footer"
import { Divider } from "../elements/dividers"

const Cara: React.FC = () => (
  <Layout>
    <div sx={{ p: { fontSize: [2, 2, 3] } }}>
      <Intro />
    </div>
    <Parallax pages={1}>
      <ParallaxLayer>
        <Divider>test123</Divider>
      </ParallaxLayer>
    </Parallax>
    <Footer />
  </Layout>
)

export default Cara
