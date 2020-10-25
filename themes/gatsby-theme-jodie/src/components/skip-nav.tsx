/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { visuallyHidden } from "../styles/utils"

const triggerCss = {
  ...visuallyHidden,
  position: `fixed`,
  zIndex: 9999999,
  top: 4,
  left: 4,
  padding: 4,
  borderRadius: `default`,
  background: `white`,
  color: `text`,
  textDecoration: `none`,
  boxShadow: `lg`,
  "&:focus": {
    width: `auto`,
    height: `auto`,
    clip: `auto`,
  },
  variant: `skip-nav`,
}

export type SkipNavProps = {
  children?: React.ReactNode
  targetId?: string
}

const SKIP_TARGET_ID = `skip-here`

export function SkipNavTrigger({ children = `Skip to content`, targetId = SKIP_TARGET_ID }: SkipNavProps) {
  const [hasAValidTarget, setHasAValidTarget] = React.useState<boolean>(false)

  React.useLayoutEffect(() => {
    const target = document.getElementById(targetId)

    if (!!target !== hasAValidTarget) {
      setHasAValidTarget(!!target)
    }
  }, [targetId, hasAValidTarget])

  // If we've rendered the trigger, but there is no target available, we don't
  // want to show the trigger. Doing so would just be frustrating, since it
  // wouldn't skip anything.
  if (!hasAValidTarget) {
    return null
  }

  return (
    // @ts-ignore
    <a href={`#${targetId}`} sx={triggerCss}>
      {children}
    </a>
  )
}

export type SkipNavTargetProps = {
  targetId?: string
}

export function SkipNavTarget({ targetId = SKIP_TARGET_ID }: SkipNavTargetProps) {
  return <div id={targetId} style={{ contain: `none` }} />
}
