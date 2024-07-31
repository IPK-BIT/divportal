import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	if (url.searchParams.has('server')) {
		let request_url = `${url.searchParams.get('server')}/brapi/v2/observations/table?page=${url.searchParams.get('page')}&pageSize=${url.searchParams.get('pageSize')}`;
		if (url.searchParams.has('studyDbId')) {
			request_url = request_url + `&studyDbId=${url.searchParams.get('studyDbId')}`;
		}
		const response = await fetch(request_url, {
			headers: {
				// @ts-ignore
				Authorization:
					url.searchParams.get('authorization')?.length > 0
						? `Basic ${url.searchParams.get('authorization')}`
						: ''
			}
		});
		const data = await response.json();

		console.log(request_url);
		console.log(data);

		/**
		 * @type string[]
		 */
		// @ts-ignore
		//TODO: add filtering of columns
		let columns = data.result.headerRow; //.filter((value) => {return url.searchParams.has('columns')?url.searchParams.get('columns').split(',').includes(value):true});
		for (const variable of data.result.observationVariables) {
			columns.push(
				variable.observationVariableName
					? variable.observationVariableName
					: variable.observationVariableDbId
			);
		}

		let result = {
			columns: columns,
			rows: data.result.data,
			pagination: {
				currentPage: data.metadata.pagination.currentPage,
				totalPages: data.metadata.pagination.totalPages
			}
		};
		return json(result);
	}
	return json({ error: 'server not found' });
}
