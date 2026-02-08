import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "var(--color-border)",
                input: "var(--color-input)",
                ring: "var(--color-ring)",
                background: "var(--color-bg-900)",
                foreground: "var(--color-text-primary)",
                primary: {
                    DEFAULT: "var(--color-primary)",
                    foreground: "#ffffff",
                    hover: "var(--color-primary-hover)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)",
                    foreground: "#ffffff",
                },
                destructive: {
                    DEFAULT: "var(--color-danger)",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "var(--color-bg-700)",
                    foreground: "var(--color-text-secondary)",
                },
                accent: {
                    DEFAULT: "var(--color-accent)",
                    foreground: "#ffffff",
                },
            },
            borderRadius: {
                lg: "var(--radius-lg)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
                xl: "var(--radius-xl)",
            },
            fontFamily: {
                display: ["var(--font-display)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                float: {
                    "0%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                    "100%": { transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
