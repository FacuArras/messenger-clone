import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkMain: "#52A5E0",
        darkTitle: "#EFF3F5",
        darkText: "#C8CDD0",
        darkLightText: "#A0A7AC",
        darkBorder: "#2A3B47",
        darkContainer: "#212E36",
        darkBody: "#192229"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    })
  ],
}

export default config
