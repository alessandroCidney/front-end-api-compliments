/**
 * Arquivo destinado à configuração dos códigos de Login e Sign-Up
 * */

// Formulário de login

async function login() {
	let email = loginEmailInput.value
	let password = loginPasswordInput.value

	if(!email || !password) {
		alert("Preencha todos os campos do formulário!")
		return false
	}

	if(!validateEmail(email)) {
		alert("Email inválido!")
		return false
	}

	let data = { email: email, password: password }

	let result = await fetch(`${baseAPIURL}/login`, {
		method: 'POST',
		headers: {
			"Content-Type": 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(data => data)
	.catch(err => data)

	if(result.error) { 
		alert("Não foi possível fazer login. Está usando os dados corretos?")
		return false
	}

	theTOKEN = result;

	window.sessionStorage.setItem('valorizaToken', theTOKEN)
	window.sessionStorage.setItem('valorizaUserEmail', email)

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

	users.forEach(e => {
		if(e.email == sessionStorage.getItem('valorizaUserEmail')) {
			sessionStorage.setItem('valorizaUserIsAdmin', e.admin)
		}
	})

	window.location.href = "dashboard.html"

}	

loginButton.addEventListener('click', login)

async function signUp() {
	let username = signUpNameInput.value
	let email = signUpEmailInput.value
	let password = signUpPasswordInput.value

	if(!username || !email || !password) {
		alert('Preencha todos os campos do formulário!')
		return false
	}

	if(!validateEmail(email)) {
		alert('Email inválido!')
		return false
	}

	let data = { name: username, email: email, password: password }

	let result = await fetch(`${baseAPIURL}/users`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(data => data)
	.catch(err => err)

	if(result.error) {
		alert('Não foi possível realizar o cadastro. Talvez o email já esteja sendo utilizado.')
		return false
	}

	console.log(`Resultado do cadastro: ${result}`)

	alert('O usuário foi cadastrado com sucesso!')
}

signUpButton.addEventListener('click', signUp)