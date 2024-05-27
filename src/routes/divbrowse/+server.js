import { json } from '@sveltejs/kit';
import fs from 'fs';

let samples = JSON.parse(fs.readFileSync('static/divbrowse.json', 'utf8'));

export async function GET({url}) {
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
            .map((/** @type {string} */ germplasm) => germplasm.replace(/ BRG$/, ""))
            .map((/** @type {string} */ germplasm) => germplasm.replace(/ /g, "_"));

        displayedSamples = samples
            .filter((/** @type {string} */ sample) => germplasmList.some((/** @type {string} */ germplasm) => sample.endsWith(germplasm)));

        displayedSamples = displayedSamples.map((/** @type {string} */ sample) => {
            return {id: sample};
        });

        return json(displayedSamples)
    } else {
        return json({"error": "server parameter is required"})
    }
}