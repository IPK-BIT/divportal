import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	if (url.searchParams.has('server')) {
		const response = await fetch(`${url.searchParams.get('server')}/brapi/v2/germplasm`, {
			headers: {
				Authorization: 'Basic ' + url.searchParams.get('authorization')
			}
		});
		const data = await response.json();

		/**
		 * @type {string}
		 */
		let color = url.searchParams.get('color') ?? '#288000';

		/**
		 * @type {{type: string, line: {color: string}, dimensions: {label: string, values: string[]}[]}[]}
		 */
		let result = [
			{
				type: 'parcats',
				line: {
					color: color
					// color: '#288000'
				},
				dimensions: [
					{ label: 'Genus', values: [] },
					{ label: 'Species', values: [] },
					{ label: 'Subtaxa', values: [] }
				]
			}
		];
		for (const germplasm of data.result.data) {
			result[0].dimensions[0].values.push(germplasm.genus);
			result[0].dimensions[1].values.push(germplasm.species);
			result[0].dimensions[2].values.push(germplasm.subtaxa);
		}

		return json(result);
	}

	return json({ error: 'No server parameter provided' });
}
