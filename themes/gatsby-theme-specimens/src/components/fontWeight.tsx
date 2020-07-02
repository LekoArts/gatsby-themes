/** @jsx jsx */
import { jsx, Theme } from "theme-ui"
import Table from "./table"
import theme from "../theme"

type FontWeightProps = {
  fontWeights?: Theme["fontWeights"]
  previewText?: string
}

const FontWeight = ({
  fontWeights = undefined,
  previewText = `The quick brown fox jumps over the lazy dog`,
}: FontWeightProps) => (
  <Table
    columns={[`110px 1fr`, `110px 80px 1fr`]}
    titles={[`Token`, `Value`, `Preview`]}
    sx={{
      div: { alignSelf: `center` },
      "> div > div:nth-of-type(2)": {
        display: [`none`, `block`],
      },
      ...theme.typography.fontWeight,
    }}
  >
    {fontWeights ? (
      Object.entries(fontWeights).map(([key, value]) => (
        <div key={key}>
          <div>{key}</div>
          <div>{value}</div>
          <div sx={{ fontWeight: value, fontSize: [theme.fontSizes[1], theme.fontSizes[2]] }}>{previewText}</div>
        </div>
      ))
    ) : (
      <div sx={{ gridTemplateColumns: `1fr !important` }}>No fontWeights defined</div>
    )}
  </Table>
)

export default FontWeight
