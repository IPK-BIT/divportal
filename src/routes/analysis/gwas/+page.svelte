<script>
	import Frame from '$lib/components/modals/Frame.svelte';
	import { params, reset, steps } from '$lib/stores/gwas.js';
	import { Error, Warning } from 'carbon-icons-svelte';
	import { onDestroy } from 'svelte';

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
		if (!$params.filterMAF) {
			validationErrors = [
				...validationErrors,
				{ message: 'No MAF treshold defined', messageType: 'ERROR' }
			];
		}
		if (parseFloat($params.filterMAF) < 5.0) {
			validationErrors = [
				...validationErrors,
				{ message: 'MAF treshold is less than 5%', messageType: 'INFO' }
			];
		}
		return (
			validationErrors.length === 0 ||
			validationErrors.every((/** @type {{ messageType: string; }} */ error) => error.messageType === 'INFO')
		);
	}

	function downloadParams() {
		// if (validate()) {
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
		// } else {
		// 	console.log(validationErrors);
		// }
	}

	onDestroy(() => {
		reset();
	});
</script>

<section class="flex justify-center p-8">
	<div class="card bg-base-200 w-1/3 p-2">
		<Frame {steps} on:finish={downloadParams} finishBtnText="Download" validate={validate}/>
	</div>
</section>

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
