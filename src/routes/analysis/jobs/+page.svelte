<script>
	import { OverflowMenuHorizontal } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let jobs = [];

	let autoRefresh = false;

	onMount(async () => {
		const response = await fetch(`https://divportal.ipk-gatersleben.de/brapi/v2/jobs`);
		jobs = (await response.json()).result.data;
	});

	setInterval(async () => {
		if (!autoRefresh) {
			return;
		}
		const response = await fetch(`https://divportal.ipk-gatersleben.de/brapi/v2/jobs`);
		jobs = (await response.json()).result.data;
	}, 5000);
</script>

<section class="p-4">
	<div class="flex justify-end">
		<label class="label space-x-1">
			<span class="label-text">Auto Refresh</span>
			<input bind:checked={autoRefresh} type="checkbox" class="toggle {autoRefresh?"toggle-primary":""}" />
		</label>
	</div>	
	<table class="table">
		<thead>
			<th>Job Name</th>
			<th>Status</th>
			<th>Actions</th>
		</thead>
		<tbody>
			{#each jobs as job}
				<tr>
					<td>{job.jobName}</td>
					<td>
						{#if job.jobCurrentStatus === 'SUCCESS'}
							<span class="badge badge-success">{job.jobCurrentStatus}</span>
						{:else if job.jobCurrentStatus === 'RUNNING'}
							<span class="badge badge-info">{job.jobCurrentStatus}</span>
						{:else if job.jobCurrentStatus === 'ERROR'}
							<span class="badge badge-error">{job.jobCurrentStatus}</span>
						{:else}
							<span class="badge badge-warning">{job.jobCurrentStatus}</span>
						{/if}
					</td>
					<td>
						<details class="dropdown dropdown-bottom dropdown-end">
							<summary class="btn btn-ghost m-1"><OverflowMenuHorizontal /></summary>
							<ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
								<li><a href="/analysis/jobs/{job.jobDbId}">Details</a></li>
							</ul>
						</details>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
