import { json } from '@sveltejs/kit';
import fs from 'fs';

let samples = JSON.parse(fs.readFileSync('static/divbrowse.json', 'utf8'));

export async function GET({ url }) {
	if (url.searchParams.has('server')) {
		const response = await fetch(`${url.searchParams.get('server')}/brapi/v2/germplasm`, {
			headers: {
				Authorization: 'Basic ' + url.searchParams.get('authorization')
			}
		});
		const data = await response.json();
		let displayedSamples = [];

		let germplasmList = data.result.data
			.map((/** @type {{ germplasmDbId: string; }} */ germplasm) => germplasm.germplasmDbId)
			.map((/** @type {string} */ germplasm) => germplasm.replace(/ BRG$/, ''))
			.map((/** @type {string} */ germplasm) => germplasm.replace(/ /g, '_'));

		displayedSamples = samples.filter((/** @type {string} */ sample) =>
			germplasmList.some((/** @type {string} */ germplasm) => sample.endsWith(germplasm))
		);

		displayedSamples = displayedSamples.map((/** @type {string} */ sample) => {
			return { id: sample };
		});

		return json(displayedSamples);
	} else {
		return json({ error: 'server parameter is required' });
	}
}

export async function POST({request}) {
	let body = await request.json();
	let server = body.server;
	let authorization = body.authorization;
	let samples = body.samples;

	let response = await fetch(`${server}/brapi/v2/germplasm`, {
		headers: {
			Authorization: 'Basic ' + authorization
		}
	});
	let data = await response.json();
	let germplasmList = data.result.data.map((/** @type {{ germplasmDbId: string; }} */ germplasm) => germplasm.germplasmDbId);

	let result = germplasmList.filter((/** @type {string} */ germplasm) => {
		return samples.some((/** @type {string} */ sample) => {
			return sample.endsWith(germplasm.replace(/ BRG$/, '').replace(/ /g, '_'));
		});
	});

	return json(result)
}