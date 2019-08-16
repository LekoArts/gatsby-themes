/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Table from "./table"

type FontFamilyProps = {
  fonts: {
    [key: string]: string
  }
}

const FontFamily = ({ fonts }: FontFamilyProps) => (
  <Table columns={3} titles={[`Token`, `Value`, `Preview`]} hideColumnMobile={2}>
    {Object.entries(fonts).map(([key, value]) => (
      <React.Fragment key={key}>
        <div>{key}</div>
        <div>{value}</div>
        <div sx={{ fontFamily: value, fontSize: 2 }}>Pack my box with five dozen liquor jugs</div>
      </React.Fragment>
    ))}
  </Table>
)

export default FontFamily
