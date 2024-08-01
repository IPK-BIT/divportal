<script>
	import { list } from '$lib/stores/listupload';
	import { onMount } from 'svelte';

	export let config = {
		color: '#ff0000'
	};

	onMount(() => {
		if (!$list.color) {
			$list.color = config.color;
		}
	});
</script>

<form class="space-y-2">
	<div>
		<label for="collectionName" class="block text-sm font-medium">List Name</label>
		<input
			id="collectionName"
			type="text"
			name="collectionName"
			placeholder="Enter Collection Name"
			class="mt-1 block w-full rounded-md sm:text-sm p-2"
			bind:value={$list.name}
		/>
	</div>
	<div>
		<label for="description" class="block text-sm font-medium">Description</label>
		<textarea
			id="description"
			name="description"
			rows="4"
			class="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-2"
			bind:value={$list.description}
		></textarea>
	</div>
	<div>
		<label for="colorPicker" class="block text-sm font-medium">List Color</label>
		<input
			id="colorPicker"
			type="color"
			name="color"
			class="mt-1 block w-full rounded-md sm:text-sm"
			bind:value={$list.color}
		/>
	</div>
</form>
