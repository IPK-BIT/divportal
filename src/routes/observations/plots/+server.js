import { json } from '@sveltejs/kit';
import Database from 'better-sqlite3';
import { YAxis } from 'carbon-icons-svelte';

export async function GET({ url }) {
	if (url.searchParams.has('server')) {
		const variable = await fetch(
			`${url.searchParams.get('server')}/brapi/v2/variables?observationVariableDbId=${url.searchParams.get('variable')}`,
			{
				headers: {
					Authorization: `Basic ${url.searchParams.get('authorization')}`
				}
			}
		)
			.then((response) => response.json())
			.then((data) => data.result.data[0]);

		let result;
		//TODO: add pagination
		//TODO: add Date Scale
		if (variable.scale.dataType === 'Ordinal') {
			// @ts-ignore
			result = await ordinalScale(
				// @ts-ignore
				url.searchParams.get('server'),
				variable,
				url.searchParams.get('collection'),
				url.searchParams.get('authorization'),
				url.searchParams.get('axisColor'),
				url.searchParams.get('color'),
				url.searchParams.get('includeOutliers')
			);
		} else if (variable.scale.dataType === 'Nominal') {
			// @ts-ignore
			result = await nominalScale(
				// @ts-ignore
				url.searchParams.get('server'),
				variable,
				url.searchParams.get('collection'),
				url.searchParams.get('authorization'),
				url.searchParams.get('axisColor'),
				url.searchParams.get('color'),
				url.searchParams.get('includeOutliers')
			);
		} else if (variable.scale.dataType === 'Numerical') {
			// @ts-ignore
			result = await numericalScale(
				// @ts-ignore
				url.searchParams.get('server'),
				variable,
				url.searchParams.get('collection'),
				url.searchParams.get('authorization'),
				url.searchParams.get('axisColor'),
				url.searchParams.get('color'),
				url.searchParams.get('includeOutliers')
			);
		}

		return json(result);
	}
	return json({ error: 'server not found' });
}

/**
 * @param {string} base_url
 * @param {any} variable
 * @param {string} collection
 * @param {string} authorization
 * @param {string} axisColor
 * @param {string} color
 * @param {string} includeOutliers
 */
async function ordinalScale(
	base_url,
	variable,
	collection,
	authorization,
	axisColor,
	color,
	includeOutliers
) {
	let request_url = `${base_url}/brapi/v2/observations?observationVariableDbId=${variable.observationVariableDbId}`;

	let collection_data;
	if (collection) {
		const db = new Database('static/divportal.db', { verbose: console.log });
		collection_data = db.prepare('SELECT * FROM collections WHERE listDbId = ?').get(collection);
		// @ts-ignore
		request_url += `&germplasmDbId=${collection_data.data}`;
		// request_url += `&germplasmDbId=HOR%204402`;
	}

	try {
		const response = await fetch(request_url, {
			headers: {
				Authorization: `Basic ${authorization}`
			}
		});
		const data = await response.json();
		let scale = variable.scale.validValues.categories;
		let scale_values = scale.map(
			(/** @type {{ label: string; value: string }} */ category) => category.label
		);

		let counts = Array(scale_values.length).fill(0);
		for (const observation of data.result.data) {
			let category = scale.find((/** @type {{ label: string, value: string }} */ category) => {
				return parseInt(category.value) === parseInt(observation.value);
			});
			if (category) {
				counts[scale_values.indexOf(category.label)]++;
			}
		}

		let stats = {};
		for (let scale_value of scale_values) {
			// @ts-ignore
			stats[scale_value] = counts[scale_values.indexOf(scale_value)];
		}

		return {
			data: [
				{
					x: scale_values,
					y: counts,
					marker: {
						color: collection
							? // @ts-ignore
								collection_data.additionalInfo
									.split(',')
									.find((/** @type {string} */ info) => info.startsWith('color'))
									.split(':')[1]
							: color
					},
					type: 'bar'
				}
			],
			layout: {
				paper_bgcolor: 'rgba(0,0,0,0)',
				plot_bgcolor: 'rgba(0,0,0,0)',
				yaxis: {
					color: axisColor
				},
				xaxis: {
					color: axisColor
				}
			},
			stats: stats
		};
	} catch (error) {
		return json({
			data: [],
			layout: {},
			stats: {},
			error: error
		});
	}
}

