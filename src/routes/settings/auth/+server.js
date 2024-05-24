import { json } from '@sveltejs/kit';
import Database from 'better-sqlite3';

const db = new Database('static/divportal.db', { verbose: console.log });

export async function GET({ url }) {
	const server = url.searchParams.get('server');
	const servers = db.prepare('SELECT * FROM auth WHERE server = ?').all(server);
	for (let server of servers) {
		// @ts-ignore
		server.details = JSON.parse(server.details);
	}
	return json(servers);
}

export async function POST({ request }) {
	const body = await request.json();
	console.log(body);

	db.prepare('DELETE FROM auth WHERE server = ?').run(body.server);

	const stmnt = db.prepare('INSERT INTO auth (server, method, details) VALUES (?, ?, ?)');
	stmnt.run(body.server, body.method, JSON.stringify(body.authInfo));

	return json({ success: true, data: body });
}
