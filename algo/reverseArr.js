const reverseArr = (arr) => {
    // return arr.reverse();
    let newArr = [];
    for (let x = arr.length - 1; x >= 0; x--) {
        newArr.push(arr[x]);
    }
    return newArr;
};
console.log(reverseArr([1, 4, 3, 2]));
