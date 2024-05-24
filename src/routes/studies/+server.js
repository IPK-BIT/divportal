import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	if (url.searchParams.has('server')) {
		const response = await fetch(`${url.searchParams.get('server')}/brapi/v2/studies`, {
			headers: {
				Authorization: `Basic ${url.searchParams.get('authorization')}`
			}
		});
		const data = await response.json();

		return json(data.result.data);
	}

	return json({ error: 'No server parameter provided' });
}
