/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, afterEach } from "vitest"
import * as React from "react"
import { render, cleanup } from "@testing-library/react"
import Table from "../table"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

afterEach(() => {
  cleanup()
})

describe(`Table`, () => {
  it(`should render with default config`, () => {
    const { getByText } = render(
      <Table columns="100px 200px" titles={[`Type`, `Spell`]}>
        Harry Potter
      </Table>
    )

    expect(getByText(/harry potter/i))
    expect(getByText(/type/i))
    expect(getByText(/spell/i))
  })
  it(`should accept columns prop as array`, () => {
    const { getByText } = render(
      <Table columns={[`100px 200px`, `150px 300px`]} titles={[`Type`, `Spell`]}>
        Harry Potter
      </Table>
    )

    expect(getByText(/harry potter/i))
    expect(getByText(/type/i))
    expect(getByText(/spell/i))
  })
})
