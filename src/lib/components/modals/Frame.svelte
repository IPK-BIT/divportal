<script>
	import { steps } from '$lib/stores/collectionupload';
	import ComponentWrapper from '$lib/components/modals/ComponentWrapper.svelte';
	import Upload from './collection/Upload.svelte';
	import BasicInformation from './collection/BasicInformation.svelte';
	import { createEventDispatcher } from 'svelte';

	let currentStep = 0;

	/**
	 * @type {any}
	 */
	const components = {
		basic: BasicInformation,
		upload: Upload
	};

	const eventdispatcher = createEventDispatcher();

	function finish() {
		currentStep = 0;
		eventdispatcher('finish', {});
	}
</script>

<section>
	<h2 class="text-md font-semibold flex justify-center my-2">
		Step {currentStep + 1} of {$steps.length}: {$steps[currentStep].title}
	</h2>
	{#key currentStep}
		{#if $steps[currentStep].components}
			<div class="space-y-2 mb-2">
				{#each $steps[currentStep].components as component}
					<ComponentWrapper component={components[component.type]} config={component.config} />
				{/each}
			</div>
		{/if}
	{/key}
	<div>
		{#if currentStep > 0}
			<button
				class="btn btn-secondary btn-sm float-left"
				on:click={() => {
					currentStep--;
				}}>Previous</button
			>
		{/if}
		{#if currentStep < $steps.length - 1}
			<button
				class="btn btn-primary btn-sm float-right"
				on:click={() => {
					currentStep++;
				}}>Next</button
			>
		{:else}
			<button class="btn btn-primary btn-sm float-right" on:click={finish}>Finish</button>
		{/if}
	</div>
</section>
