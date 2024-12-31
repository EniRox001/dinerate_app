import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			underlay: 'url(',
  			https: 'gradient-radial',
  			'radial-gradient(var(--tw-gradient-stops))': ',',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'gradient-bg': 'linear-gradient(to right top, #0d173d, #092449, #073153, #0b3d5c, #154a64)'
  		},
  		colors: {
  			spray: {
  				'50': '#ecfdff',
  				'100': '#cef8ff',
  				'200': '#a4f0fd',
  				'300': '#6ae3fb',
  				'400': '#1fcbf1',
  				'500': '#03aed7',
  				'600': '#0689b4',
  				'700': '#0c6e92',
  				'800': '#145a76',
  				'900': '#154a64',
  				'950': '#073045'
  			},
  			chestnut: {
  				'50': '#fcf5f4',
  				'100': '#fae8e6',
  				'200': '#f6d5d2',
  				'300': '#efb7b2',
  				'400': '#e48d85',
  				'500': '#d6675d',
  				'600': '#c4544a',
  				'700': '#a23c33',
  				'800': '#86352e',
  				'900': '#70322c',
  				'950': '#3c1613'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
