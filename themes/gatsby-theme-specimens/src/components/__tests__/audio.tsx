import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Audio from "../audio"

describe(`Audio`, () => {
  it(`should display with standard values`, () => {
    const { getByLabelText, container } = render(<Audio src="sounds/wingardium-leviosa.mp3" />)

    expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`))
    expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`)).not.toHaveAttribute(`autoplay`)
    expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`)).not.toHaveAttribute(`loop`)
    expect(container.querySelector(`[data-name="audio-name"]`)).toBe(null)
  })
  it(`should take audio props`, () => {
    const { getByLabelText } = render(<Audio src="sounds/wingardium-leviosa.mp3" autoplay loop />)

    expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`)).toHaveAttribute(`autoplay`)
    expect(getByLabelText(`Audio file: sounds/wingardium-leviosa.mp3`)).toHaveAttribute(`loop`)
  })
  it(`should take name and description props`, () => {
    const { getByText, getByLabelText } = render(
      <Audio src="sounds/wingardium-leviosa.mp3" name="Harry Potter" desc="A universal spell" />
    )

    expect(getByText(/harry potter/i))
    expect(getByText(/a universal spell/i))
    expect(getByLabelText(`Audio file: Harry Potter`))
  })
})
