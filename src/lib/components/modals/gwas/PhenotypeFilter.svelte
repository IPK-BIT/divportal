<script>
	import { params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';
	import { loadPlot } from '$lib/scripts/plot.js';
	import VariableSelect from '$lib/components/variables/VariableSelect.svelte';

	export let config;

	onMount(async () => {
		if ($params.variable) {
			await update();
		}
	});

	async function update() {
		loadPlot($params.variable, $params.list);
	}
</script>

<form class="space-y-4">
	<VariableSelect bind:value={$params.variable} on:change={update} />
	<div id="plot" />
</form>
