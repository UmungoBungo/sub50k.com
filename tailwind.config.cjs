/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,ts,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: ['Plus Jakarta Sans', 'sans-serif'],
				heading: ['Syne', 'sans-serif'],
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: {
					main: 'oklch(var(--color-primary-main) / <alpha-value>)',
				},
				secondary: {
					main: 'oklch(var(--color-secondary-main) / <alpha-value>)',
				},
				text: {
					body: 'oklch(var(--color-text-body) / <alpha-value>)',
					bold: 'oklch(var(--color-text-bold) / <alpha-value>)',
					heading: 'oklch(var(--color-text-heading) / <alpha-value>)',
					muted: 'oklch(var(--color-text-muted) / <alpha-value>)',
					code: 'oklch(var(--color-text-code) / <alpha-value>)',
					link: 'oklch(var(--color-text-link) / <alpha-value>)',
					selection: 'oklch(var(--color-text-selection) / <alpha-value>)',
					ctaBtn: 'oklch(var(--color-text-cta-btn) / <alpha-value>)',
				},
				bg: {
					body: 'oklch(var(--color-bg-body) / <alpha-value>)',
					code: 'oklch(var(--color-bg-code) / <alpha-value>)',
					selection: 'oklch(var(--color-bg-selection) / <alpha-value>)',
				},
				border: {
					code: 'oklch(var(--color-border-code) / <alpha-value>)',
				},
			},
			typography: () => ({
				DEFAULT: {
					css: {
						a: {
							'text-decoration': 'none',
							'background-repeat': 'no-repeat',
							'background-size': '100% 1.5px',
							'background-position': '0 100%',
							'background-image':
								'linear-gradient(to right, oklch(var(--color-text-link)/1), oklch(var(--color-text-link)/1))',
							'&:hover': {
								color: 'oklch(var(--color-text-link))',
							},
						},
						'h1, h2, h3, h4, h5': {
							color: 'oklch(var(--color-text-heading))',
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
						blockquote: {
							border: 'none',
							position: 'relative',
							width: '96%',
							margin: '0 auto',
							'font-size': '1.0625em',
							'padding-top': '1.5rem',
							'padding-bottom': '0.5rem',
							'padding-left': '1.5rem',
							'padding-right': '1.5rem',
						},
						'blockquote::before': {
							'font-family': 'Arial',
							content: "'“'",
							'font-size': '4em',
							color: 'oklch(var(--color-text-link))',
							position: 'absolute',
							left: '-10px',
							top: '-10px',
						},
						'blockquote::after': {
							content: '',
						},
						'blockquote p:first-of-type::before': {
							content: '',
						},
						'blockquote p:last-of-type::after': {
							content: '',
						},
					},
				},
				sleek: {
					css: {
						'--tw-prose-body': 'oklch(var(--color-text-body))',
						'--tw-prose-headings': 'oklch(var(--color-text-heading))',
						'--tw-prose-lead': 'oklch(var(--color-text-body))',
						'--tw-prose-links': 'oklch(var(--color-text-body))',
						'--tw-prose-bold': 'oklch(var(--color-text-bold))',
						'--tw-prose-counters': 'oklch(var(--color-text-body))',
						'--tw-prose-bullets': 'oklch(var(--color-text-body))',
						'--tw-prose-hr': 'oklch(var(--color-text-muted))',
						'--tw-prose-quotes': 'oklch(var(--color-text-body))',
						'--tw-prose-quote-borders': 'oklch(var(--color-primary-main))',
						'--tw-prose-captions': 'oklch(var(--color-primary-main))',
						'--tw-prose-quote-captions': 'oklch(var(--color-primary-main))',
						'--tw-prose-code': 'oklch(var(--color-text-code))',
						'--tw-prose-pre-code': 'oklch(var(--color-text-code))',
						'--tw-prose-pre-bg': 'oklch(var(--color-bg-code))',
						'--tw-prose-th-borders': 'oklch(var(--color-text-muted))',
						'--tw-prose-td-borders': 'oklch(var(--color-text-muted))',
					},
				},
			}),
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
	],
};
