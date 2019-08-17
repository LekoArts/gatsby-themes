/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */

/** @jsx jsx */
import { jsx } from "theme-ui"
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

const heading = Tag => props =>
  props.id ? (
    <Tag {...props}>
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

export default {
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
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`),
}
