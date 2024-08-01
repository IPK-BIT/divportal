<script>
	import { list } from '$lib/stores/listupload';
	import { Information } from 'carbon-icons-svelte';

	export const config = {};

	/**
	 * @param {any} event
	 */
	function handleFileUpload(event) {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = function (e) {
			if (e.target && e.target.result) {
				try {
					const csvData = e.target.result;
					// @ts-ignore
					const lines = csvData.split('\n');
					$list.data = lines.map((/** @type {string} */ line) => line.trim().replace(/\r|\n/g, ''));
				} catch (error) {
					console.error('Error processing CSV:', error);
				}
			}
		};
		reader.readAsText(file);
	}
</script>

<div>
	<div class="flex flex-row">
		<label for="fileUpload" class="block text-md font-medium">File Upload</label>
		<div class="dropdown dropdown-start dropdown-right">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-xs text-info">
			  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			  <Information/>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
			  tabindex="0"
			  class="card compact dropdown-content bg-base-200 rounded-box z-[1] w-80 shadow">
			  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			  <div tabindex="0" class="card-body">
				Input file should be a CSV file with a single column of germplasm names.
			  </div>
			</div>
		  </div>
	</div>
	<input
		id="fileUpload"
		type="file"
		name="file"
		class="file-input file-input-sm mt-1 block w-full rounded-md sm:text-sm bg-base-200"
		accept="text/csv"
		on:change={handleFileUpload}
	/>
</div>
<div>
	<label for="preview" class="block text-md font-medium">Preview</label>
	{#if $list.data.length === 0}
		<div id="preview" class="skeleton h-32 w-full"></div>
	{:else}
		<table class="table w-full">
			<thead>
				<tr>
					<th>Germplasm Name</th>
				</tr>
			</thead>
			<tbody>
				{#each $list.data as row, i}
					{#if i < 5}
						<tr>
							<td>{row}</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	{/if}
</div>
