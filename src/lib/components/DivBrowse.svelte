<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{id: string}[]}
	 */
	export let samples = [];

	let browser;
	onMount(async () => {
		// @ts-ignore
		browser = await divbrowse.startApp('divbrowse', {
			apiBaseUrl: 'https://divbrowse.ipk-gatersleben.de/shape_core1000_and_cultivars'
		});
		browser.setSamples(samples);
	});
</script>

<div id="divbrowse" />
