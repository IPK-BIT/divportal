import { json } from '@sveltejs/kit';
import Database from 'better-sqlite3/lib/database.js';

const db = new Database('static/divportal.db', { verbose: console.log });

export async function GET({ url }) {

    const rows = db.prepare('SELECT * FROM aai').all();

    const results = [];
    for (let row of rows) {
        results.push({
            //@ts-ignore
            id: row.client_id,
            //@ts-ignore
            secret: row.client_secret
        });
    }

    let response = await fetch(`https://login.aai.lifescience-ri.eu/oidc/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${results[0].id}:${results[0].secret}`)}`
        },
        body: `grant_type=client_credentials&scope=openid`
    });
    return json(await response.json());
}