/** @jsx jsx */
import type { Theme } from "theme-ui"
import theme from "../theme"
import Table from "./table"

interface FontWeightProps {
	fontWeights?: Theme[`fontWeights`]
	previewText?: string
}

function FontWeight({
	fontWeights = undefined,
	previewText = `The quick brown fox jumps over the lazy dog`,
}: FontWeightProps) {
	return (
		<Table
			columns={[`110px 1fr`, `110px 80px 1fr`]}
			titles={[`Token`, `Value`, `Preview`]}
			sx={{
				"div": { alignSelf: `center` },
				"> div > div:nth-of-type(2)": {
					display: [`none`, `block`],
				},
				...theme.typography.fontWeight,
			}}
		>
			{fontWeights ? (
				Object.entries(fontWeights).map(([key, value]) => (
					<div key={key}>
						<div>{key}</div>
						{/* @ts-ignore */}
						<div>{value}</div>
						<div sx={{ fontWeight: value, fontSize: [theme.fontSizes[1], theme.fontSizes[2]] }}>{previewText}</div>
					</div>
				))
			) : (
				<div sx={{ gridTemplateColumns: `1fr !important` }}>No fontWeights defined</div>
			)}
		</Table>
	)
}

export default FontWeight
