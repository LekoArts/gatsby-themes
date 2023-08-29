/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, afterEach } from "vitest"
import * as React from "react"
import { render, cleanup } from "@testing-library/react"
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

describe(`Color Row`, () => {
  it(`should display with standard values`, () => {
    const { getByText } = render(<ColorRow color="#5a67d8" name="Harry Potter" />)

    expect(getByText(/harry potter/i))
    expect(getByText(/#5a67d8/i))
    expect(getByText(/RGB/i))
    expect(getByText(/90, 103, 216/i))
    expect(getByText(/CMYK/i))
    expect(getByText(/58, 52, 0, 15/i))
  })
  it(`prefix for name should work`, () => {
    const { getByLabelText, getByText } = render(<ColorRow color="#000" name="Harry Potter" prefix="Hogwarts - " />)

    expect(getByLabelText(`Color preview: Hogwarts - Harry Potter`))
    expect(getByText(/hogwarts - harry potter/i))
  })
})
