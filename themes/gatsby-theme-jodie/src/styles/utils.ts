import type { ThemeUIStyleObject } from "theme-ui"

export const visuallyHidden: ThemeUIStyleObject = {
  border: 0,
  clip: `rect(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
}
