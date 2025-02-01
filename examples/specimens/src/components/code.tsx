/* eslint react/destructuring-assignment: 0 */
/** @jsx jsx */
import type { ThemeUIStyleObject } from "theme-ui"
import { filterStyles, normalizeThemeUIColors } from "@lekoarts/gatsby-theme-specimens"
import { useMDXComponents } from "@mdx-js/react"
import { Highlight, themes } from "prism-react-renderer"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

const badgeStyle: ThemeUIStyleObject = {
	marginBottom: `0.5rem`,
	backgroundColor: `#4c51bf`,
	display: `inline-block`,
	color: `white`,
	padding: `0.2rem 0.75rem`,
	borderRadius: `0.5rem`,
	textTransform: `uppercase`,
	fontSize: `12px`,
	letterSpacing: `0.05em`,
}

export interface ICodeProps {
	codeString: string
	language: Language
	live: boolean
	noInline: boolean
}

function Code({ codeString, language, live, noInline }: ICodeProps) {
	const {
		Alert,
		Audio,
		BorderRadius,
		ColorFamilies,
		ColorRow,
		ColorSwatch,
		Download,
		FontFamily,
		FontSize,
		FontWeight,
		Heading,
		Palette,
		Shadow,
		Space,
		Table,
		Video,
	} = useMDXComponents()

	if (live) {
		return (
			<LiveProvider
				code={codeString}
				theme={themes.vsDark}
				noInline={noInline || false}
				scope={{
					Alert,
					Audio,
					BorderRadius,
					ColorFamilies,
					ColorRow,
					ColorSwatch,
					Download,
					FontFamily,
					FontSize,
					FontWeight,
					Heading,
					Palette,
					Shadow,
					Space,
					Table,
					Video,
					normalizeThemeUIColors,
					filterStyles,
				}}
			>
				<div sx={badgeStyle}>Editor</div>
				<LiveEditor sx={{ marginBottom: `1rem`, borderRadius: `0.25rem` }} />
				<LiveError />
				<div sx={badgeStyle}>Preview</div>
				<LivePreview sx={{ marginBottom: `3rem` }} />
			</LiveProvider>
		)
	}
	return (
		<Highlight code={codeString} language={language} theme={themes.vsDark}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default Code
