# Front-end do projeto Valoriza :two_men_holding_hands:

## O que é?
Este é o front-end do projeto Valoriza, desenvolvido durante a NLW Together.

## Como ver o projeto funcionando agora?
Acesse o site hospedado no GitHub Pages através [deste link](https://alessandrocidney.github.io/front-end-api-compliments).

## Como funciona?

### Back-end
O back-end é formado por uma API construida com **Node.JS**, utilizando o framework **Express**, que possui varias rotas que podem ser acessadas com requisições. Cada rota possui suas condições e seus valores para os Headers e para o Body, por isso recomendo que passe pela documentação do back-end acessando [este link](https://github.com/alessandroCidney/api-compliments-compiled) através do README.md do repositório, mas aqui vai um resumo das rotas:

#### /login (POST)
- Método POST.
- Para realizar a autenticação de usuários mediante a passagem de um JSON através do corpo de uma requisição, o qual deve conter o email e a senha (password) do usuário.
- Retorna o token de autenticação do usuário.
- Não necessita de autenticação.

##### Exemplo 
``` javascript
let results = await fetch(`${baseURL}/login`, {
	method: 'POST',
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		email: 'user@example.com',
		password; '12345'
	})
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

#### /users (POST)
- Método POST.
- Para realizar a criação (cadastro) de novos usuários mediante a passagem de um nome de usuário (name), um email e uma senha (password).
- Não necessita de autenticação.

##### Exemplo 
``` javascript
let results = await fetch(`${baseURL}/users`, {
	method: 'POST',
	headers: {
		"Content-Type": "application/json"
	},
	body : JSON.stringify({
		name: 'Example',
		email: 'user@example.com',
		password: '12345',
		admin: false
	})
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

- Observação: Por padrão, se não informado, o valor de admin é false

#### /users (GET)
- Método GET.
- Necessita de confirmação de autenticação mediante a passagem do token de autenticação no campo "Authorization" do Header da requisição.
- Retorna uma lista com os dados dos usuários (exceto a senha).

##### Exemplo
``` javascript
let results = await fetch(`${baseURL}/users`, {
	method: 'GET',
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	}
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

#### /tags (POST)
- Método POST.
- Rota para a criação de novas tags mediante a passagem do nome (name) da nova tag
- Necessita de confirmação de autenticação mediante a passagem do token de autenticação no campo "Authorization" do Header da requisição.
- O usuário criador precisa ser admin.

##### Exemplo
``` javascript
let results = await fetch(`${baseURL}/tags`, {
	method: 'POST',
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		name: "simpatia"
	})
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

#### /tags (GET)
- Método GET.
- Rota para a listagem das tags existentes.
- Necessita de confirmação de autenticação mediante a passagem do token de autenticação no campo "Authorization" do Header da requisição.

##### Exemplo
```javascript
let results = await fetch(`${baseURL}/tags`, {
	method: 'GET',
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	}
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

#### /compliment (POST)
- Método POST.
- Rota para cadastro de novos elogios.
- É necessário informar o id do usuário que receberá o elogio (user_receiver), o id da tag do elogio (tag_id) e a mensagem do elogio (message).
- Necessita de confirmação de autenticação mediante a passagem do token de autenticação no campo "Authorization" do Header da requisição.

##### Exemplo
```javascript
let results = await fetch(`${baseURL}/compliment`, {
	method: 'POST',
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	}
	body: JSON.stringify({ 
		tag_id: '123456789', 
		user_receiver: 'dshjdhjsdhfjshdjhjfhjdhf2345', 
		message: 'Você é incrível!'
	})
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

#### /users/compliments/send (GET)
- Método GET.
- Rota para listagem dos elogios enviados pelo usuário que está autenticado.
- Necessita de confirmação de autenticação mediante a passagem do token de autenticação no campo "Authorization" do Header da requisição.
- Retorna uma lista com informações sobre os elogios enviados.

##### Exemplo
```javascript
let results = await fetch(`${baseURL}/users/compliments/send`, {
	method: 'GET',
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	}
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

#### /users/compliments/receive (GET)
- Método GET.
- Rota para listagem dos elogios recebidos pelo usuário que está autenticado.
- Necessita de confirmação de autenticação mediante a passagem do token de autenticação no campo "Authorization" do Header da requisição.
- Retorna uma lista com informações sobre os elogios recebidos.

##### Exemplo
```javascript
let results = await fetch(`${baseURL}/users/compliments/receive`, {
	method: 'GET',
	headers: {
		"Authorization": `Bearer ${token}`,
		"Content-Type": "application/json"
	}
})
.then(response => response.json())
.then(data => data)
.catch(err => err)
```

### Front-end
Basicamente, o front-end realiza o acesso a cada uma das rotas do back-end para o usuário, exibindo as informações na tela de maneira amigável.

#### Sobre a responsividade
O foco principal foi em criar uma interface amigável para o usuário. A criação foi realizada através do ambiente desktop. Sendo assim, a responsividade ainda não foi implementada, mas já está nos objetivos a serem cumpridos.