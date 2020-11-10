function random_array(length) {
	var array = []
	for (var i = 0; i < length; i++)
		array.push(Math.random())
	return array
}

function values(array) {
	var max = Math.max.apply(null, array),
		min = Math.min.apply(null, array),
		median = 0
	
	array.sort()

	if (array.length % 2 == 0)
		median = (array[Math.floor(array.length / 2)] 
			+ array[Math.floor(array.length / 2) - 1]) / 2
	else
		median = array[Math.floor(array.length / 2)]

	return "\nMax: " + max + "\n" 
	+ "Min: " + min  + "\n" 
	+ "Median: " + median
}

function swap(array, first, second){
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)]
    while (left <= right) {
        while (array[left] < pivot)
            left++
        while (array[right] > pivot)
            right--
        if (left <= right) {
            swap(array, left, right)
            left++
            right--
        }
    }
	return left
}

function quickSort(array, left, right) {
	var index
    if (array.length > 1) {
        index = partition(array, left, right)
        if (left < index - 1) 
            quickSort(array, left, index - 1)
        if (index < right)
            quickSort(array, index, right)
    }
    return array
}

function count_tag() {
	var tags = {}
	for (const tag of document.getElementsByTagName('*')) {
		if (tag.tagName in tags)
			tags[tag.tagName] += 1
		else tags[tag.tagName] = 1
	}
	

	return tags
}

array = random_array(1000)
console.log("Array: ", array)
console.log("Values: ", values(array))
array_to_sort = random_array(10)
console.log("Sort array: " , quickSort(array_to_sort, 0, array_to_sort.length - 1))
console.log(count_tag())
