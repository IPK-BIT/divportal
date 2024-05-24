<script>
	/**
	 * @type {string | any[]}
	 */
	export let images = [];
	export let copyrightNotice = '';
	let currentIndex = 0;

	function next() {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
	}
	function prev() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	}
</script>

<div class="relative w-full">
	{#each images as image, i}
		<div class="w-full">
			{#if i === currentIndex}
				<img src={image} alt="carousel" class="w-full rounded-2xl" />
			{/if}
		</div>
	{/each}
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<button on:click={prev} class="btn btn-circle btn-outline">❮</button>
		<button on:click={next} class="btn btn-circle btn-outline">❯</button>
	</div>
	{#if copyrightNotice}
		<div class="absolute flex justify-between transform -translate-y-full right-5 top-full">
			<span class="p-1 bg-base-200 opacity-70 text-xs font-serif italic">© {copyrightNotice}</span>
		</div>
	{/if}
</div>
