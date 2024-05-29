<script>
	import RadioSelect from '$lib/components/basic/forms/RadioSelect.svelte';
	import { params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';

	export let config;

	onMount(() => {
		if ($params.filterMAF === '') {
			$params.filterMAF = config.filterMAF;
		}
		if ($params.filterHeterozygous === '') {
			$params.filterHeterozygous = config.filterHeterozygous;
		}
		if ($params.filterMissing === '') {
			$params.filterMissing = config.filterMissing;
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

	<RadioSelect
		param={{ short: 'heterozygous', label: 'Filter Heterozygosity' }}
		options={[
			{ value: true, label: 'Yes' },
			{ value: false, label: 'No' }
		]}
		bind:value={$params.filterHeterozygous}
	/>
	<RadioSelect
		param={{ short: 'missing', label: 'Filter Missing Data' }}
		options={[
			{ value: true, label: 'Yes' },
			{ value: false, label: 'No' }
		]}
		bind:value={$params.filterMissing}
	/>
</form>
