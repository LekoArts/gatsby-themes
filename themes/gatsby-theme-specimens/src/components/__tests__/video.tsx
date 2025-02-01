/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { afterEach, describe, expect, it } from "vitest"
import Video from "../video"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

afterEach(() => {
	cleanup()
})

describe(`video`, () => {
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
