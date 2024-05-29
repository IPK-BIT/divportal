<script>
	import VariableDisplay from '$lib/components/VariableDisplay.svelte';
	import { onMount } from 'svelte';
	import { api, updateCreds } from '$lib/stores/apiconfig';
	/**
	 * @type {any[]}
	 */
	let variables = [];
	/**
	 * @type {string[]}
	 */
	let traitClasses = [];
	onMount(async () => {
		await updateCreds();

		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});
		const response = await fetch(`/variables?${queryParams.toString()}`);
		const data = await response.json();
		variables = data.result.data;
		traitClasses = [...new Set(variables.map((v) => v.trait.traitClass))];
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
	<VariableDisplay bind:variables bind:traitClasses />
</section>
