/** @jsx jsx */
import { jsx } from "theme-ui"
import Table from "./table"

type FontFamilyProps = {
  fonts: {
    [key: string]: string
  }
}

const FontFamily = ({ fonts }: FontFamilyProps) => (
  <Table
    columns={[`100px 1fr`, `100px 300px 1fr`, `100px 350px 1fr`, `100px 450px 1fr`]}
    titles={[`Token`, `Value`, `Preview`]}
    sx={{
      "> div > div:nth-of-type(2)": {
        display: [`none`, `block`],
      },
      variant: `typography.fontFamily`,
    }}
  >
    {Object.entries(fonts).map(([key, value]) => (
      <div key={key}>
        <div>{key}</div>
        <div sx={{ fontSize: 0 }}>{value}</div>
        <div sx={{ fontFamily: value, fontSize: [1, 2] }}>Pack my box with five dozen liquor jugs</div>
      </div>
    ))}
  </Table>
)

export default FontFamily
