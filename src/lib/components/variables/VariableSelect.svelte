<script>
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { onMount } from 'svelte';

	/**
	 * @type {{observationVariableDbId: string, observationVariableName: string}[]}
	 */
	let variables = [];

	export let value = '';

	onMount(async () => {
		await updateCreds();

		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});
		let response = await fetch(`/variables?${queryParams.toString()}`);
		let data = await response.json();
		variables = data.result.data;
	});
</script>

<select class="select select-bordered select-sm" bind:value on:change>
	<option disabled value="">Select a variable</option>
	{#each variables as variable}
		<option value={variable.observationVariableDbId}>
			{variable.observationVariableName
				? variable.observationVariableName
				: variable.observationVariableDbId}
		</option>
	{/each}
</select>
