<script>
	import { onMount } from 'svelte';
	import { api, updateCreds } from '$lib/stores/apiconfig';
	import Table from '$lib/components/basic/Table.svelte';

	/**
	 * @type {{ rows: (string|number)[]; columns: string[], pagination: {totalPages: number, currentPage: number}} | undefined}
	 */
	let table = undefined;

	async function loadTable() {
		const queryParams = new URLSearchParams({
			server: $api.base_url,
			page: (table?.pagination.currentPage ? table.pagination.currentPage : 0).toString(),
			pageSize: '20',
			authorization: $api.basic_auth ? $api.basic_auth : ''
		});
		const response = await fetch(`/germplasm?${queryParams.toString()}`);
		table = await response.json();
	}

	onMount(async () => {
		await updateCreds();
		loadTable();
	});
</script>

<Table bind:table on:loadTable={loadTable} />
