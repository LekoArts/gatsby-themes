/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { afterEach, describe, expect, it, vi } from "vitest"
import ColorRow from "../color-row"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

afterEach(() => {
	cleanup()
})

vi.mock(`../../hooks/useSpecimensConfig`, () => ({
	default: vi.fn(() => ({
		contrastGuidelines: `AA`,
		CMYK: true,
		codeExample: true,
		rootFontSize: 16,
	})),
}))

describe(`color Row`, () => {
	it(`should display with standard values`, () => {
		const { getByText } = render(<ColorRow color="#5a67d8" name="Harry Potter" />)

		expect(getByText(/harry potter/i))
		expect(getByText(/#5a67d8/i))
		expect(getByText(/RGB/i))
		expect(getByText(/90, 103, 216/))
		expect(getByText(/CMYK/i))
		expect(getByText(/58, 52, 0, 15/))
	})
	it(`prefix for name should work`, () => {
		const { getByLabelText, getByText } = render(<ColorRow color="#000" name="Harry Potter" prefix="Hogwarts - " />)

		expect(getByLabelText(`Color preview: Hogwarts - Harry Potter`))
		expect(getByText(/hogwarts - harry potter/i))
	})
})
