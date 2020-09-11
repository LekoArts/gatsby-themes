/** @jsx jsx */
import { jsx, Theme } from "theme-ui"
import Table from "./table"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import getValue from "../utils/get-value"
import theme from "../theme"

type BorderRadiusProps = {
  radii?: Theme["radii"]
}

const BorderRadius = ({ radii = undefined }: BorderRadiusProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <Table sx={{ ...theme.tables.borderRadius }} columns="90px 120px 1fr" titles={[`Token`, `Size`, `Preview`]}>
      {radii ? (
        Object.entries(radii).map(([key, value]) => (
          <div key={key}>
            <div>{key}</div>
            <div>{value}</div>
            <div
              sx={{
                borderRadius: `${specimensConfig.rootFontSize * getValue(value as string | number)}px`,
                width: theme.sizes[`16`],
                height: theme.sizes[`16`],
                backgroundColor: theme.colors.primary,
              }}
            />
          </div>
        ))
      ) : (
        <div sx={{ gridTemplateColumns: `1fr !important` }}>No radii defined</div>
      )}
    </Table>
  )
}

export default BorderRadius
