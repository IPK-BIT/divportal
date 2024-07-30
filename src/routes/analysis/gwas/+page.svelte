<script>
	import Frame from '$lib/components/modals/Frame.svelte';
	import { params, reset, steps, config, definition } from '$lib/stores/gwas.js';
	import { Error, Json, Warning } from 'carbon-icons-svelte';
	import { onDestroy, onMount } from 'svelte';

	/**
	 * @type {{message:string, messageType:string}[]}
	 */
	let validationErrors = [];

	function validate() {
		validationErrors = [];
		if (!$params.list) {
			validationErrors = [
				...validationErrors,
				{ message: 'No Germplasm selected', messageType: 'ERROR' }
			];
		}
		if (!$params.variable) {
			validationErrors = [
				...validationErrors,
				{ message: 'No Observation Variable selected', messageType: 'ERROR' }
			];
		}
		if (!$params.minAlleleFreq) {
			validationErrors = [
				...validationErrors,
				{ message: 'No MAF treshold defined', messageType: 'ERROR' }
			];
		}
		if (parseFloat($params.minAlleleFreq) < 5.0) {
			validationErrors = [
				...validationErrors,
				{ message: 'MAF treshold is less than 5%', messageType: 'INFO' }
			];
		}
		return (
			validationErrors.length === 0 ||
			validationErrors.every(
				(/** @type {{ messageType: string; }} */ error) => error.messageType === 'INFO'
			)
		);
	}

	function downloadParams() {
		// @ts-ignore
		$params.list = $params.prefix + '/' + $params.list;
		// @ts-ignore
		$params.prefix = undefined;
		const paramsJson = JSON.stringify($params, undefined, 2);
		const blob = new Blob([paramsJson], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'params.json';
		link.click();
		reset();
	}

	async function submitJob() {
		let body = {
			additionalInfo: {
				s3Bucket: 'shape'
			},
			brapiDataParameters: [
				{
					authToken: '',
					brapiBaseURL: $params.prefix,
					brapiParameters: [
						{
							brapiParameterName: 'listDbId',
							brapiParameterType: 'string',
							brapiParameterValue: $params.list
						}
					],
					brapiVersions: ['V2.1'],
					dataType: 'Lists',
					parameterId: 'germplasm',
					search: false
				},
				{
					authToken: $params.authorization,
					brapiBaseURL: $params.baseURL,
					brapiParameters: [
						{
							brapiParameterName: 'observationVariableDbId',
							brapiParameterType: 'string',
							brapiParameterValue: $params.variable
						}
					],
					brapiVersions: ['V2.1'],
					dataType: 'Observations',
					parameterId: 'observations',
					search: false
				}
			],
			controlParameters: [
				{
					parameterId: 'minAlleleFreq',
					parameterValue: $params.minAlleleFreq
				},
				{
					parameterId: 'missingData',
					parameterValue: $params.missingData
				},
				{
					parameterId: 'includeHeterozygous',
					parameterValue: $params.includeHeterozygous
				}
			],
			description: 'THIS IS A WORKFLOW JOB SUBMITTED THROUGH DIVPORTAL',
			externalReferences: [],
			fileDataParameters: [
				{
					dataType: 'VCF',
					fileSize: null,
					fileTimeStamp: null,
					fileURL: $params.vcf,
					mimeType: 'application/vcf',
					parameterId: 'vcf'
				}
			],
			jobName: `${$definition.procedureName}-${$params.variable}-${new Date().toISOString()}`,
			procedureDbId: $definition.procedureDbId,
		}
		const response = await fetch('https://divportal.ipk-gatersleben.de/brapi/v2/jobs', {
			method: 'POST',
			body: JSON.stringify(body)
		});
	}

	onMount(async ()=>{
		const response = await fetch(`https://divportal.ipk-gatersleben.de/brapi/v2/procedures?procedureDbId=${$config.procedureDbId}`, {
			headers: {
				'Authorization': `${$config.authorization}`
			}
		});
		const data = await response.json();
		if (data.result.data.length > 0) {
			$definition = data.result.data[0];			
		}
	});

	onDestroy(() => {
		reset();
	});
</script>

{#if $definition.procedureName}
<section class="flex justify-center p-8">
	<div class="card bg-base-200 w-1/3 p-2">
		<Frame {steps} on:finish={submitJob} finishBtnText="Start Analysis" {validate} />
	</div>
</section>
{/if}

<div class="absolute top-20 left-2">
	<div class="-z-10 w-64 h-20 bg-white border" style="transform: translateX(-80px) rotate(-45deg);">
		<figure class="flex flex-col items-center" style="transform: translateY(10px)">
			<img src="/Clowmsvg.svg" alt="clowm" class="w-8 h-8"/>
			<a class="link text-black" target="_blank" href="https://clowm-staging.bi.denbi.de/">Powered by CloWM</a>
		</figure>	
	</div>	
</div>

<div class="absolute top-20 right-2 select-none space-y-1">
	{#each validationErrors as error}
		<div
			role="alert"
			class="alert {error.messageType === 'ERROR' ? 'alert-error' : 'alert-warning'}"
		>
			{#if error.messageType === 'ERROR'}
				<Error /><span>{error.message}</span>
			{:else}
				<Warning /> <span>{error.message}</span>
			{/if}
		</div>
	{/each}
</div>
