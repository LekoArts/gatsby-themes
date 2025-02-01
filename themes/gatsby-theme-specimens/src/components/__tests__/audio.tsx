/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { afterEach, describe, expect, it } from "vitest"
import Audio from "../audio"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

afterEach(() => {
	cleanup()
})

describe(`audio`, () => {
	it(`should display with standard values`, () => {
		const { getByLabelText, container } = render(<Audio src="sounds/wingardium-leviosa.mp3" />)

		expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`))
		expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`).getAttribute(`autoplay`)).toBe(null)
		expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`).getAttribute(`loop`)).toBe(null)
		expect(container.querySelector(`[data-name="audio-name"]`)).toBe(null)
	})
	it(`should take audio props`, () => {
		const { getByLabelText } = render(<Audio src="sounds/wingardium-leviosa.mp3" autoplay loop />)

		expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`).getAttribute(`autoplay`)).toBe(``)
		expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`).getAttribute(`loop`)).toBe(``)
	})
	it(`should take name and description props`, () => {
		const { getByText, getByLabelText } = render(
			<Audio src="sounds/wingardium-leviosa.mp3" name="Harry Potter" desc="A universal spell" />,
		)

		expect(getByText(/harry potter/i))
		expect(getByText(/a universal spell/i))
		expect(getByLabelText(`Audio file: Harry Potter`))
	})
})
