import { readable, writable } from 'svelte/store';

export const steps = readable([
	{
		title: 'List Details',
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

/**
 * @type {import('svelte/store').Writable<{name:string, description: string, color: string, data:string[]}>}
 */
export let list = writable({
	name: '',
	description: '',
	color: '',
	data: []
});
