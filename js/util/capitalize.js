function capitalize(string) {

	let arr = string.split(" ")

	let result = arr.map(e => e.split("").map((k, i) => i===0?k.toUpperCase():k).join("")).join(" ")

	return result
}
