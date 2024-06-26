module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: { react: { version: '18.2' } },
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['src/**/*.ts'],
			rules: {
				'hexagonal-architecture/enforce': ['error'],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-refresh', 'hexagonal-architecture'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import/export': 0,
		'react/no-unescaped-entities': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'no-unused-vars': 'off',
		'import/no-absolute-path': 'off',
	},
};
