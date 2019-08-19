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

const commonAlertStyles = {
  p: 3,
  borderRadius: `lg`,
  borderWidth: `2px`,
  borderStyle: `solid`,
  fontWeight: `medium`,
  mb: 3,
  display: `grid`,
  gridTemplateColumns: `35px 1fr`,
  gridColumnGap: 3,
  alignItems: `center`,
  fontSize: 1,
  svg: {
    width: 8,
    height: 8,
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
    backgroundColor: `green.1`,
    borderColor: `green.2`,
    color: `green.8`,
    ".primary": {
      color: `green.4`,
    },
    ".secondary": {
      color: `green.8`,
    },
  },
  hint: {
    backgroundColor: `gray.1`,
    borderColor: `gray.3`,
    color: `gray.7`,
    ".primary": {
      color: `gray.4`,
    },
    ".secondary": {
      color: `gray.8`,
    },
  },
  warning: {
    backgroundColor: `orange.1`,
    borderColor: `orange.2`,
    color: `orange.8`,
    ".primary": {
      color: `orange.4`,
    },
    ".secondary": {
      color: `orange.8`,
    },
  },
  info: {
    backgroundColor: `indigo.1`,
    borderColor: `indigo.2`,
    color: `indigo.7`,
    ".primary": {
      color: `indigo.3`,
    },
    ".secondary": {
      color: `indigo.7`,
    },
  },
  danger: {
    backgroundColor: `red.1`,
    borderColor: `red.2`,
    color: `red.7`,
    ".primary": {
      color: `red.3`,
    },
    ".secondary": {
      color: `red.7`,
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
  <div data-alert-type={type} sx={{ ...commonAlertStyles, ...alerts[type], variant: `alerts.${type}` }}>
    {dict[type]}
    {children}
  </div>
)

export default Alert
