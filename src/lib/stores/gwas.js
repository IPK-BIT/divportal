import { readable, writable } from 'svelte/store';

export const steps = readable([
	{
		id: 1,
		title: 'Select Germplasm',
		components: [
			{
				type: 'germplasm',
				config: {
					prefix: 'http://localhost:5173/lists'
				}
			}
		]
	},
	{
		id: 2,
		title: 'Define Phenotype Filters',
		components: [
			{
				type: 'phenotype',
				config: {
					includeOutliers: false
				}
			}
		]
	},
	{
		id: 3,
		title: 'Define Genotype Filters',
		components: [
			{
				type: 'genotype',
				config: {
					vcfFile: 's3://shape/bridge_core1000_renamed.vcf.gz',
					filterMAF: 5.0,
					filterMissing: true,
					filterHeterozygous: true
				}
			}
		]
	},
	{
		id: 4,
		title: 'Overview',
		components: [
			{
				type: 'overview',
				config: {}
			}
		]
	}
]);

export const params = writable({
	prefix: '',
	list: '',
	variable: '',
	includeOutliers: '',
	vcfFile: '',
	filterMissing: '',
	filterHeterozygous: '',
	filterMAF: '',
	baseURL: '',
	authorization: ''
});

export function reset() {
	params.set({
		prefix: '',
		list: '',
		variable: '',
		includeOutliers: '',
		vcfFile: '',
		filterMissing: '',
		filterHeterozygous: '',
		filterMAF: '',
		baseURL: '',
		authorization: ''
	});
}
