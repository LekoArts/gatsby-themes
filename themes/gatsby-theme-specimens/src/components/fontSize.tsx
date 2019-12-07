/** @jsx jsx */
import { jsx } from "theme-ui"
import Table from "./table"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import getValue from "../utils/get-value"
import theme from "../theme"

type FontSizeProps = {
  fontSizes: string[]
}

const FontSize = ({ fontSizes }: FontSizeProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <Table sx={{ ...theme.typography.fontSize }} columns={[`75px 100px 1fr`]} titles={[`Token`, `Size`, `Preview`]}>
      {fontSizes.map((size, index) => (
        <div key={size}>
          <div>{index}</div>
          <div>{size}</div>
          <div sx={{ fontSize: `${specimensConfig.rootFontSize * getValue(size, specimensConfig.rootFontSize)}px` }}>
            Size {index}
          </div>
        </div>
      ))}
    </Table>
  )
}

export default FontSize
