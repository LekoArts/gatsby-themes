/** @jsx jsx */
import { jsx } from "theme-ui"
import Table from "./table"

type ShadowProps = {
  shadows: {
    [key: string]: string
  }
}

const Shadow = ({ shadows }: ShadowProps) => (
  <Table
    sx={{
      "> div:nth-of-type(even)": { backgroundColor: `gray.2`, borderRadius: `default` },
      "> div:nth-of-type(odd):not(:first-of-type)": { backgroundColor: `gray.1`, borderRadius: `default` },
      "> div:not(:first-of-type)": { py: 4 },
      variant: `tables.shadow`,
    }}
    columns="120px 1fr"
    titles={[`Token`, `Preview`]}
  >
    {Object.entries(shadows).map(([key, value]) => (
      <div key={key}>
        <div>{key}</div>
        <div
          sx={{
            width: 16,
            height: 16,
            backgroundColor: `white`,
            boxShadow: value,
          }}
        />
      </div>
    ))}
  </Table>
)

export default Shadow
