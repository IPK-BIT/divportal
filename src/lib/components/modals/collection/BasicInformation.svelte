<script>
	import { collection } from '$lib/stores/collectionupload';
	import { onMount } from 'svelte';

	export let config = {
		color: '#ff0000'
	};

	onMount(() => {
		if (!$collection.color) {
			$collection.color = config.color;
		}
	});
</script>

<form class="space-y-2">
	<div>
		<label for="collectionName" class="block text-sm font-medium">Collection Name</label>
		<input
			id="collectionName"
			type="text"
			name="collectionName"
			placeholder="Enter Collection Name"
			class="mt-1 block w-full rounded-md sm:text-sm p-2"
			bind:value={$collection.name}
		/>
	</div>
	<div>
		<label for="description" class="block text-sm font-medium">Description</label>
		<textarea
			id="description"
			name="description"
			rows="4"
			class="mt-1 block w-full rounded-md shadow-sm sm:text-sm p-2"
			bind:value={$collection.description}
		></textarea>
	</div>
	<div>
		<label for="colorPicker" class="block text-sm font-medium text-gray-700">Collection Color</label
		>
		<input
			id="colorPicker"
			type="color"
			name="color"
			class="mt-1 block w-full rounded-md sm:text-sm"
			bind:value={$collection.color}
		/>
	</div>
</form>
