<script>
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { onMount } from 'svelte';

	let breview;
	onMount(async () => {
		await updateCreds();
		// @ts-ignore
		breview = await window.breview.startApp('breview', {
			config: {
				server: {
					baseUrl: $api.base_url,
					brapiVersion: 'v2.1',
					authorization: $api.basic_auth ? `Basic ${$api.basic_auth}` : ''
				}
			}
		});
	});
</script>

<div class="p-2">
	<div role="alert" class="alert alert-info">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-current shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			></path></svg
		>
		<span>Early Development Stage</span>
	</div>
</div>

<section class="p-4">
	<div id="breview" />
</section>