/**
 * @param {string} base_url
 * @param {any} variable
 * @param {string} collection
 * @param {string} authorization
 * @param {string} axisColor
 * @param {string} color
 * @param {string} includeOutliers
 */
async function nominalScale(
	base_url,
	variable,
	collection,
	authorization,
	axisColor,
	color,
	includeOutliers
) {
	let request_url = `${base_url}/brapi/v2/observations?observationVariableDbId=${variable.observationVariableDbId}`;

	let collection_data;
	if (collection) {
		const db = new Database('static/divportal.db', { verbose: console.log });
		collection_data = db.prepare('SELECT * FROM collections WHERE listDbId = ?').get(collection);
		// @ts-ignore
		request_url += `&germplasmDbId=${collection_data.data}`;
		// request_url += `&germplasmDbId=HOR%204402`;
	}

	try {
		const response = await fetch(request_url, {
			headers: {
				Authorization: `Basic ${authorization}`
			}
		});
		const data = await response.json();

		let scale = variable.scale.validValues.categories;
		let scale_values = scale.map(
			(/** @type {{ label: string; value: string }} */ category) => category.label
		);

		let counts = Array(scale_values.length).fill(0);
		for (const observation of data.result.data) {
			let category = scale.find((/** @type {{ label: string, value: string }} */ category) => {
				return parseInt(category.value) === parseInt(observation.value);
			});
			if (category) {
				counts[scale_values.indexOf(category.label)]++;
			}
		}

		let stats = {};
		for (let scale_value of scale_values) {
			// @ts-ignore
			stats[scale_value] = counts[scale_values.indexOf(scale_value)];
		}

		return {
			data: [
				{
					type: 'scatterpolar',
					r: counts,
					marker: {
						color: collection
							? // @ts-ignore
								collection_data.additionalInfo
									.split(',')
									.find((/** @type {string} */ info) => info.startsWith('color'))
									.split(':')[1]
							: color
					},
					theta: scale_values,
					fill: 'toself'
				}
			],
			layout: {
				paper_bgcolor: 'rgba(0,0,0,0)',
				plot_bgcolor: 'rgba(0,0,0,0)',
				yaxis: {
					color: axisColor
				},
				xaxis: {
					color: axisColor
				},
				polar: {
					bgcolor: 'rgba(0,0,0,0)',
					radialaxis: {
						visible: true,
						color: axisColor
					},
					angularaxis: {
						tickfont: {
							color: axisColor // Change the color of the labels here
						}
					}
				},
				showlegend: false
			},
			stats: stats
		};
	} catch (error) {
		return json({ data: [], layout: {}, stats: {}, error: error });
	}
}

/**
 * @param {string} base_url
 * @param {any} variable
 * @param {string} collection
 * @param {string} authorization
 * @param {string} axisColor
 * @param {string} color
 * @param {string} includeOutliers
 */
