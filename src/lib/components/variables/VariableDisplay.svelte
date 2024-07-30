<script>
	import VariableTree from './VariableTree.svelte';

	/**
	 * @type {any[]}
	 */
	export let variables = [];

	/**
	 * @type {string[]}
	 */
	export let traitClasses = [];

	/**
	 * @type {any}
	 */
	let focussedItem = undefined;
</script>

<section class="flex flex-row">
	<div class="bg-base-300 w-1/2 p-4">
		<VariableTree bind:focussedItem {variables} {traitClasses} />
	</div>
	<div class="bg-base-200 w-1/2">
		{#if focussedItem}
			<table class="table">
				<tbody>
					{#each Object.keys(focussedItem) as key}
						{#if focussedItem[key]}
							<tr>
								<td>{key}</td>
								{#if typeof focussedItem[key] == 'object'}
									<td><pre>{JSON.stringify(focussedItem[key], null, 1)}</pre></td>
								{:else}
									<td>{focussedItem[key]}</td>
								{/if}
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</section>
