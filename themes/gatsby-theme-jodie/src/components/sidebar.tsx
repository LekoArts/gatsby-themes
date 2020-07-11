/** @jsx jsx */
import { jsx } from "theme-ui"

type SidebarProps = { children: React.ReactNode; bg: string }

const Sidebar = ({ children, bg }: SidebarProps) => <div>{children}</div>

export default Sidebar
