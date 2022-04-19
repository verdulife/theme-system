export async function post({ request }) {
	const { color } = await request.json();

	return {
		status: 200,
		body: {
			message: 'Palette created successfully.',
			color
		}
	};
}
