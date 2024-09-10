import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
  		colors: {
  			'usmc-scarlet': '#CC0000',
  			'usmc-gold': '#FFC300',
  			'navy-blue': '#000080',
  			'light-bg': '#F5F5F5',
  			'light-text': '#333333',
  			'light-text-secondary': '#666666',
  			'dark-bg': '#1A202C',
  			'dark-text': '#F0F4F8',
  			'dark-text-secondary': '#A0AEC0',
  			'light-accent': '#E2E8F0',
  			'dark-accent': '#2D3748',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
};

export default config;
