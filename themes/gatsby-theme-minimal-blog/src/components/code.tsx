import type { GetLanguageInput } from "@lekoarts/themes-utils"
import { calculateLinesToHighlight, getLanguage } from "@lekoarts/themes-utils"
import { Highlight } from "prism-react-renderer"
import * as React from "react"
import { useColorMode } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import { darkTheme, lightTheme } from "../utils/prism-themes"
import Copy from "./copy"

interface CodeProps {
	codeString: string
	withLineNumbers?: boolean
	highlight?: string
	title?: string
	className: GetLanguageInput
}

function Code({
	codeString,
	withLineNumbers = false,
	title = ``,
	className: blockClassName,
	highlight = ``,
}: CodeProps) {
	const { showLineNumbers, showCopyButton } = useMinimalBlogConfig()
	const [colorMode] = useColorMode<`light` | `dark`>()
	const isDark = colorMode === `dark`

	const language = getLanguage(blockClassName)
	const shouldHighlightLine = calculateLinesToHighlight(highlight)
	const shouldShowLineNumbers = withLineNumbers || showLineNumbers

	return (
		<Highlight
			code={codeString}
			// @ts-ignore
			language={language}
			theme={isDark ? darkTheme : lightTheme}
		>
			{({ className, tokens, getLineProps, getTokenProps }) => (
				<>
					<div className="gatsby-highlight" data-language={language}>
						{title && (
							<div className="code-title">
								<div>{title}</div>
							</div>
						)}
						<pre className={className} data-linenumber={shouldShowLineNumbers}>
							{showCopyButton && <Copy content={codeString} fileName={title} />}
							<code className={`code-content language-${language}`}>
								{tokens.map((line, i) => {
									const lineProps = getLineProps({ line, key: i })

									if (shouldHighlightLine(i)) {
										lineProps.className = `${lineProps.className} highlight-line`
										lineProps.style = {
											...lineProps.style,
											backgroundColor: `var(--theme-ui-colors-highlightLineBg)`,
										}
									}

									return (
										<div {...lineProps}>
											{shouldShowLineNumbers && <span className="line-number-style">{i + 1}</span>}
											{line.map((token, key) => (
												<span {...getTokenProps({ token, key })} />
											))}
										</div>
									)
								})}
							</code>
						</pre>
					</div>
				</>
			)}
		</Highlight>
	)
}

export default Code
