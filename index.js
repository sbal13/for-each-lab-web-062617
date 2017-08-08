function iterativeLog(array){
	array.forEach((value, index) => {
		console.log(`${index}: ${value}`)
	})
}

function iterate(callback){
	let array = ["dog", "cat", "mouse", "bird"]
	array.forEach(callback)
	return array
}

function doToArray(array, callback){
	array.forEach(callback)
}

