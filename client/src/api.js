export const getData = () => fetch("/api/data").then((res) => res.json());

export const pushData = (data) =>
	fetch("/api/updateData", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then((res) => res.json());
