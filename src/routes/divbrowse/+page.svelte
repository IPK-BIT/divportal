<script>
	import DivBrowse from '$lib/components/DivBrowse.svelte';
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { onMount } from 'svelte';

	/**
	 * @type {{id: string}[]}
	 */
	let samples = [];

	onMount(async () => {
		await updateCreds();
		
		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});
		const response = await fetch(`/divbrowse?${queryParams.toString()}`);
		samples = await response.json();
	})
</script>

{#if samples.length > 0}
	<DivBrowse bind:samples/>
{/if}
