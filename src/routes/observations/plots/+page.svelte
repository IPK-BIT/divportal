<script>
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { onMount } from 'svelte';
	import { cssColor_to_rgba255Color } from '$lib/scripts/colorconversion';

	onMount(async () => {
		await updateCreds();

		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});
		let response = await fetch(`/variables?${queryParams.toString()}`);
		let data = await response.json();
		variables = data.result.data;

		response = await fetch(`/collections`);
		collections = await response.json();
	});

	/**
	 * @type {any[]}
	 */
	let variables = [];
	/**
	 * @type {string}
	 */
	let selectedVariable = '';

	/**
	 * @type {string}
	 */
	let selectedCollection = '';
	/**
	 * @type {any[]}
	 */
	let collections = [];

	/**
	 * @type {Object<string, any>}
	 */
	let stats = {};

	async function loadPlot() {
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
			server: $api.base_url,
			variable: selectedVariable,
			authorization: $api.basic_auth ? $api.basic_auth : '',
			axisColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`,
			color: `rgba(${primary[0]}, ${primary[1]}, ${primary[2]}, ${primary[3]})`
		};
		if (selectedCollection !== '') {
			// @ts-ignore
			params.collection = selectedCollection;
		}
		const queryParams = new URLSearchParams(params);
		const response = await fetch(`/observations/plots?${queryParams.toString()}`);
		const data = await response.json();

		stats = data.stats;
		//@ts-ignore
		Plotly.newPlot('plot', data.data, data.layout);
	}
</script>

<div class="p-2 space-y-2">
	<select
		class="select select-bordered select-sm"
		bind:value={selectedVariable}
		on:change={loadPlot}
	>
		<option disabled value="">Select a variable</option>
		{#each variables as variable}
			<option value={variable.observationVariableDbId}>
				{variable.observationVariableName
					? variable.observationVariableName
					: variable.observationVariableDbId}
			</option>
		{/each}
	</select>
	<select
		class="select select-bordered select-sm"
		bind:value={selectedCollection}
		on:change={loadPlot}
	>
		<option value="">No Collection</option>
		{#each collections as collection}
			<option value={collection.listDbId}>{collection.listName}</option>
		{/each}
	</select>
	{#if selectedVariable != ''}
		<div class="flex flex-row w-full">
			<div class="w-1/2 h-full bg-base-100" id="plot"></div>
			<div class="w-1/2 p-2">
				<h1 class="text-lg font-semibold">Statistics</h1>
				{#if stats}
					<table class="table">
						<tbody>
							{#each Object.keys(stats) as key}
								<tr>
									<td>{key}</td>
									<td>{stats[key]}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
			</div>
		</div>
	{/if}
</div>
