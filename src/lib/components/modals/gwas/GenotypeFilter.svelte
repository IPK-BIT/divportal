<script>
	import { params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';

	export let config;

	onMount(() => {
		if (!$params.filterMAF) {
			$params.filterMAF = config.filterMAF;
		}
		if (!$params.filterHeterozygous) {
			$params.filterHeterozygous = config.filterHeterozygous;
		}
		if (!$params.filterMissing) {
			$params.filterMissing = config.filterMissing;
		}
		if (!$params.vcfFile) {
			$params.vcfFile = config.vcfFile;
		}
	});
</script>

<form class="space-y-4">
	<label class="block text-sm font-medium">
		VCF File
		<input
			type="text"
			class="w-full px-3 py-2 border rounded-md focus:outline-none text-base-200"
			id="vcfFile"
			bind:value={$params.vcfFile}
		/>
	</label>

	<!-- MAF Slider -->
	<label class="block text-sm font-medium">
		Minor Allele Frequency (MAF)
		<input
			type="number"
			step="0.01"
			class="w-full px-3 py-2 border rounded-md focus:outline-none text-base-200"
			placeholder="5.00"
			id="mafValue"
			bind:value={$params.filterMAF}
		/>
	</label>

	<div>
		<label for="excludeHeterozygous" class="block text-sm font-medium">Filter Heterozygosity:</label
		>
		<input
			type="radio"
			id="excludeHeterozygous"
			name="heterozygous"
			value={true}
			class="mr-2"
			bind:group={$params.filterHeterozygous}
		/>
		<label for="includeOutliers" class="inline-block">Yes</label>
		<input
			type="radio"
			id="includeHeterozygous"
			name="heterozygous"
			value={false}
			class="ml-2 mr-2"
			bind:group={$params.filterHeterozygous}
		/>
		<label for="includeHeterozygous" class="inline-block">No</label>
	</div>

	<div>
		<label for="excludeMissing" class="block text-sm font-medium">Filter missing data:</label>
		<input
			type="radio"
			id="excludeMissing"
			name="missing"
			value={true}
			class="mr-2"
			bind:group={$params.filterMissing}
		/>
		<label for="includeOutliers" class="inline-block">Yes</label>
		<input
			type="radio"
			id="includeMissing"
			name="missing"
			value={false}
			class="ml-2 mr-2"
			bind:group={$params.filterMissing}
		/>
		<label for="includeMissing" class="inline-block">No</label>
	</div>
</form>
