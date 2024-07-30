import { readable, writable } from 'svelte/store';

export const config = readable({
	baseURL: 'http://localhost:8000',
	authorization: '',
	procedureDbId: '9406d19d-91ae-4793-94ae-8b0a05f2306f'
})

export const definition = writable({procedureName: undefined, procedureDbId: undefined})

export const steps = readable([
	{
		id: 1,
		title: 'Workflow Overview',
		components: [
			{
				type: 'wfoverview',
				config: {}
			}
		]
	},
	{
		id: 2,
		title: 'Select Germplasm',
		components: [
			{
				type: 'germplasm',
				config: {
					prefix: 'https://divportal.ipk-gatersleben.de/lists'
				}
			}
		]
	},
	{
		id: 3,
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
		id: 4,
		title: 'Define Genotype Filters',
		components: [
			{
				type: 'genotype',
				config: {
					vcfFile: 's3://shape/shape_core1000.vcf.gz'
				}
			}
		]
	},
	{
		id: 5,
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
	vcf: '',
	missingData: '',
	includeHeterozygous: '',
	minAlleleFreq: '',
	baseURL: '',
	authorization: ''
});

export function reset() {
	params.set({
		prefix: '',
		list: '',
		variable: '',
		vcf: '',
		missingData: '',
		includeHeterozygous: '',
		minAlleleFreq: '',
		baseURL: '',
		authorization: ''
	});
}
