/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest"
import * as React from "react"
import { render } from "@testing-library/react"
import Video from "../video"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

describe(`Video`, () => {
  it(`should display with standard values`, () => {
    const { getByLabelText } = render(<Video src="videos/lekoarts-intro.mp4" />)

    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`))
  })
  it(`should take video props`, () => {
    const { getByLabelText } = render(<Video src="videos/lekoarts-intro.mp4" autoplay loop poster="my-poster.jpg" />)

    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`)).toHaveAttribute(`autoplay`)
    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`)).toHaveAttribute(`loop`)
    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`)).toHaveAttribute(`poster`)
  })
  it(`should take name prop`, () => {
    const { getByLabelText } = render(<Video src="videos/lekoarts-intro.mp4" name="Personal intro" />)

    expect(getByLabelText(`Video file: Personal intro`))
  })
})
