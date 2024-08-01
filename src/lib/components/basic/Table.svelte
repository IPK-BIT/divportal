<script>
	import { createEventDispatcher } from 'svelte';
	import Pagination from './Pagination.svelte';
	import { goto } from '$app/navigation';

	/**
	 * @type {{ rows: (string|number)[]; columns: string[], pagination: {totalPages: number, currentPage: number}} | undefined}
	 */
	export let table = {
		columns: [],
		rows: [],
		pagination: {
			totalPages: 0,
			currentPage: 0
		}
	};

	const eventDispatcher = createEventDispatcher();

	/**
	 * @param {string} dir
	 */
	function paginate(dir) {
		if (table) {
			if (dir === 'next') {
				table.pagination.currentPage + 1 < table.pagination.totalPages
					? table.pagination.currentPage++
					: null;
			} else {
				table.pagination.currentPage - 1 >= 0 ? table.pagination.currentPage-- : null;
			}
			eventDispatcher('loadTable', { page: table.pagination.currentPage });
		}
	}

	export let rowClickHandler;
</script>

<div class="overflow-x-auto m-2 p-2 bg-base-200 rounded-md">
	{#if table}
		<table class="table">
			<thead>
				<tr>
					{#each table.columns as column}
						<th>{column}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each table.rows as row}
					<tr class="hover:bg-[oklch(var(--b3))]" on:click={()=>rowClickHandler(row)}>
						{#each Object.values(row) as value}
							<td>{value}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<Pagination
			bind:curPage={table.pagination.currentPage}
			bind:totalPages={table.pagination.totalPages}
			on:paginate={(e) => paginate(e.detail.dir)}
		/>
	{/if}
</div>
