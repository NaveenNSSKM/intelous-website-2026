import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-lexend)', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
                mono: ['var(--font-ibm-mono)', 'monospace'],
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}
export default config
