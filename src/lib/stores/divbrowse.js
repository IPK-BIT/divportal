import { readable, writable } from 'svelte/store';

export const selection = writable([]);

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
		title: 'Selection from DivBrowse',
		shortTitle: 'DivBrowse',
		components: [
			{
				type: 'preset',
				config: {}
			}
		]
	}
]);
