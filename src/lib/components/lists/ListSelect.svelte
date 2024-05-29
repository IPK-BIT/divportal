<script>
	import { createEventDispatcher, onMount } from 'svelte';

	/**
	 * @type {{listDbId: string, listName: string}[]}
	 */
	let lists = [];
	export let selectedList = '';

	onMount(async () => {
		const response = await fetch('/lists');
		lists = await response.json();
	});

	let eventdispatcher = createEventDispatcher();

	/**
	 * @param {Event} event
	 */
	function handleSelectionChange(event) {
		eventdispatcher('change', selectedList);
	}
</script>

<select
	class="select select-bordered select-sm"
	bind:value={selectedList}
	on:change={handleSelectionChange}
>
	<option value="">No List</option>
	{#each lists as list}
		<option value={list.listDbId}>{list.listName}</option>
	{/each}
</select>
