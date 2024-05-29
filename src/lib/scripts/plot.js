import { api } from '$lib/stores/apiconfig';
import { get } from 'svelte/store';
import { cssColor_to_rgba255Color } from './colorconversion';

/**
 * @param {boolean} loading
 * @param {string} selectedVariable
 * @param {string} selectedList
 * @param {any} stats
 * @param {string} includeOutliers
 */
export async function loadPlot(loading, selectedVariable, selectedList, stats, includeOutliers) {
	loading = true;
	const style = getComputedStyle(document.documentElement);
	let colorValue = style.getPropertyValue('--bc');
	const rgb = await cssColor_to_rgba255Color(`lch(${colorValue})`);

	colorValue = style.getPropertyValue('--p');
	let primary = await cssColor_to_rgba255Color(`oklch(${colorValue})`);

	if (selectedVariable === '') {
		//@ts-ignore
		Plotly.newPlot('plot', []);
		return;
	}
	let params = {
		server: get(api).base_url,
		variable: selectedVariable,
		authorization: get(api).basic_auth ? get(api).basic_auth : '',
		axisColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`,
		color: `rgba(${primary[0]}, ${primary[1]}, ${primary[2]}, ${primary[3]})`,
		includeOutliers: includeOutliers
	};
	if (selectedList !== '') {
		// @ts-ignore
		params.collection = selectedList;
	}
	const queryParams = new URLSearchParams(params);
	const response = await fetch(`/observations/plots?${queryParams.toString()}`);
	const data = await response.json();
	loading = false;

	stats = data.stats;
	//@ts-ignore
	Plotly.newPlot('plot', data.data, data.layout);
}
