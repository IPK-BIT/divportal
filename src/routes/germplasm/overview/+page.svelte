<script>
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { onMount } from 'svelte';
	import { cssColor_to_rgba255Color } from '$lib/scripts/colorconversion';

	onMount(async () => {
		const style = getComputedStyle(document.documentElement);
		let colorValue = style.getPropertyValue('--bc');
		//FIXME: On reload the colorValue is black
		const rgb = await cssColor_to_rgba255Color(`oklch(${colorValue})`);

		await updateCreds();

		colorValue = style.getPropertyValue('--p');
		let primary = await cssColor_to_rgba255Color(`oklch(${colorValue})`);

		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : '',
			color: `rgba(${primary[0]}, ${primary[1]}, ${primary[2]}, ${primary[3]})`
		});
		const response = await fetch(`/germplasm/overview?${queryParams.toString()}`);
		const data = await response.json();

		// @ts-ignore
		Plotly.newPlot('overview-pcd', data, {
			paper_bgcolor: 'rgba(0,0,0,0)',
			plot_bgcolor: 'rgba(0,0,0,0)',
			font: {
				color: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`
			}
		});
	});
</script>

<div class="p-2">
	<div id="overview-pcd"></div>
</div>
