/** @jsx jsx */

interface InnerProps {
	className?: string
	children: React.ReactNode
}

function Inner({ className = ``, children }: InnerProps) {
	return (
		<div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }} className={className}>
			{children}
		</div>
	)
}

export default Inner
