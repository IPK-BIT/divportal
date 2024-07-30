<script>
// @ts-nocheck

	import RadioSelect from '$lib/components/basic/forms/RadioSelect.svelte';
	import { definition, params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';

	export let config;

	onMount(() => {
		if ($params.minAlleleFreq === '') {
			$params.minAlleleFreq = $definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'minAlleleFreq').defaultValue;
		}
		if ($params.includeHeterozygous === '') {
			$params.includeHeterozygous = $definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'includeHeterozygous').defaultValue;
		}
		if ($params.missingData === '') {
			$params.missingData = $definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'missingData').defaultValue;
		}
		if ($params.vcf === '') {
			$params.vcf = config.vcfFile;
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
			bind:value={$params.vcf}
		/>
	</label>

	<label class="block text-sm font-medium">
		{$definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'minAlleleFreq').parameterName}
		<input
			type="number"
			step="1"
			class="w-full px-3 py-2 border rounded-md focus:outline-none text-base-200"
			placeholder={$definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'minAlleleFreq').defaultValue}
			min="0"
			max="100"
			id="minAlleleFreq"
			bind:value={$params.minAlleleFreq}
		/>
	</label>

	<label class="block text-sm font-medium">
		{$definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'missingData').parameterName}
		<input
			type="number"
			step="1"
			class="w-full px-3 py-2 border rounded-md focus:outline-none text-base-200"
			placeholder={$definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'missingData').defaultValue}
			min="0"
			max="100"
			id="missingData"
			bind:value={$params.missingData}
		/>
	</label>

	<label class="block text-sm font-medium">
		{$definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'includeHeterozygous').parameterName}
		<input
			type="number"
			step="1"
			class="w-full px-3 py-2 border rounded-md focus:outline-none text-base-200"
			placeholder={$definition.controlParameters.find((/** @type {{ parameterId: string; }} */ p) => p.parameterId === 'includeHeterozygous').defaultValue}
			min="0"
			max="100"
			id="includeHeterozygous"
			bind:value={$params.includeHeterozygous}
		/>
	</label>
</form>
