/** @jsx jsx */
import { get } from "theme-ui"

interface LayoutWrapperProps { children: React.ReactNode }

function LayoutWrapper({ children }: LayoutWrapperProps) {
	return (
		<div
			sx={{
				display: `grid`,
				gridTemplateColumns: t => [
					`1fr`,
					`1fr`,
					`1fr`,
					`${get(t, `sidebar.normal`)} 1fr`,
					`${get(t, `sidebar.wide`)} 1fr`,
				],
			}}
		>
			{children}
		</div>
	)
}

export default LayoutWrapper
