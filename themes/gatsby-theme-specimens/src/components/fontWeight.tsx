/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Table from "./table"

type FontWeightProps = {
  fontWeights: {
    [key: string]: string
  }
}

const FontWeight = ({ fontWeights }: FontWeightProps) => (
  <Table
    columns={3}
    titles={[`Token`, `Value`, `Preview`]}
    hideColumnMobile={2}
    sx={{ variant: `typography.fontWeight`, div: { alignSelf: `center` } }}
  >
    {Object.entries(fontWeights).map(([key, value]) => (
      <React.Fragment key={key}>
        <div>{key}</div>
        <div>{value}</div>
        <div sx={{ fontWeight: value, fontSize: [1, 2] }}>Pack my box with five dozen liquor jugs</div>
      </React.Fragment>
    ))}
  </Table>
)

export default FontWeight
