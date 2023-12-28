/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {

				"primary": "#65E2CA",

			},
			fontFamily: {

				"gilmer": ["Gilmer", "sans"],
				"postbox": ["Post Box", "sans"],

			}

		}
	},
	plugins: [],
}
