import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#e5e7eb',      // example border color
        ring: '#3b82f6',        // example ring color
        background: '#ffffff',  // background color
        foreground: '#111827',  // text color
        primary: '#3b82f6',     // for your buttonVariants
        'primary-foreground': '#ffffff',
        destructive: '#ef4444',
        'secondary-foreground': '#1f2937',
        // add more colors as needed
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
