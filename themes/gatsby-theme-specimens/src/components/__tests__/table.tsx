import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Table from "../table"

describe(`Table`, () => {
  it(`should render with default config`, () => {
    const { getByTestId, getByText } = render(
      <Table columns="100px 200px" titles={[`Type`, `Spell`]}>
        Harry Potter
      </Table>
    )

    expect(getByTestId(`table-header`)).toHaveStyle(`display: grid; grid-template-columns: 100px 200px;`)
    expect(getByText(/harry potter/i))
    expect(getByText(/type/i))
    expect(getByText(/spell/i))
  })
  it(`should accept columns prop as array`, () => {
    const { getByTestId } = render(
      <Table columns={[`100px 200px`, `150px 300px`]} titles={[`Type`, `Spell`]}>
        Harry Potter
      </Table>
    )

    expect(getByTestId(`table-header`)).toHaveStyle(`display: grid; grid-template-columns: 100px 200px;`)
  })
})
