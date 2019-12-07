/** @jsx jsx */
import { jsx } from "theme-ui"
import Table from "./table"
import theme from "../theme"

type FontWeightProps = {
  fontWeights: {
    [key: string]: string
  }
}

const FontWeight = ({ fontWeights }: FontWeightProps) => (
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
    {Object.entries(fontWeights).map(([key, value]) => (
      <div key={key}>
        <div>{key}</div>
        <div>{value}</div>
        <div sx={{ fontWeight: value, fontSize: [theme.fontSizes[1], theme.fontSizes[2]] }}>
          Pack my box with five dozen liquor jugs
        </div>
      </div>
    ))}
  </Table>
)

export default FontWeight
