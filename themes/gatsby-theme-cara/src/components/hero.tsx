/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero: React.FC<{ colors: any }> = ({ colors }) => {
  const grayDarkest = colors.gray[8]
  const grayDarker = colors.gray[7]

  return (
    <div>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" hiddenMobile width={48} stroke={colors.orange[5]} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.red[5]} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={grayDarker} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.blue[5]} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={grayDarker} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={grayDarkest} left="30%" top="65%" />
          <SVG icon="cross" width={16} stroke={colors.pink[3]} left="28%" top="15%" />
          <SVG icon="circle" width={6} fill={grayDarkest} left="75%" top="10%" />
          <SVG icon="upDown" hiddenMobile width={8} fill={grayDarkest} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" hiddenMobile width={24} fill={grayDarker} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={grayDarkest} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={grayDarkest} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={grayDarkest} left="95%" top="90%" />
        <SVG icon="upDown" hiddenMobile width={24} fill={grayDarker} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={grayDarker} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.green[5]} left="95%" top="5%" />
        <SVG icon="box" hiddenMobile width={64} fill={colors.purple[`500`]} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={grayDarkest} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={grayDarkest} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={grayDarker} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={grayDarker} left="80%" top="70%" />
      </Divider>
      <Content sx={{ p: { fontSize: [2, 2, 3] } }} speed={0.4} offset={0}>
        <Inner>
          <Intro />
        </Inner>
      </Content>
    </div>
  )
}

export default Hero
