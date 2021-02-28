import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const NotFound = () => (
  <Layout customSEO>
    <Helmet>
      <title>404 - Not found</title>
    </Helmet>
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
            <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
            <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
            <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
          <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
          <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
          <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
          <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
          <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
          <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
          <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
          <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
          <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
          <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
          <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>404 - Page not found</Themed.h1>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default NotFound
