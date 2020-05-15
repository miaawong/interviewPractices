// array of numbers
// calculate the fractions (or in 6 decimal places)
// for: positive, negative, and zeros

// math.sign()
// toFixed()
const plusMinus = (arr) => {
    // loop thru the arr
    // how to figure out whats positve?
    // if it's positive, add 1 to (positive/ arr.length)
    // whats negative ? add 1 to (neg/arr.length)
    // whats 0 ? add 1 to (0/arr.length)
    let pos = 0;
    let neg = 0;
    let zero = 0;
    arr.map((number) => {
        if (Math.sign(number) === 1) {
            pos += 1;
        }
        if (Math.sign(number) === -1) {
            neg += 1;
        }
        if (number === 0) {
            zero += 1;
        }
    });
    pos = (pos / arr.length).toFixed(6);
    console.log(pos, "pos");
    neg = (neg / arr.length).toFixed(6);
    console.log(neg, "neg");
    zero = (zero / arr.length).toFixed(6);
    console.log(zero, "zero");
};

plusMinus([1, 1, 0, -1, -1]);
