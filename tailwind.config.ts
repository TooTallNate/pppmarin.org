import plugin from 'tailwindcss/plugin';
import { blackA, mauve, violet, indigo, purple } from '@radix-ui/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				...blackA,
				...mauve,
				...violet,
				...purple,
				...indigo,
				'convention-peachcream': '#faf2e9',
				'convention-sunset': '#ff7958',
				'convention-golden': '#ffc950',
				'convention-sunflower': '#ffde59',
			},
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				montserrat: ['var(--font-montserrat)'],
				agrandir: ['var(--font-agrandir)'],
			},
			keyframes: {
				enterFromRight: {
					from: { opacity: '0', transform: 'translateX(200px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				enterFromLeft: {
					from: { opacity: '0', transform: 'translateX(-200px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				exitToRight: {
					from: { opacity: '1', transform: 'translateX(0)' },
					to: { opacity: '0', transform: 'translateX(200px)' },
				},
				exitToLeft: {
					from: { opacity: '1', transform: 'translateX(0)' },
					to: { opacity: '0', transform: 'translateX(-200px)' },
				},
				scaleIn: {
					from: {
						opacity: '0',
						transform: 'rotateX(-10deg) scale(0.9)',
					},
					to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
				},
				scaleOut: {
					from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
					to: {
						opacity: '0',
						transform: 'rotateX(-10deg) scale(0.95)',
					},
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				fadeOut: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
			},
		},
		animation: {
			scaleIn: 'scaleIn 200ms ease',
			scaleOut: 'scaleOut 200ms ease',
			fadeIn: 'fadeIn 200ms ease',
			fadeOut: 'fadeOut 200ms ease',
			enterFromLeft: 'enterFromLeft 250ms ease',
			enterFromRight: 'enterFromRight 250ms ease',
			exitToLeft: 'exitToLeft 250ms ease',
			exitToRight: 'exitToRight 250ms ease',
		},
	},
	plugins: [
		plugin(({ matchUtilities }) => {
			matchUtilities({
				perspective: (value) => ({
					perspective: value,
				}),
			});
		}),
	],
};
export default config;
