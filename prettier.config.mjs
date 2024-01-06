// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'es5',
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	arrowParens: 'avoid',
	proseWrap: 'always',
	// singleAttributePerLine: true,
	experimentalTernaries: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}

export default config
