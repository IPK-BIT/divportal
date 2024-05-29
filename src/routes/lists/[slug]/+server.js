import { json } from '@sveltejs/kit';
import Database from 'better-sqlite3';

const db = new Database('static/divportal.db', { verbose: console.log });

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, url }) {
	/**
	 * @type {any}
	 */
	const collection = db.prepare('SELECT * FROM collections WHERE listDbId = ?').get(params.slug);

	if (collection) {
		let resp = {
			metadata: {
				datafiles: [],
				pagination: {
					currentPage: 0,
					pageSize: 1000,
					totalCount: 1,
					totalPages: 1
				},
				status: [
					{
						message: 'Request successful',
						messageType: 'INFO'
					}
				]
			},
			result: {
				additionalInfo: {
					color: collection.additionalInfo.split(':')[1]
				},
				data: collection.data,
				dateCreated: collection.dateCreated,
				dateModified: collection.dateModified,
				externalReferences: [],
				listDbId: collection.listDbId,
				listDescription: collection.listDescription,
				listName: collection.listName,
				listOwnerName: collection.listOwnerName,
				listOwnerPersonDbId: collection.listOwnerPersonDbId,
				listSize: collection.listSize,
				listSource: collection.listSource,
				listType: collection.listType
			}
		};
		return json(resp);
	}

	return json(collection);
}
