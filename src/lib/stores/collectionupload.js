import { readable, writable } from 'svelte/store';

export const steps = readable([
	{
		title: 'Collection Details',
		shortTitle: 'Basic',
		components: [
			{
				type: 'basic',
				config: {
					color: '#81bd00'
				}
			}
		]
	},
	{
		title: 'File Upload',
		shortTitle: 'Upload',
		components: [
			{
				type: 'upload',
				config: {}
			}
		]
	}
]);

export let collection = writable({
	name: '',
	description: '',
	color: '',
	data: []
});
