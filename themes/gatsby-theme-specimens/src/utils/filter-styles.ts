import type { Theme } from "theme-ui"

interface filterStylesType {
	input: Theme[`styles`]
	allowed: string[]
}

function filterStyles({ input, allowed }: filterStylesType) {
	if (!input) {
		return undefined
	}

	return allowed.reduce((obj, key) => {
		// If a key is only existing in "allowed" but not in the "input", skip it
		// Otherwise e.g. h3: undefined will be added

		if (!input[key]) {
			return { ...obj }
		}

		return { ...obj, [key]: input[key] }
	}, {})
}

export default filterStyles
