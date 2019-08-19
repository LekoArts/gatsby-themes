/** @jsx jsx */
import { jsx } from "theme-ui"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Table from "./table"
import getValue from "../utils/get-value"

type SpaceProps = {
  space: string[]
}

const Space = ({ space }: SpaceProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <Table
      sx={{ overflow: `auto`, variant: `tables.space` }}
      columns="80px 100px 1fr"
      titles={[`Token`, `Size`, `Preview`]}
    >
      {space.map((size, index) => (
        <div key={size}>
          <div>{index}</div>
          <div>{size}</div>
          <div
            sx={{
              width: `${specimensConfig.rootFontSize * getValue(size)}px`,
              height: `${specimensConfig.rootFontSize * getValue(size)}px`,
              backgroundColor: `primary`,
            }}
          />
        </div>
      ))}
    </Table>
  )
}

export default Space
