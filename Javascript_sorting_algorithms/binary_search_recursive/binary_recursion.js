function genRandomArray(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = Math.round(10 * Math.random());
	}
	return arr;
}

function swap(array, index1, index2) {
	var saveElement = array[index1];
	array[index1] = array[index2];
	array[index2] = saveElement;
	return array;
}

function bubbleSort(array) {
	var n = array.length;
	for (var i = 1; i < n; i++) {
		var count = 0;
		for (var j = 0; j < n - 1; j++) {
			if (array[j + 1] < array[j]) {
				count++;
				swap(array, j, j + 1);
			}
		}
		if (count == 0) {
			break;
		}
	}
	return array;
}

array = genRandomArray(5);
array = bubbleSort(array);
//left = 0; //called in binarySearch function
//right = array.length-1;  //called in binarySearch function
console.log(array)

//search function : only works on sorted arrays... (should have had a look at functions above beforehand...)
function search(array, x, left, right) {

	// return a Boolean: true if x is in array between left and right, and false otherwise
    if (left > right) {
        return false;
    };

    let MID = Math.floor((left+(right))/2);

    //if not last element, do:
    if (left <= right){
        if (array[MID] === x){
            return true; //x is found
        } 
        else if (array[MID] > x) {
            right = MID-1;  //x not midpoint: so we subtract 1 from right if <
        } 
        else {
            left = MID+1; //x not midpoint: so we add 1 to left if >
        } 
    }

    return search(array, x, left, right);  //recursion
}

//console.log(search(array, 2, 0, array.length));  //tested:works


function binarySearch(array, x) {
	// return a Boolean: true if x is in array, and false otherwise
    var right = array.length-1;
    var left = 0;
    return search(array, x, left, right)
    };  //recursion


console.log(binarySearch(array, 10));  //tested:works



// Do not modify the code below this point--------------------------------
module.exports = {
	genRandomArray: genRandomArray,
	swap: swap,
	bubbleSort: bubbleSort,
	search: search,
	binarySearch: binarySearch
}