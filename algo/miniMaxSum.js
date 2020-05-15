// given an array of 5 positive numbers find the sum of min and max values
// by summing four/5
// so sum the first four = min
//and the last four = max

const miniMaxSum = (arr) => {
    // sort array from min to max
    arr.sort();
    // loop for the first 4
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        //add each number togehter each loop
        min += arr[i];
    }
    for (let j = 1; j < arr.length; j++) {
        max += arr[j];
    }
    console.log(min, max);
    // loop for the last 4
};

miniMaxSum([1, 2, 3, 4, 5]);
