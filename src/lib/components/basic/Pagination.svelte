<script>
	import { createEventDispatcher } from 'svelte';

	export let curPage = 0;
	export let totalPages = 0;

	const eventDispatcher = createEventDispatcher();

	/**
	 * @param {string} dir
	 */
	function paginate(dir) {
		eventDispatcher('paginate', { dir });
	}
</script>

<div class="join grid grid-cols-3">
	<button
		class="join-item btn bg-base-300 {curPage <= 0 ? 'btn-disabled' : ''}"
		on:click={() => {
			paginate('prev');
		}}>«</button
	>
	<p class="label flex justify-center bg-base-300">
		{curPage + 1}/{totalPages}
	</p>
	<button
		class="join-item btn bg-base-300 {curPage + 1 >= totalPages ? 'btn-disabled' : ''}"
		on:click={() => {
			paginate('next');
		}}>»</button
	>
</div>
