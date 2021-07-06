function formatDate(date) {
	let arr = date.split("/")

	let month = arr[1]

	let stringMonth;

	switch(month) {
		case "01":
		stringMonth = "Jan"
		break

		case "02":
		stringMonth = "Fev"
		break

		case "03":
		stringMonth = "Mar"
		break

		case "04":
		stringMonth = "Abr"
		break

		case "05":
		stringMonth = "Mai"
		break

		case "06":
		stringMonth = "Jun"
		break

		case "07":
		stringMonth = "Jul"
		break

		case "08":
		stringMonth = "Ago"
		break

		case "09":
		stringMonth = "Set"
		break

		case "10":
		stringMonth = "Out"
		break

		case "11":
		stringMonth = "Nov"
		break

		case "12":
		stringMonth = "Dez"
		break

		default:

	}	

	return `${arr[0]} de ${stringMonth}, ${arr[2]}`
}