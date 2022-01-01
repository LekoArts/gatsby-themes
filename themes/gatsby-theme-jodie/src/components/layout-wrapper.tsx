/** @jsx jsx */
import { jsx, get } from "theme-ui"

type LayoutWrapperProps = { children: React.ReactNode }

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <div
    sx={{
      display: `grid`,
      gridTemplateColumns: (t) => [
        `1fr`,
        `1fr`,
        `1fr`,
        `${get(t, `sidebar.normal`)} 1fr`,
        `${get(t, `sidebar.wide`)} 1fr`,
      ],
    }}
  >
    {children}
  </div>
)

export default LayoutWrapper
