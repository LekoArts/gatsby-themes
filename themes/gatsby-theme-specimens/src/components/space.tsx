/** @jsx jsx */
import { jsx, Theme } from "theme-ui"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import Table from "./table"
import getValue from "../utils/get-value"
import theme from "../theme"

type SpaceProps = {
  space?: Theme["space"]
}

const Space = ({ space = undefined }: SpaceProps) => {
  const specimensConfig = useSpecimensConfig()
  const formattedSpace = Array.isArray(space)
    ? space.map((entry, index) => ({ size: entry, token: index }))
    : Object.entries(space).map((entry) => ({ token: entry[0], size: entry[1] }))

  return (
    <Table
      sx={{ overflow: `auto`, ...theme.tables.space }}
      columns="80px 100px 1fr"
      titles={[`Token`, `Size`, `Preview`]}
    >
      {space ? (
        formattedSpace.map(({ size, token }) => (
          <div key={size}>
            <div>{token}</div>
            <div>{size}</div>
            <div
              sx={{
                width: `${specimensConfig.rootFontSize * getValue(size)}px`,
                height: `${specimensConfig.rootFontSize * getValue(size)}px`,
                backgroundColor: theme.colors.primary,
              }}
            />
          </div>
        ))
      ) : (
        <div sx={{ gridTemplateColumns: `1fr !important` }}>No space defined</div>
      )}
    </Table>
  )
}

export default Space
