/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#000000", // Change primary color to black
				secondary: "#3ac5c0", // You can update this color as needed
				tertiary: "#064000", // You can update this color as needed
				"black-100": "#002B00",
				"black-200": "#1B3D2F",
				"white-100": "#f3f3f3",
				// detail: "#16ff00", // Add a new color for the detail color
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/black-green.png')",
			},
		},
	},
	plugins: [],
};
