<script>
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import { params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';

	export let config;

	/**
	 * @type {any[]}
	 */
	let variables = [];
	onMount(async () => {
		if (!$params.includeOutliers) {
			$params.includeOutliers = config.includeOutliers;
		}

		await updateCreds();

		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});
		let response = await fetch(`/variables?${queryParams.toString()}`);
		let data = await response.json();
		variables = data.result.data;
	});
	let selectedVariable = '';
</script>

<form class="space-y-4">
	<select class="select select-bordered select-sm" bind:value={$params.variable}>
		<option disabled value="">Select a variable</option>
		{#each variables as variable}
			<option value={variable.observationVariableDbId}>
				{variable.observationVariableName
					? variable.observationVariableName
					: variable.observationVariableDbId}
			</option>
		{/each}
	</select>
	<div>
		<label for="includeOutliers" class="block text-sm font-medium">Include Outliers:</label>
		<input
			type="radio"
			id="includeOutliers"
			name="outliers"
			value={true}
			class="mr-2"
			bind:group={$params.includeOutliers}
		/>
		<label for="includeOutliers" class="inline-block">Yes</label>
		<input
			type="radio"
			id="excludeOutliers"
			name="outliers"
			value={false}
			class="ml-2 mr-2"
			bind:group={$params.includeOutliers}
		/>
		<label for="excludeOutliers" class="inline-block">No</label>
	</div>
</form>
