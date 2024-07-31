<script>
	import { page } from '$app/stores';
	import { Zip } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';

	/**
	 * @type {string}
	 */
	let slot;
	/**
	 * @type {{ jobName: string; jobDbId: string; jobCurrentStatus: string; brapiDataParameters: any[]; controlParameters: any[]; fileDataParameters: any[]; }}
	 */
	let job;
	/**
	 * @type {any[]}
	 */
	let files = [];
	/**
	 * @type {{ data: any; }}
	 */
	let image;
	/**
	 * @type {any}
	 */
	let selectedPlot;
	onMount(async () => {
		slot = $page.params.slot;
		let response = await fetch(`https://divportal.ipk-gatersleben.de/brapi/v2/jobs/${slot}`);
		job = (await response.json()).result;

		response = await fetch(`https://divportal.ipk-gatersleben.de/api/v1/files?jobDbId=${slot}`);
		files = (await response.json()).result.data;
		console.log(files);
		console.log(job);
	});

	async function updatePlot() {
		let response = await fetch(
			'https://divportal.ipk-gatersleben.de/api/v1/files/retrieve/content',
			{
				method: 'POST',
				body: JSON.stringify({
					bucket: 'shape',
					fileURL: selectedPlot,
					encoding: 'base64'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		image = (await response.json()).result;
	}

	/**
	 * @param {string} fileName
	 */
	async function downloadFile(fileName) {
		let response = await fetch(
			'https://divportal.ipk-gatersleben.de/api/v1/files/retrieve/content',
			{
				method: 'POST',
				body: JSON.stringify({
					bucket: 'shape',
					fileURL: fileName,
					encoding: 'raw'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
	}

	async function downloadArchive() {
		let response = await fetch('https://divportal.ipk-gatersleben.de/api/v1/files/archive', {
			method: 'POST',
			body: JSON.stringify({
				bucket: 'shape',
				jobDbId: slot
			})
		});

		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${slot}.zip`;
		a.click();
		window.URL.revokeObjectURL(url);
	}
</script>

<div class="breadcrumbs text-sm px-4 pt-2">
	<ul>
		<li>Analysis</li>
		<li><a href="/analysis/jobs">Jobs</a></li>
		<li>{slot}</li>
	</ul>
</div>
<section class="flex px-4 space-x-4">
	<div class="w-1/2 min-h-10 h-fit space-y-4">
		<div class="bg-base-200 rounded-md pb-2">
			{#if job}
				<h1 class="text-2xl font-semibold p-4">{job.jobName}</h1>
				<section class="bg-base-100 m-4 rounded-lg py-2">
					<h2 class="text-xl font-semibold px-4">Job Details</h2>
					<div class="px-8">
						<p><span class="font-semibold">Job ID:</span> {job.jobDbId}</p>
						<p><span class="font-semibold">Job Name:</span> {job.jobName}</p>
						<p class="space-x-1">
							<span class="font-semibold">Status:</span>{#if job.jobCurrentStatus === 'SUCCESS'}
								<span class="badge badge-success">{job.jobCurrentStatus}</span>
							{:else if job.jobCurrentStatus === 'RUNNING'}
								<span class="badge badge-info">{job.jobCurrentStatus}</span>
							{:else if job.jobCurrentStatus === 'ERROR'}
								<span class="badge badge-error">{job.jobCurrentStatus}</span>
							{:else}
								<span class="badge badge-warning">{job.jobCurrentStatus}</span>
							{/if}
						</p>
					</div>
				</section>
				<section class="bg-base-100 m-4 rounded-lg py-2">
					<h2 class="text-xl font-semibold px-4">Parameters</h2>
					<div class="px-8">
						{#each job.controlParameters as parameter}
							<p>
								<span class="font-semibold">{parameter.parameterId}:</span>
								{parameter.parameterValue}
							</p>
						{/each}
						{#each job.brapiDataParameters as parameter}
							<p class="space-x-1">
								<span class="font-semibold">{parameter.parameterId}:</span>
								{#each parameter.brapiParameters as brapiParameter}
									<span class="badge badge-sm badge-outline"
										>{brapiParameter.brapiParameterName}={brapiParameter.brapiParameterValue}</span
									>
								{/each}
							</p>
						{/each}
						{#each job.fileDataParameters as parameter}
							<p><span class="font-semibold">{parameter.parameterId}:</span> {parameter.fileURL}</p>
						{/each}
					</div>
				</section>
			{/if}
		</div>
		<div class="bg-base-200 rounded-md min-h-10 h-fit pb-2">
			<h1 class="text-2xl font-semibold pt-4 px-4">Download Results</h1>
			<div class="p-4 bg-base-100 m-4 rounded-lg">
				{#if files.length > 0}
					<button class="btn btn-sm float-end" on:click={downloadArchive}
						>Download as Zip <Zip /></button
					>
				{/if}
				<ul>
					{#each files as file}
						<li>
							<button
								class="link"
								on:click={() => {
									downloadFile(file.fileURL);
								}}>{file.fileName}</button
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="bg-base-200 w-1/2 min-h-10 h-fit rounded-md">
		<h1 class="text-2xl font-semibold p-4">Result Plots</h1>
		<div class="p-4">
			<select
				class="select select-bordered select-sm"
				bind:value={selectedPlot}
				on:change={updatePlot}
			>
				<option disabled value={undefined}>Select a Plot</option>
				{#each files as file}
					{#if file.fileName.endsWith('.png')}
						<option value={file.fileURL}>{file.fileName}</option>
					{/if}
				{/each}
			</select>
		</div>
		{#if image}
			<div class="pt-2 pb-4 px-4">
				<img src="data:image/jpeg;base64,{image.data}" alt="Overview Manhattan" />
			</div>
		{/if}
	</div>
</section>
