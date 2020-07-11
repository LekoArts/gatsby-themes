/** @jsx jsx */
import { jsx } from "theme-ui"

type LayoutWrapperProps = { children: React.ReactNode }

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <div
    sx={{
      display: `grid`,
      gridTemplateColumns: `300px 1fr`,
    }}
  >
    {children}
  </div>
)

export default LayoutWrapper
