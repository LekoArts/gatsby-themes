/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Check from "../icons/check"
import ChevronRight from "../icons/chevron-right"
import Announcement from "../icons/announcement"
import Info from "../icons/info"
import Important from "../icons/important"

// TODO: https://github.com/typescript-eslint/typescript-eslint/pull/762 Change quotes setup so that type can also use double quotes
// eslint-disable-next-line
type AlertTypes = 'success' | 'hint' | 'warning' | 'info' | 'danger'

type AlertProps = {
  children: React.ReactNode
  type: AlertTypes
}

const dict = {
  success: <Check />,
  hint: <ChevronRight />,
  warning: <Announcement />,
  info: <Info />,
  danger: <Important />,
}

const Alert = ({ children, type }: AlertProps) => (
  <div data-alert-type={type} sx={{ variant: `alerts.${type}` }}>
    {dict[type]}
    {children}
  </div>
)

export default Alert
