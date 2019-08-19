/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import {
  Alert,
  Audio,
  BorderRadius,
  ColorFamilies,
  ColorRow,
  ColorSwatch,
  Download,
  FontFamily,
  FontSize,
  FontWeight,
  Heading,
  Palette,
  Shadow,
  Space,
  Table,
  Video,
} from "@lekoarts/gatsby-theme-specimens"
import { preToCodeBlock } from "mdx-utils"
import Code from "../components/code"

const heading = Tag => props =>
  props.id ? (
    <Tag {...props} id={props.id}>
      <a
        href={`#${props.id}`}
        sx={{
          color: `inherit`,
          textDecoration: `none`,
          ":hover": {
            textDecoration: `underline`,
          },
        }}
      >
        {props.children}
      </a>
    </Tag>
  ) : (
    <Tag {...props} />
  )

const components = {
  Alert: ({ type, children }) => <Alert type={type}>{children}</Alert>,
  Audio: ({ autoplay, loop, name, desc, src }) => (
    <Audio autoplay={autoplay} loop={loop} name={name} desc={desc} src={src} />
  ),
  BorderRadius: ({ radii }) => <BorderRadius radii={radii} />,
  ColorFamilies: ({ colors }) => <ColorFamilies colors={colors} />,
  ColorRow: ({ color, name, prefix }) => <ColorRow color={color} name={name} prefix={prefix} />,
  ColorSwatch: ({ color, name, minimal, prefix }) => (
    <ColorSwatch color={color} name={name} minimal={minimal} prefix={prefix} />
  ),
  Download: ({ name, src, bg, preview, notes }) => (
    <Download name={name} src={src} bg={bg} preview={preview} notes={notes} />
  ),
  FontFamily: ({ fonts }) => <FontFamily fonts={fonts} />,
  FontSize: ({ fontSizes }) => <FontSize fontSizes={fontSizes} />,
  FontWeight: ({ fontWeights }) => <FontWeight fontWeights={fontWeights} />,
  Heading: ({ styles, theme }) => <Heading styles={styles} theme={theme} />,
  Palette: ({ colors, mode, single, minimal, prefix }) => (
    <Palette colors={colors} mode={mode} single={single} minimal={minimal} prefix={prefix} />
  ),
  Shadow: ({ shadows }) => <Shadow shadows={shadows} />,
  Space: ({ space }) => <Space space={space} />,
  Table: ({ columns, titles, children, className }) => (
    <Table columns={columns} titles={titles} className={className}>
      {children}
    </Table>
  ),
  Video: ({ autoplay, loop, muted, name, poster, src }) => (
    <Video autoplay={autoplay} loop={loop} muted={muted} name={name} poster={poster} src={src} />
  ),
}

export default {
  ...components,
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`),
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}
