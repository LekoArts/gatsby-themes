/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, afterEach } from "vitest"
import * as React from "react"
import { render, cleanup } from "@testing-library/react"
import Video from "../video"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

afterEach(() => {
  cleanup()
})

describe(`Video`, () => {
  it(`should display with standard values`, () => {
    const { getByLabelText } = render(<Video src="videos/lekoarts-intro.mp4" />)

    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`))
  })
  it(`should take video props`, () => {
    const { getByLabelText } = render(<Video src="videos/lekoarts-intro.mp4" autoplay loop poster="my-poster.jpg" />)

    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`).getAttribute(`autoplay`)).toBe(``)
    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`).getAttribute(`loop`)).toBe(``)
    expect(getByLabelText(`Video file: videos/lekoarts-intro.mp4`).getAttribute(`poster`)).toBe(`my-poster.jpg`)
  })
  it(`should take name prop`, () => {
    const { getByLabelText } = render(<Video src="videos/lekoarts-intro.mp4" name="Personal intro" />)

    expect(getByLabelText(`Video file: Personal intro`))
  })
})
