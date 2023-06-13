module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'gradient-custom':
					'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
			}),
		},
	},
	plugins: [],
};
