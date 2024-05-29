import { json } from '@sveltejs/kit';
import fs from 'fs';
import Database from 'better-sqlite3';

const db = new Database('static/divportal.db', { verbose: console.log });

/**
 * @type {{ listDbId: string; listName: string; listSize: any; listDescription: any; listColor: string; data: any; }[]}
 */
let predefined = [];

const collectionsData = fs.readFileSync('static/collections.json', 'utf8');
const collections = JSON.parse(collectionsData);

for (let collection of Object.keys(collections)) {
	predefined.push({
		listDbId: Math.random().toString(36).substring(7),
		listName: collection,
		listSize: collections[collection].data.length,
		listDescription: collections[collection].name,
		listColor: '#81bd00',
		data: collections[collection].data
	});
}

// @ts-ignore
export async function GET() {
	// @ts-ignore
	const rows = db.prepare('SELECT * FROM collections').all();

	const results = [];
	for (let row of rows) {
		results.push({
			//@ts-ignore
			listDbId: row.listDbId,
			//@ts-ignore
			listName: row.listName,
			//@ts-ignore
			listSize: row.listSize,
			//@ts-ignore
			listDescription: row.listDescription,
			//@ts-ignore
			listColor: row.additionalInfo
				.split(',')
				.find((/** @type {string} */ info) => info.startsWith('color'))
				.split(':')[1],
			//@ts-ignore
			data: row.data.split(',')
		});
	}

	return json(results);
}

// @ts-ignore
export async function POST({ request }) {
	const body = await request.json();
	let list;
	if (body.predefined) {
		let template = predefined.find((list) => list.listName === body.listName);

		list = {
			// @ts-ignore
			additionalInfo: `color:${template.listColor}`,
			// @ts-ignore
			data: template.data.join(','),
			dateCreated: new Date().toISOString(),
			dateModified: new Date().toISOString(),
			externalReferences: '',
			// @ts-ignore
			listDbId: template.listDbId,
			// @ts-ignore
			listDescription: template.listDescription,
			// @ts-ignore
			listName: template.listName,
			listOwnerName: 'User',
			listOwnerPersonDbId: 'DB001',
			// @ts-ignore
			listSize: template.data.length,
			listSource: 'DivPortal',
			listType: 'germplasm'
		};
	} else {
		list = {
			additionalInfo: `color:${body.listColor}`,
			data: body.data.join(','),
			dateCreated: new Date().toISOString(),
			dateModified: new Date().toISOString(),
			externalReferences: '',
			listDbId: Math.random().toString(36).substring(7),
			listDescription: body.listDescription,
			listName: body.listName,
			listOwnerName: 'User',
			listOwnerPersonDbId: 'DB001',
			listSize: body.data.length,
			listSource: 'DivPortal',
			listType: 'germplasm'
		};
	}

	const stmnt = db.prepare(
		'INSERT INTO collections (additionalInfo, data, dateCreated, dateModified, externalReferences, listDbId, listDescription, listName, listOwnerName, listOwnerPersonDbId, listSize, listSource, listType) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
	);
	stmnt.run(
		list.additionalInfo,
		list.data,
		list.dateCreated,
		list.dateModified,
		list.externalReferences,
		list.listDbId,
		list.listDescription,
		list.listName,
		list.listOwnerName,
		list.listOwnerPersonDbId,
		list.listSize,
		list.listSource,
		list.listType
	);

	return json(body);
}

//TODO: Implement PUT
// export async function PUT({url}) {
//     return json({});
// }

// @ts-ignore
export async function DELETE({ url }) {
	const stmt = db.prepare('DELETE FROM collections WHERE listDbId = ?');
	stmt.run(url.searchParams.get('listDbId'));
	return json({});
}

export async function PUT({ request }) {
	const body = await request.json();
	let list = {
		additionalInfo: `color:${body.listColor}`,
		data: body.data.join(','),
		listDescription: body.listDescription,
		listName: body.listName,
		listSize: body.data.length
	};

	const stmnt = db.prepare(
		'UPDATE collections SET additionalInfo = ?, data = ?, listDescription = ?, listName = ?, listSize = ? WHERE listDbId = ?'
	);
	stmnt.run(
		list.additionalInfo,
		list.data,
		list.listDescription,
		list.listName,
		list.listSize,
		body.listDbId
	);
	return json(body);
}
