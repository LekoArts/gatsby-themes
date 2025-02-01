import { useState } from "react"
/** @jsx jsx */

import { visuallyHidden } from "../styles/utils"
import copyToClipboard from "../utils/copy-to-clipboard"

function delay(duration: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration)
	})
}

interface CopyProps {
	content: string
	duration?: number
	fileName?: string
	trim?: boolean
}

function Copy({ content, duration = 5000, fileName = ``, trim = false }: CopyProps) {
	const [copied, setCopied] = useState(false)

	const label = copied
		? `${fileName ? `${fileName} ` : ``}copied to clipboard`
		: `${fileName ? `${fileName}: ` : ``}copy code to clipboard`

	return (
		<button
			type="button"
			name={label}
			disabled={copied}
			className="code-copy-button"
			sx={{
				variant: `copyButton`,
			}}
			onClick={async () => {
				await copyToClipboard(trim ? content.trim() : content)
				setCopied(true)
				await delay(duration)
				setCopied(false)
			}}
		>
			{copied ? `Copied` : `Copy`}
			<span sx={visuallyHidden} aria-roledescription="status">
				{label}
			</span>
		</button>
	)
}

export default Copy
