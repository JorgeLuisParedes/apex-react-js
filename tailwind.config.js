/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				apOrange: 'rgba(213, 44, 11, 1.0)',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
