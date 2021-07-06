async function findUserById(id) {
	let users = await fetch(`${baseAPIURL}/users`, {
		method: 'GET',
		headers: {
			"Authorization": `Bearer ${theTOKEN}`,
			"Content-Type": "application/json"
		}
	})
	.then(response => response.json())
	.then(data => data)
	.catch(err => err) 

	let user

	Object.entries(users).forEach(e => {
		if(e[1].id === id) user = e[1]
	})

	return user
}

async function findTagById(id) {
	let tags = await fetch(`${baseAPIURL}/tags`, {
		method: 'GET',
		headers: {
			"Authorization": `Bearer ${theTOKEN}`,
			"Content-Type": "application/json"
		}
	})
	.then(response => response.json())
	.then(data => data)
	.catch(err => err)

	let tag

	Object.entries(tags).forEach(e => {
		if(e[1].id === id) tag = e[1]
	})

	return tag
}