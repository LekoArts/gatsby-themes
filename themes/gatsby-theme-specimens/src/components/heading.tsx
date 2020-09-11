/** @jsx jsx */
import React from "react"
import { jsx, Theme } from "theme-ui"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Badge from "./badge"
import getValue from "../utils/get-value"
import themeConfig from "../theme"

type HeadingProps = {
  styles?: Theme["styles"]
  config: Theme
  previewText?: string
}

const infoStyles = {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
}

const Heading = ({ styles = undefined, config, previewText = `Heading` }: HeadingProps) => {
  const specimensConfig = useSpecimensConfig()

  if (!styles) {
    return <div sx={{ gridTemplateColumns: `1fr !important` }}>No styles defined</div>
  }

  return (
    <React.Fragment>
      {Object.entries(styles).length !== 0 ? (
        Object.entries(styles).map(([key, value]) => {
          const type = {
            level: key,
            fontFamily: value.fontFamily,
            size: value.fontSize,
            weight: value.fontWeight,
            lineHeight: value.lineHeight,
          }

          return (
            <div
              key={type.level}
              sx={{
                display: `flex`,
                flexDirection: `column`,
                borderBottomWidth: `1px`,
                borderBottomColor: themeConfig.colors.gray[3],
                borderBottomStyle: `solid`,
                mb: themeConfig.space[4],
                pb: themeConfig.space[4],
                "&:last-child": {
                  borderBottom: `none`,
                },
                ...themeConfig.typography.heading,
              }}
            >
              <div
                data-name="heading-level-preview"
                sx={{
                  fontFamily: type.fontFamily,
                  fontSize: `${specimensConfig.rootFontSize * getValue(config.fontSizes[type.size])}px`,
                  fontWeight: type.weight,
                  lineHeight: type.lineHeight,
                  mb: themeConfig.space[4],
                }}
              >
                {previewText}
              </div>
              <div
                data-name="heading-info"
                sx={{
                  display: `flex`,
                  flexDirection: `row`,
                  flexWrap: `wrap`,
                  justifyContent: `flex-start`,
                  width: `100%`,
                  "> div": {
                    mr: themeConfig.space[4],
                    mb: themeConfig.space[2],
                  },
                  span: {
                    mb: themeConfig.space[2],
                  },
                }}
              >
                <div sx={{ ...infoStyles }}>
                  <Badge>Type</Badge>
                  {type.level}
                </div>
                <div sx={{ ...infoStyles }}>
                  <Badge>Token</Badge>
                  {type.size}
                </div>
                <div sx={{ ...infoStyles, minWidth: `80px` }}>
                  <Badge>Size</Badge>
                  {config.fontSizes[type.size]}
                </div>
                <div sx={{ ...infoStyles, minWidth: `80px` }}>
                  <Badge>Line Height</Badge>
                  {config.lineHeights[type.lineHeight]}
                </div>
                <div sx={{ ...infoStyles }}>
                  <Badge>Weight</Badge>
                  {config.fontWeights[type.weight]}
                </div>
              </div>
              {specimensConfig.codeExample && (
                <div
                  sx={{
                    "code, pre": {
                      fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
                      lineHeight: 1.375,
                      direction: `ltr`,
                      textAlign: `left`,
                      whiteSpace: `pre`,
                      wordSpacing: `normal`,
                      wordBreak: `normal`,
                      hyphens: `none`,
                      backgroundColor: `#f5f7ff`,
                      color: `#5e6687`,
                      padding: themeConfig.space[2],
                      borderRadius: `default`,
                      ".token.string": {
                        color: `#22a2c9`,
                      },
                      ".token.punctuation": {
                        color: `#5e6687`,
                      },
                      ".token.operator, .token.boolean, .token.number": {
                        color: `#c76b29`,
                      },
                    },
                    mt: themeConfig.space[3],
                    fontSize: themeConfig.fontSizes[0],
                    width: `100%`,
                    overflow: `auto`,
                    ...themeConfig.codeStyles.default,
                  }}
                >
                  <pre sx={{ my: themeConfig.space[0] }}>
                    <code>
                      <span className="token punctuation">{`{`}</span>
                      <span className="token punctuation" /> fontSize<span className="token punctuation">:</span>
                      {` `}
                      <span className="token number">{type.size}</span>
                      <span className="token punctuation">,</span> fontWeight
                      <span className="token punctuation">:</span>
                      {` `}
                      <span className="token string">"{type.weight}"</span>
                      <span className="token punctuation">,</span> lineHeight
                      <span className="token punctuation">:</span>
                      {` `}
                      <span className="token string">"{type.lineHeight}"</span>
                      <span className="token punctuation">,</span> fontFamily
                      <span className="token punctuation">:</span>
                      {` `}
                      <span className="token string">"{type.fontFamily}"</span>
                      {` `}
                      <span className="token punctuation">{`}`}</span>
                    </code>
                  </pre>
                </div>
              )}
            </div>
          )
        })
      ) : (
        <div sx={{ gridTemplateColumns: `1fr !important` }}>No heading styles defined</div>
      )}
    </React.Fragment>
  )
}

export default Heading
