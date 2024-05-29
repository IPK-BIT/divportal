import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const response = await fetch(
		url.searchParams.get('server') +
			'/brapi/v2/germplasm?page=' +
			url.searchParams.get('page') +
			'&pageSize=' +
			url.searchParams.get('pageSize'),
		{
			headers: {
				Authorization: 'Basic ' + url.searchParams.get('authorization')
			}
		}
	);
	if (response.ok) {
		const data = await response.json();

		/**
		 * @type {{ rows: (string|number)[]; columns: string[], pagination: {totalPages: number, currentPage: number}} | undefined}
		 */
		let table = {
			rows: [],
			columns: ['Germplasm', 'Genus', 'Species', 'Subtaxa', 'Seed Source'],
			pagination: {
				totalPages: data.metadata.pagination.totalPages,
				currentPage: data.metadata.pagination.currentPage
			}
		};

		for (let i = 0; i < data.result.data.length; i++) {
			// @ts-ignore
			table.rows.push({
				germplasm: data.result.data[i].germplasmName
					? data.result.data[i].germplasmName
					: data.result.data[i].germplasmDbId,
				genus: data.result.data[i].genus,
				species: data.result.data[i].species,
				subtaxa: data.result.data[i].subtaxa,
				seedSource: data.result.data[i].seedSourceDescription
			});
		}

		return json(table);
	} else {
		return json({ error: 'Failed to fetch data' });
	}
}
