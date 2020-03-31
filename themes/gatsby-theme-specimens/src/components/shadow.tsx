/** @jsx jsx */
import { jsx } from "theme-ui"
import Table from "./table"
import theme from "../theme"

type ShadowProps = {
  shadows: {
    [key: string]: string
  }
}

const Shadow = ({ shadows }: ShadowProps) => (
  <Table
    sx={{
      "> div:nth-of-type(even)": { backgroundColor: theme.colors.gray[2], borderRadius: theme.radii.default },
      "> div:nth-of-type(odd):not(:first-of-type)": {
        backgroundColor: theme.colors.gray[1],
        borderRadius: theme.radii.default,
      },
      "> div:not(:first-of-type)": { py: theme.space[4] },
      ...theme.tables.shadow,
    }}
    columns="120px 1fr"
    titles={[`Token`, `Preview`]}
  >
    {Object.entries(shadows).map(([key, value]) => (
      <div key={key}>
        <div>{key}</div>
        <div
          sx={{
            width: theme.sizes[`16`],
            height: theme.sizes[`16`],
            backgroundColor: theme.colors.white,
            boxShadow: value,
          }}
        />
      </div>
    ))}
  </Table>
)

export default Shadow
