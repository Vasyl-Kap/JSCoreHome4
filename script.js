// #1

function arrCopy(arrCopy) {
    arr = [];
    for(let i = 0; i < arrCopy.length; i++) {
        arr[i] = arrCopy[i];
    }
    return arr;
}
let arr1 = arrCopy([1, 2, 3]);
let arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(arr1);
console.log(arr2);

// #2

function arrToString(arrString) {
    arr = [];
    for(let i = 0; i < arrString.length; i++) {
        arr[i] = arrString[i].toString();
    }
    return arr;
}
let arr3 = arrToString([1, 2, 3]);
let arr4 = arrToString([10, 200, 3333]);
console.log(arr3);
console.log(arr4);

// #3

function getLength(arrLength) {
    arr = [];
    for(let i = 0; i < arrLength.length; i++) {
        arr[i] = arrLength[i].length;
    }
    return arr;
}
let arr5 = getLength(['Ivan', 'Pavlo', 'Ira']);
let arr6 = getLength(['Oleksiy', 'Andriana']);
console.log(arr5);
console.log(arr6);

// #4

function removeDuplicates(arrRemove) {
    arr = [];
    for(let i = 0; i < arrRemove.length; i++) {
        arr[i] = arrRemove[i];
    }
    return arrRemove.filter(function(item) {
        return arr.hasOwnProperty(item) ? false : (arr[item] = true);
    });
}
let arr7 = removeDuplicates(['html', 'css', 'html', 'js']);
let arr8 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']);
console.log(arr7);
console.log(arr8);
