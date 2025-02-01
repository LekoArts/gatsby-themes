/** @jsx jsx */

interface CircleProps {
	size: string | string[]
	color:
		| `blue`
		| `orange`
		| `pink`
		| `purple`
		| `gray`
		| `black`
		| `red`
		| `yellow`
		| `green`
		| `indigo`
		| `teal`
		| `darkIndigo`
		| `strangerThings`
	top: string | string[]
	left?: string | string[]
	right?: string | string[]
	className?: string
}

function Circle({ size, color, top, left = ``, right = ``, className = `` }: CircleProps) {
	return (
		<div
			sx={{
				position: `absolute`,
				height: size,
				width: size,
				variant: `gradients.${color}`,
				borderRadius: `full`,
				top,
				left,
				right,
				zIndex: -1,
			}}
			className={className}
		/>
	)
}

interface DonutProps {
	size: string | string[]
	color: string
	width: string | string[]
	top: string | string[]
	left?: string | string[]
	right?: string | string[]
	className?: string
}

function Donut({ size, color, width, top, left = ``, right = ``, className = `` }: DonutProps) {
	return (
		<div
			sx={{
				position: `absolute`,
				height: size,
				width: size,
				backgroundColor: `transparent`,
				border: t => t?.colors?.[color]?.[5],
				borderWidth: width,
				borderStyle: `solid`,
				borderRadius: `full`,
				top,
				left,
				right,
				zIndex: -1,
			}}
			className={className}
		/>
	)
}

export { Circle, Donut }
