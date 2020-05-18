// niece has four candles (arr)
// she can only blow out the tallest candle
// how many candles can she blow?
// loop through and find out the largest number
// howm any times does the nubmer occur

const candles = (arr) => {
    let highest = arr[0];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (highest < arr[i]) {
            // if the highest is less than the current number in the arr
            highest = arr[i];
            // set the highest to this current number
            count = 1;
            // set counter to 1
        } else if (highest === arr[i]) {
            // if the highest number is the same, add 1 to count
            count++;
        }
    }
    return count;
};

console.log(candles([6, 4, 1, 6]));
