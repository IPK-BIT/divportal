<script>
	import ListSelect from '$lib/components/lists/ListSelect.svelte';
	import VariableSelect from '$lib/components/variables/VariableSelect.svelte';
	import { loadPlot } from '$lib/scripts/plot';


	/**
	 * @type {string}
	 */
	let selectedVariable = '';

	/**
	 * @type {string}
	 */
	let selectedList = '';

	/**
	 * @type {Object<string, any>}
	 */
	let stats = {};

	async function update() {
		stats = await loadPlot(selectedVariable, selectedList);
	}
</script>

<div class="p-2 space-y-2">
	<VariableSelect bind:value={selectedVariable} on:change={update} />
	<ListSelect bind:selectedList on:change={update} />
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
