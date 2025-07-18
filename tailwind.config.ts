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
                // DevBran.ch brand colors
                "devbranch-primary": "var(--devbranch-primary)",
                "devbranch-accent-pink": "var(--devbranch-accent-pink)",
                "devbranch-accent-green": "var(--devbranch-accent-green)",
                "devbranch-accent-dark-green": "var(--devbranch-accent-dark-green)",
                "devbranch-text": "var(--devbranch-text)",
            },
            borderRadius: {
                lg: "var(--radius-lg)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "fade-out": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.2s ease-in-out",
                "fade-out": "fade-out 0.2s ease-in-out",
            },
        },
    },
    plugins: [],
};

export default config;