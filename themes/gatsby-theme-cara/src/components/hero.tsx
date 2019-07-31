/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ colors, offset }: { colors: { [key: string]: string }; offset: number }) => (
  <div>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke={colors.orange[5]} left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke={colors.red[5]} left="60%" top="70%" />
        <SVG icon="box" width={6} fill={colors.iconDarker} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.blue[5]} left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke={colors.iconBrightest} left="90%" top="50%" />
        <SVG icon="circle" width={16} fill={colors.iconDarker} left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke={colors.iconDarkest} left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke={colors.pink[3]} left="28%" top="15%" />
        <SVG icon="circle" width={6} fill={colors.iconDarkest} left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} fill={colors.iconDarkest} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} fill={colors.iconDarker} left="5%" top="70%" />
      <SVG icon="circle" width={6} fill={colors.iconDarkest} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.iconDarkest} left="50%" top="60%" />
      <SVG icon="upDown" width={8} fill={colors.iconDarkest} left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} fill={colors.iconDarker} left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke={colors.iconDarker} left="25%" top="5%" />
      <SVG icon="circle" width={64} fill={colors.green[5]} left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} fill={colors.purple[5]} left="5%" top="90%" />
      <SVG icon="box" width={6} fill={colors.iconDarkest} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.iconDarkest} left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke={colors.iconDarker} left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke={colors.iconDarker} left="80%" top="70%" />
    </Divider>
    <Content sx={{ p: { fontSize: [2, 3, 4] } }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
