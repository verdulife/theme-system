export async function get() {
	const data = {
		title: 'verdu',
		message: 'Happy coding 🚀'
	};

	return {
		status: 200,
		body: { data }
	};
}
