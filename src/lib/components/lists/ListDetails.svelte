<script>
	import { onMount } from 'svelte';

	export let listDbId = '';
	/**
	 * @type {{listDbId: string, listName: string, listDescription: string, listSize: number}}
	 */
	let list;
	onMount(async () => {
		await loadListDetails();
	});

	async function loadListDetails() {
		const response = await fetch(`/lists/${listDbId}`);
		list = (await response.json()).result;
	}
</script>

{#if list}
	<section class="space-y-4">
		<div>
			<label for="listName" class="block text-sm font-medium">List Name:</label>
			<input
				disabled
				type="text"
				id="listName"
				name="listName"
				required
				class="p-1 block w-full rounded-md border-gray-300 shadow-sm"
				bind:value={list.listName}
			/>
		</div>
		<div>
			<label for="listDescription" class="block text-sm font-medium">List Description:</label>
			<textarea
				disabled
				id="listDescription"
				name="listDescription"
				rows="4"
				class="p-1 block w-full rounded-md border-gray-300 shadow-sm"
				bind:value={list.listDescription}
			></textarea>
		</div>
		<div>
			<label for="listSize" class="block text-sm font-medium">List Size:</label>
			<input
				disabled
				type="number"
				id="listSize"
				name="listSize"
				min="1"
				required
				class="p-1 block w-full rounded-md shadow-sm"
				bind:value={list.listSize}
			/>
		</div>
	</section>
{/if}
