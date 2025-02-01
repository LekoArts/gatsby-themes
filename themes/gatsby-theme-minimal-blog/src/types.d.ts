import type * as React from "react"

export type Language =
	| `markup`
	| `bash`
	| `clike`
	| `c`
	| `cpp`
	| `css`
	| `javascript`
	| `jsx`
	| `coffeescript`
	| `actionscript`
	| `css-extr`
	| `diff`
	| `git`
	| `go`
	| `graphql`
	| `handlebars`
	| `json`
	| `less`
	| `makefile`
	| `markdown`
	| `objectivec`
	| `ocaml`
	| `python`
	| `reason`
	| `sass`
	| `scss`
	| `sql`
	| `stylus`
	| `tsx`
	| `typescript`
	| `wasm`
	| `yaml`

interface Token {
	types: string[]
	content: string
	empty?: boolean
}

interface PrismGrammar {
	[key: string]: any
}

type LanguageDict = { [lang in Language]: PrismGrammar }

interface PrismLib {
	languages: LanguageDict
	tokenize: (code: string, grammar: PrismGrammar, language: Language) => PrismToken[] | string[]
	highlight: (code: string, grammar: PrismGrammar, language: Language) => string
}

interface PrismThemeEntry {
	color?: string
	backgroundColor?: string
	fontStyle?: `normal` | `italic`
	fontWeight?: `normal` | `bold` | `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900`
	textDecorationLine?: `none` | `underline` | `line-through` | `underline line-through`
	opacity?: number
	[styleKey: string]: string | number | void
}

interface PrismTheme {
	plain: PrismThemeEntry
	styles: Array<{
		types: string[]
		style: PrismThemeEntry
		languages?: Language[]
	}>
}

interface ThemeDict {
	root: StyleObj
	plain: StyleObj
	[type: string]: StyleObj
}

interface PrismToken {
	type: string
	content: Array<PrismToken | string> | string
}

interface StyleObj {
	[key: string]: string | number | null
}

interface LineInputProps {
	key?: React.Key
	style?: StyleObj
	className?: string
	line: Token[]
	[otherProp: string]: any
}

interface LineOutputProps {
	key?: React.Key
	style?: StyleObj
	className: string
	[otherProps: string]: any
}

interface TokenInputProps {
	key?: React.Key
	style?: StyleObj
	className?: string
	token: Token
	[otherProp: string]: any
}

interface TokenOutputProps {
	key?: React.Key
	style?: StyleObj
	className: string
	children: string
	[otherProp: string]: any
}

interface RenderProps {
	tokens: Token[][]
	className: string
	style: StyleObj
	getLineProps: (input: LineInputProps) => LineOutputProps
	getTokenProps: (input: TokenInputProps) => TokenOutputProps
}

interface DefaultProps {
	Prism: PrismLib
	theme: PrismTheme
}

interface HighlightProps {
	Prism: PrismLib
	theme?: PrismTheme
	language: Language
	code: string
	children: (props: RenderProps) => React.ReactNode
}
