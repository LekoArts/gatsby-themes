/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Table from "./table"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import removeLastThree from "../utils/remove-last-three"

type FontSizeProps = {
  fontSizes: string[]
}

const FontSize = ({ fontSizes }: FontSizeProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <Table
      sx={{ variant: `typography.fontSize`, div: { alignSelf: `center` } }}
      columns={3}
      titles={[`Token`, `Size`, `Preview`]}
    >
      {fontSizes.map((size, index) => (
        <React.Fragment key={size}>
          <div>{index}</div>
          <div>{size}</div>
          <div sx={{ fontSize: `${specimensConfig.rootFontSize * removeLastThree(size)}px` }}>Size {index}</div>
        </React.Fragment>
      ))}
    </Table>
  )
}

export default FontSize
