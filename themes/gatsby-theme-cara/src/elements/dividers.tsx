/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

export const Divider = styled(`div`)<{ bg?: string; fill?: string; clipPath?: string }>`
  position: absolute;
  width: ${props => props.theme.sizes.full};
  height: ${props => props.theme.sizes.full};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`
