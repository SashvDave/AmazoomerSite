/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/backgrounds/CircularBackground.svg'), url('/backgrounds/LanguagesBackground.svg')",
                "circular-light": "url('/backgrounds/CircularBackground.svg')",
                "circular-dark":
                    "url('/backgrounds/CircularBackgroundDark.svg')",
                "languages-light":
                    "url('/backgrounds/LanguagesBackground.svg')",
            },
            transitionDuration: {
                400: "400ms",
            },
            colors: {
                bg: "#FFFFFF",
                "bg-dark": "#080316",
                "light-purple": "#F6F8FF",
                fg: {
                    primary: "#0D0522",
                    inverse: "#FFFFFF",
                    description: "#666666",
                    "description-on-dark": "#BCBCBC",
                    "description-on-purple": "#8B8EC2",
                    purple: "#2656FF",
                },

                accent: {
                    primary: "#2300FF",
                    secondary: "#1C40FF",
                },

                stroke: {
                    button: {
                        regular: "#00000005",
                        gradient: "#FFFFFF20",
                    },
                },

                card: {
                    dark: {
                        bg: "#13063395",
                        stroke: "#250C68",
                        title: "#ffffff",
                        span: "#ffffff",
                        button: {
                            bg: "#1A0A46",
                            text: "#5F36D9",
                            arrow: "#ffffff80",
                            stroke: "#210B60",
                        },
                        heading: "#fff",
                        description: "#ffffff78",
                    },
                },
            },
        },
    },
    plugins: [],
};
