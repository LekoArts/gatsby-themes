/** @jsx jsx */
import type { Theme } from "theme-ui"
import useSpecimensConfig from "../hooks/useSpecimensConfig"
import theme from "../theme"
import getValue from "../utils/get-value"
import Table from "./table"

interface FontSizeProps {
	fontSizes?: Theme[`fontSizes`]
}

function FontSize({ fontSizes = undefined }: FontSizeProps) {
	const specimensConfig = useSpecimensConfig()

	return (
		<Table sx={{ ...theme.typography.fontSize }} columns={[`75px 100px 1fr`]} titles={[`Token`, `Size`, `Preview`]}>
			{fontSizes && Array.isArray(fontSizes)
				? (
						fontSizes.map((size, index) => (
							<div key={size}>
								<div>{index}</div>
								<div>{size}</div>
								<div sx={{ fontSize: `${specimensConfig.rootFontSize * getValue(size, specimensConfig.rootFontSize)}px` }}>
									Size
									{` `}
									{index}
								</div>
							</div>
						))
					)
				: (
						<div sx={{ gridTemplateColumns: `1fr !important` }}>No font sizes defined</div>
					)}
		</Table>
	)
}

export default FontSize
