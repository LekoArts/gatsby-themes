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
  let formattedSpace
  if (Array.isArray(space)) {
    formattedSpace = space.map((entry, index) => ({ size: entry, token: index }))
  } else {
    // @ts-ignore
    formattedSpace = Object.entries(space).map((entry) => ({ token: entry[0], size: entry[1] }))
  }

  return (
    <Table
      sx={{ overflow: `auto`, ...theme.tables.space }}
      columns="80px 100px 1fr"
      titles={[`Token`, `Size`, `Preview`]}
    >
      {space ? (
        formattedSpace.map(({ size, token }) => {
          const calculatedValue = getValue(size as number | string)

          return (
            <div key={`${size}`}>
              <div>{token}</div>
              {/* @ts-ignore */}
              <div>{size}</div>
              <div
                sx={{
                  width: `${specimensConfig.rootFontSize * calculatedValue}px`,
                  height: `${specimensConfig.rootFontSize * calculatedValue}px`,
                  backgroundColor: theme.colors.primary,
                }}
              />
            </div>
          )
        })
      ) : (
        <div sx={{ gridTemplateColumns: `1fr !important` }}>No space defined</div>
      )}
    </Table>
  )
}

export default Space
