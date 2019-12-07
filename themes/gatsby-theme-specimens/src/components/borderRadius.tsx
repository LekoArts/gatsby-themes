/** @jsx jsx */
import { jsx } from "theme-ui"
import Table from "./table"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import getValue from "../utils/get-value"
import theme from "../theme"

type BorderRadiusProps = {
  radii: {
    [key: string]: string
  }
}

const BorderRadius = ({ radii }: BorderRadiusProps) => {
  const specimensConfig = useSpecimensConfig()

  return (
    <Table sx={{ ...theme.tables.borderRadius }} columns="90px 120px 1fr" titles={[`Token`, `Size`, `Preview`]}>
      {Object.entries(radii).map(([key, value]) => (
        <div key={key}>
          <div>{key}</div>
          <div>{value}</div>
          <div
            sx={{
              borderRadius: `${specimensConfig.rootFontSize * getValue(value)}px`,
              width: theme.sizes[`16`],
              height: theme.sizes[`16`],
              backgroundColor: theme.colors.primary,
            }}
          />
        </div>
      ))}
    </Table>
  )
}

export default BorderRadius
