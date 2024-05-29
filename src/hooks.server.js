const public_paths = ['/', '/about', '/contact', '/carousel', '/partners', '/lists/*'];

/**
 * @param {string} path
 */
function isPathAllowed(path) {
	return public_paths.some((allowedPath) =>
		RegExp(`^${allowedPath.replace(/\*/g, '.*')}$`).test(path)
	);
}

export const handle = async ({ event, resolve }) => {
	if (event.request.headers) {
		const url = new URL(event.request.url);
		if (!isPathAllowed(url.pathname)) {
			const headers = new Headers(event.request.headers);
			const auth = headers.get('Authorization');
			if (!auth || auth !== `Basic ${btoa('Shape-II:Shape-II')}`) {
				return new Response('Unauthorized', {
					status: 401,
					headers: {
						'WWW-Authenticate': 'Basic realm="Secure Area"'
					}
				});
			}
		}
	}
	const response = await resolve(event);
	return response;
};
