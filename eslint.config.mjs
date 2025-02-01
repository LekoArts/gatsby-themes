import antfu from '@antfu/eslint-config'

export default antfu({
	formatters: true,
	react: true,
	typescript: true,
	stylistic: {
		indent: `tab`,
		quotes: `backtick`,
		semi: false,
	},
})
