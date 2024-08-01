<script>
	import { onMount } from 'svelte';
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import Table from '$lib/components/basic/Table.svelte';

	/**
	 * @type {{ rows: (string|number)[]; columns: string[], pagination: {totalPages: number, currentPage: number}} | undefined}
	 */
	let table;

	let pageSize = 10;

	let selectedStudy = '';

	/**
	 * @type {{studyDbId: string, studyName: string}[]}
	 */
	let studies = [];

	onMount(async () => {
		await updateCreds();

		const queryParams = new URLSearchParams({
			server: $api.base_url,
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});

		const res = await fetch('/studies?' + queryParams.toString());
		studies = await res.json();
		loadTable();
	});

	async function loadTable() {
		const queryParams = new URLSearchParams({
			server: $api.base_url,
			page: (table?.pagination.currentPage ? table.pagination.currentPage : 0).toString(),
			pageSize: pageSize.toString(),
			authorization: $api.basic_auth ? $api.basic_auth : ''
			//TODO: add filtering of columns
			// columns: 'germplasmName,observationTimeStamp'
		});
		if (selectedStudy) {
			queryParams.append('studyDbId', selectedStudy);
		}
		const res = await fetch(`/observations?${queryParams.toString()}`);
		table = await res.json();
	}
</script>

<section class="">
	<select
		class="select select-bordered select-sm m-2"
		bind:value={selectedStudy}
		on:change={loadTable}
	>
		<option disabled selected value="">Select a study</option>
		{#each studies as study}
			<option value={study.studyDbId}>{study.studyName}</option>
		{/each}
	</select>
	<Table bind:table on:loadTable={loadTable} rowClickHandler={null}/>
</section>
