var theTOKEN
var userEmail
var userIsAdmin
var baseAPIURL = "https://api-compliments.herokuapp.com"

function refreshData() {
	console.log("Data refreshed with success.")

	theTOKEN = sessionStorage.getItem('valorizaToken')
	console.log(theTOKEN)

	userEmail = sessionStorage.getItem('valorizaUserEmail')
	console.log(userEmail)

	userIsAdmin = sessionStorage.getItem('valorizaUserIsAdmin')
	console.log(userIsAdmin)
}

refreshData()