/** @jsx jsx */
import { jsx } from "theme-ui"
import { ObjectOrArray } from "styled-system"
import * as CSS from "csstype"
import Table from "./table"
import theme from "../theme"

interface FontFamilyProps {
  fonts?: ObjectOrArray<CSS.FontFamilyProperty>
}

const FontFamily = ({ fonts }: FontFamilyProps) => (
  <Table
    columns={[`100px 1fr`, `100px 300px 1fr`, `100px 350px 1fr`, `100px 450px 1fr`]}
    titles={[`Token`, `Value`, `Preview`]}
    sx={{
      "> div > div:nth-of-type(2)": {
        display: [`none`, `block`],
      },
      ...theme.typography.fontFamily,
    }}
  >
    {fonts ? (
      Object.entries(fonts).map(([key, value]) => (
        <div key={key}>
          <div>{key}</div>
          <div sx={{ fontSize: theme.fontSizes[0] }}>{value}</div>
          <div sx={{ fontFamily: value, fontSize: [theme.fontSizes[1], theme.fontSizes[2]] }}>
            Pack my box with five dozen liquor jugs
          </div>
        </div>
      ))
    ) : (
      <div sx={{ gridTemplateColumns: `1fr !important` }}>No fonts defined</div>
    )}
  </Table>
)

export default FontFamily
