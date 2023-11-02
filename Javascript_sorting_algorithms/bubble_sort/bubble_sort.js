//javascrip : bubble sort algoritm

//remember that everything is an array in javascript, i.e. vector!

//for pseudocode 2.JPG: swap function & 3. bubblesort vector:

//function to generate random array:
function genRandomArray(n) {
    var arr = []; //empty array
    for (var i = 0; i < n; i++) {
        arr[i] = Math.round(10 * Math.random());
    }
    return arr;
}
//console.log(genRandomArray(10))

//swap functin 1.jpg
function swap(array, index1, index2){
    var x = array[index2];
    array[index2] = array[index1];
    array[index1] = x;
    return array
}
//console.log(swap(10))


//bubblesort function 3.jpg
function bubblesort(array){
    var n = array.length;
    for (var i = 0; i <= n-2; i++) {
        count = 0;
        for (var j = 0; j <= n-2; j++) {
            if (array[j+1] < array [j]) {
                swap(array, j, j+1)
                count++;
            }
        }
        if (count == 0) {
            break
        }
    }
    return array;
}

var array = genRandomArray(8);

console.log(array); //print array before sort
console.log(bubblesort(array));  // print after sort

