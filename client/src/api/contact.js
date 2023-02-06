const apiUrl = process.env.REACT_APP_API_URL;

export const sendMessage = async (payload) => {
	const response = await fetch(apiUrl + '/message', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(payload),
	});

	const json = await response.json();
	return json;
};
