/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Check from "../icons/check"
import ChevronRight from "../icons/chevron-right"
import Announcement from "../icons/announcement"
import Info from "../icons/info"
import Important from "../icons/important"
import theme from "../theme"

type AlertTypes = "success" | "hint" | "warning" | "info" | "danger"

type AlertProps = {
  children: React.ReactNode
  type: AlertTypes
}

const commonAlertStyles = {
  p: theme.space[3],
  borderRadius: theme.radii.lg,
  borderWidth: `2px`,
  borderStyle: `solid`,
  fontWeight: theme.fontWeights.medium,
  mb: theme.space[3],
  display: `grid`,
  gridTemplateColumns: `35px 1fr`,
  gridColumnGap: theme.space[3],
  alignItems: `center`,
  fontSize: theme.fontSizes[1],
  svg: {
    width: theme.sizes[`8`],
    height: theme.sizes[`8`],
    ".primary": {
      fill: `currentColor`,
    },
    ".secondary": {
      fill: `currentColor`,
    },
  },
}

const alerts = {
  success: {
    backgroundColor: theme.colors.green[1],
    borderColor: theme.colors.green[2],
    color: theme.colors.green[8],
    ".primary": {
      color: theme.colors.green[4],
    },
    ".secondary": {
      color: theme.colors.green[8],
    },
  },
  hint: {
    backgroundColor: theme.colors.gray[1],
    borderColor: theme.colors.gray[3],
    color: theme.colors.gray[7],
    ".primary": {
      color: theme.colors.gray[4],
    },
    ".secondary": {
      color: theme.colors.gray[8],
    },
  },
  warning: {
    backgroundColor: theme.colors.orange[1],
    borderColor: theme.colors.orange[2],
    color: theme.colors.orange[8],
    ".primary": {
      color: theme.colors.orange[4],
    },
    ".secondary": {
      color: theme.colors.orange[8],
    },
  },
  info: {
    backgroundColor: theme.colors.indigo[1],
    borderColor: theme.colors.indigo[2],
    color: theme.colors.indigo[7],
    ".primary": {
      color: theme.colors.indigo[3],
    },
    ".secondary": {
      color: theme.colors.indigo[7],
    },
  },
  danger: {
    backgroundColor: theme.colors.red[1],
    borderColor: theme.colors.red[2],
    color: theme.colors.red[7],
    ".primary": {
      color: theme.colors.red[3],
    },
    ".secondary": {
      color: theme.colors.red[7],
    },
  },
}

const dict = {
  success: <Check />,
  hint: <ChevronRight />,
  warning: <Announcement />,
  info: <Info />,
  danger: <Important />,
}

const Alert = ({ children, type = `hint` }: AlertProps) => (
  <div data-alert-type={type} sx={{ ...commonAlertStyles, ...alerts[type], ...theme.alerts[type] }}>
    {dict[type]}
    {children}
  </div>
)

export default Alert
