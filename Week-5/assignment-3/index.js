
const myArray = [1, 2, 3, 4, 5, 1, 4, 6, 3];
const myArray2 = [1, 2, 3, 4, 5];

function hasDuplicates(arr) {
    let mySet = new Set(arr);
    if(arr.length !== mySet.size) {
        console.log("duplicates found")
        return false;
    } else {
        console.log("no duplicates found")
        return true
    }
 }

hasDuplicates(myArray);