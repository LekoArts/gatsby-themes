/** @jsx jsx */
import { jsx } from "theme-ui"
import useSpecimensConfig from "../hooks/useSpecimensConfig"

type headingType = {
  fontFamily: string
  fontSize: number
  fontWeight: string
  lineHeight: string
  [key: string]: any
}

type TypographyProps = {
  styles: {
    h1: headingType
    h2: headingType
    h3: headingType
    h4: headingType
    h5: headingType
    h6: headingType
  }
  theme: any
}

const infoStyles = {
  mr: 4,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  p: {
    backgroundColor: `gray.3`,
    color: `gray.7`,
    fontSize: `0.65rem`,
    padding: `3px 8px`,
    borderRadius: `default`,
    letterSpacing: `wider`,
    textAlign: `center`,
    textTransform: `uppercase`,
  },
  span: {
    fontSize: 1,
  },
}

const Typography = ({ styles, theme }: TypographyProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <div>
      {Object.entries(styles).map(([key, value]) => {
        const heading = {
          type: key,
          fontFamily: value.fontFamily,
          size: value.fontSize,
          weight: value.fontWeight,
          lineHeight: value.lineHeight,
        }

        return (
          <div
            key={heading.type}
            sx={{
              display: `flex`,
              flexDirection: `column`,
              borderBottomWidth: `1px`,
              borderBottomColor: `gray.3`,
              borderBottomStyle: `solid`,
              mb: 4,
              pb: 4,
              "&:last-child": {
                borderBottom: `none`,
              },
              variant: `typography.default`,
            }}
          >
            <div
              data-name="typography-heading-preview"
              sx={{
                fontFamily: heading.fontFamily,
                fontSize: heading.size,
                fontWeight: heading.weight,
                lineHeight: heading.lineHeight,
                mb: 4,
              }}
            >
              Heading
            </div>
            <div
              data-name="typography-info"
              sx={{
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
                justifyContent: `flex-start`,
                width: `100%`,
              }}
            >
              <div sx={{ ...infoStyles }}>
                <p>Type</p>
                <span>{heading.type}</span>
              </div>
              <div sx={{ ...infoStyles, minWidth: `80px` }}>
                <p>Size</p>
                <span>{theme.fontSizes[heading.size]}</span>
              </div>
              <div sx={{ ...infoStyles, minWidth: `80px` }}>
                <p>Line Height</p>
                <span>{theme.lineHeights[heading.lineHeight]}</span>
              </div>
              <div sx={{ ...infoStyles }}>
                <p>Weight</p>
                <span>{theme.fontWeights[heading.weight]}</span>
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
                    padding: 2,
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
                  mt: 3,
                  fontSize: 0,
                  width: `100%`,
                  overflow: `auto`,
                  variant: `codeStyles.default`,
                }}
              >
                <pre sx={{ my: 0 }}>
                  <code>
                    <span className="token punctuation">{`{`}</span>
                    <span className="token punctuation" /> fontSize<span className="token punctuation">:</span>
                    {` `}
                    <span className="token number">{heading.size}</span>
                    <span className="token punctuation">,</span> fontWeight<span className="token punctuation">:</span>
                    {` `}
                    <span className="token string">"{heading.weight}"</span>
                    <span className="token punctuation">,</span> lineHeight<span className="token punctuation">:</span>
                    {` `}
                    <span className="token string">"{heading.lineHeight}"</span>
                    <span className="token punctuation">,</span> fontFamily<span className="token punctuation">:</span>
                    {` `}
                    <span className="token string">"{heading.fontFamily}"</span>
                    {` `}
                    <span className="token punctuation">{`}`}</span>
                  </code>
                </pre>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Typography
