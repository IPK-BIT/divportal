module.exports = {
	content: [
		// Add paths to all of your components here
		'./src/**/*.svelte',
		'./src/**/*.html'
	],
	theme: {},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				ipk: {
					primary: '#4A8C2B',
					secondary: '#77A66A',
					accent: '#ccff33',
					neutral: '#006666',
					'base-100': '#E8F2E4',
					info: '#5687DB',
					success: '#3BDB31',
					warning: '#D1C22C',
					error: '#DB4D46'
				}
			},
			{
				ipkdark: {
					primary: '#4A8C2B',
					secondary: '#77A66A',
					accent: '#ccff33',
					neutral: '#006666',
					'base-100': '#212121',
					info: '#5687DB',
					success: '#3BDB31',
					warning: '#D1C22C',
					error: '#DB4D46'
				}
			},
			{
				brapi: {
					primary: '#00A040',
					secondary: '#006000',
					accent: '#A0C018',
					neutral: '#063606',
					'base-100': '#f5f2f2',
					info: '#0A2062',
					success: '#006730',
					warning: '#6D5F05',
					error: '#7D0F01'
				}
			},
			// {
			// 	germinate: {
			// 		primary: '#04C4D9',
			// 		secondary: '#2C89A0',
			// 		accent: '#0DF205',
			// 		neutral: '#216778',
			// 		'base-100': '#FFFFFF',
			// 		info: '#3498DB',
			// 		success: '#2ECC71',
			// 		warning: '#F1C40F',
			// 		error: '#E74C3C'
			// 	}
			// },
			'lemonade',
			'forest',
			'coffee',
		]
	}
};
