import { writable, get } from 'svelte/store';

export const api = writable({
	base_url: 'https://mira.ipk-gatersleben.de/shape',
	basic_auth: ''
});

export async function updateCreds() {
	const response = await fetch(`/settings/auth?server=${get(api).base_url}`);
	const data = await response.json();
	api.update((api) => {
		try {
			if (data[0] && data[0].method === 'basic') {
				let basic_auth = btoa(`${data[0].details.username}:${data[0].details.password}`);
				api.basic_auth = basic_auth;
			} else {
				api.basic_auth = '';
			}
		} catch (e) {
			console.error('Error updating credentials', e);
		}
		return api;
	});
}