async function numericalScale(
	base_url,
	variable,
	collection,
	authorization,
	axisColor,
	color,
	includeOutliers
) {
	let request_url = `${base_url}/brapi/v2/observations?observationVariableDbId=${variable.observationVariableDbId}`;

	let collection_data;
	if (collection) {
		const db = new Database('static/divportal.db', { verbose: console.log });
		collection_data = db.prepare('SELECT * FROM collections WHERE listDbId = ?').get(collection);
		// @ts-ignore
		request_url += `&germplasmDbId=${collection_data.data}`;
		// request_url += `&germplasmDbId=HOR%204402`;
	}

	try {
		const response = await fetch(request_url, {
			headers: {
				Authorization: `Basic ${authorization}`
			}
		});
		const data = await response.json();

		/**
		 * @type number[]
		 */
		let values = [];
		for (const observation of data.result.data) {
			if (observation.value != 'nan') {
				values.push(parseFloat(observation.value));
			}
		}

		/**
		 * @type string|number[]
		 */
		let fillcolor = color.slice(5, -1).split(',').map(parseFloat);
		fillcolor[3] = 0.42;
		fillcolor = `rgba(${fillcolor.join(',')})`;

		values = values.sort((a, b) => a - b);
		let q1 = values[Math.floor(values.length * 0.25)];
		let q3 = values[Math.floor(values.length * 0.75)];
		let iqr = q3 - q1;
		let lowerFence = q1 - 1.5 * iqr;
		let upperFence = q3 + 1.5 * iqr;

		// if (includeOutliers === 'false') {
		// 	values = values.filter((value) => {
		// 		return value > lowerFence && value < upperFence;
		// 	});
		// }

		let boxPlotData = {
			name: '',
			type: 'violin',
			y: values,
			points: includeOutliers === 'false' ? false : 'outliers',
			box: {
				visible: true
			},
			meanline: {
				visible: true
			},
			fillcolor: collection
				? // @ts-ignore
					collection_data.additionalInfo
						.split(',')
						.find((/** @type {string} */ info) => info.startsWith('color'))
						.split(':')[1] + '42'
				: fillcolor,
			marker: {
				color: collection
					? // @ts-ignore
						collection_data.additionalInfo
							.split(',')
							.find((/** @type {string} */ info) => info.startsWith('color'))
							.split(':')[1]
					: color
			},
			line: {
				width: 1
			}
		};
		return {
			data: [boxPlotData],
			layout: {
				paper_bgcolor: 'rgba(0,0,0,0)',
				plot_bgcolor: 'rgba(0,0,0,0)',
				yaxis: {
					color: axisColor
				},
				xaxis: {
					color: axisColor
				}
			},
			stats: {
				Min: Math.round(Math.min(...values) * 100) / 100,
				Max: Math.round(Math.max(...values) * 100) / 100,
				Q1: Math.round(q1 * 100) / 100,
				Q3: Math.round(q3 * 100) / 100,
				Median: Math.round(values[Math.floor(values.length / 2)] * 100) / 100,
				'Lower Fence': Math.round(lowerFence * 100) / 100,
				'Upper Fence': Math.round(upperFence * 100) / 100
			}
		};

		// /**
		//  * @type number[]
		//  */
		// let labels = [];
		// /**
		//  * @type number[]
		//  */
		// let counts = [];

		// for (const observation of data.result.data) {
		// 	if (observation.value != 'nan') {
		// 		labels.push(parseFloat(observation.value));
		// 	}
		// }
		// labels = Array.from(new Set(labels)).sort((a, b) => a - b);
		// counts = Array(labels.length).fill(0);

		// for (const observation of data.result.data) {
		// 	if (observation.value != 'nan') {
		// 		counts[labels.indexOf(parseFloat(observation.value))]++;
		// 	}
		// }

		// // @ts-ignore
		// let stats = {
		// 	Min: Math.min(...labels),
		// 	Max: Math.max(...labels),
		// 	Mean: Math.round((labels.reduce((a, b) => a + b, 0) / labels.length) * 100) / 100,
		// 	Median: labels[Math.floor(labels.length / 2)]
		// };
		// // @ts-ignore
		// stats['Standard Deviation'] =
		// 	Math.round(
		// 		Math.sqrt(
		// 			labels.map((x) => Math.pow(x - stats.Mean, 2)).reduce((a, b) => a + b, 0) / labels.length
		// 		) * 100
		// 	) / 100;

		// return {
		// 	data: [
		// 		{
		// 			x: labels,
		// 			y: counts,
		// 			line: {
		// 				color: collection
		// 					? // @ts-ignore
		// 						collection_data.additionalInfo
		// 							.split(',')
		// 							.find((/** @type {string} */ info) => info.startsWith('color'))
		// 							.split(':')[1]
		// 					: '#288000'
		// 			},
		// 			type: 'scatter',
		// 			fill: 'tonexty',
		// 			mode: 'lines+markers'
		// 		}
		// 	],
		// 	layout: {},
		// 	stats: stats
		// };
	} catch (error) {
		return json({ data: [], layout: {}, stats: {}, error: error });
	}
}
