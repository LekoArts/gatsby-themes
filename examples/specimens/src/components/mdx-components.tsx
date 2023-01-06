/** @jsx jsx */
import { jsx } from "theme-ui"
import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { preToCodeBlock } from "@lekoarts/themes-utils"
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
import Code, { ICodeProps } from "./code"

const headingProps = {
  h1: {
    variant: `text.display`,
  },
  h2: {
    variant: `text.heading`,
    fontSize: 5,
  },
  h3: {
    variant: `text.heading`,
    fontSize: 4,
  },
  h4: {
    variant: `text.heading`,
    fontSize: 3,
  },
  h5: {
    variant: `text.heading`,
    fontSize: 2,
  },
  h6: {
    variant: `text.heading`,
    fontSize: 1,
  },
}

type HeadingTag = `h1` | `h2` | `h3` | `h4` | `h5` | `h6`

const heading =
  (Tag: HeadingTag) => (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    const { id, children } = props
    return id ? (
      <Tag sx={headingProps[Tag]} {...props} id={id}>
        <a
          href={`#${id}`}
          sx={{
            color: `inherit`,
            textDecoration: `none`,
            ":hover": {
              textDecoration: `underline`,
            },
          }}
        >
          {children}
        </a>
      </Tag>
    ) : (
      <Tag sx={headingProps[Tag]} {...props} />
    )
  }

const MdxComponents = {
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
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`),
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps) as unknown as ICodeProps
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

export default MdxComponents
