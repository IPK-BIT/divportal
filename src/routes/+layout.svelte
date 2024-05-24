<script>
	import Header from '../lib/components/layout/Header.svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
	import '../tailwind.css';

	import { appConfig, init } from '$lib/stores/appconfig';
	import { onMount } from 'svelte';

	onMount(async () => {
		await init();
	});
</script>

<svelte:head>
	<title>{$appConfig.crop} DivPortal</title>
	<meta name="description" content="Phenotyping Portal for exploration of observation data." />
</svelte:head>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
