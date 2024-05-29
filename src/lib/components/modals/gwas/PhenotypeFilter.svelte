<script>
	import { params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';
	import { loadPlot } from '$lib/scripts/plot.js';
	import VariableSelect from '$lib/components/variables/VariableSelect.svelte';
	import RadioSelect from '$lib/components/basic/forms/RadioSelect.svelte';

	export let config;

	onMount(async () => {
		if ($params.includeOutliers == '') {
			$params.includeOutliers = config.includeOutliers;
		}
		if ($params.variable) {
			await update();
		}
	});

	async function update() {
		loadPlot(false, $params.variable, $params.list, null, $params.includeOutliers.toString());
	}
</script>

<form class="space-y-4">
	<VariableSelect bind:value={$params.variable} on:change={update} />
	<RadioSelect
		param={{
			short: 'outliers',
			label: 'Include Outliers'
		}}
		options={[
			{ value: true, label: 'Yes' },
			{ value: false, label: 'No' }
		]}
		bind:value={$params.includeOutliers}
		on:change={update}
	/>
	<div id="plot" />
</form>
