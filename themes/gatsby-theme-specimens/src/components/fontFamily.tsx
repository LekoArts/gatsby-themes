/** @jsx jsx */
import { jsx, Theme } from "theme-ui"
import Table from "./table"
import theme from "../theme"

interface FontFamilyProps {
  fonts?: Theme["fonts"]
  previewText?: string
}

const FontFamily = ({
  fonts = undefined,
  previewText = `The quick brown fox jumps over the lazy dog`,
}: FontFamilyProps) => (
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
          <div sx={{ fontFamily: value, fontSize: [theme.fontSizes[1], theme.fontSizes[2]] }}>{previewText}</div>
        </div>
      ))
    ) : (
      <div sx={{ gridTemplateColumns: `1fr !important` }}>No fonts defined</div>
    )}
  </Table>
)

export default FontFamily
