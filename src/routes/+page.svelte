<script>
	import ImageCarousel from '$lib/components/basic/ImageCarousel.svelte';
	import { appConfig } from '$lib/stores/appconfig';
</script>

<section class="p-4 flex flex-col items-center justify-center space-y-4">
	<ImageCarousel
		images={$appConfig.images.locations}
		copyrightNotice={$appConfig.images.copyright}
	/>
	<div class="flex flex-col items-center justify-center space-y-8">
		<h1 class="mt-4 text-3xl">{$appConfig.title}</h1>
		<p class="mt-4 w-2/3 text-justify">{@html $appConfig.description}</p>
	</div>
</section>
