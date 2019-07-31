/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import AboutMDX from "../sections/about.mdx"

const About = ({ colors, offset }: { colors: { [key: string]: string }; offset: number }) => (
  <div>
    <Divider bg={colors.divider} clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} fill={colors.blue[5]} left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.iconDarkest} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors.iconDarkest} left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} fill={colors.orange[5]} left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.purple[5]} left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke={colors.iconBrightest} left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} fill={colors.iconBrightest} left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.iconDarkest} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} fill={colors.iconBrightest} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.iconDarkest} left="70%" top="60%" />
      <SVG icon="box" width={6} fill={colors.orange[5]} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.iconDarkest} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.iconDarkest} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
