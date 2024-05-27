/**
 * @param {string} string
 */
export async function cssColor_to_rgba255Color(string) {
	const canvas = document.createElement('canvas');
	canvas.width = canvas.height = 1;
	const ctx = canvas.getContext('2d', { willReadFrequently: true });
	// @ts-ignore
	ctx.fillStyle = string;
	// @ts-ignore
	ctx.fillRect(0, 0, 1, 1);
	// @ts-ignore
	return ctx.getImageData(0, 0, 1, 1).data;
}
