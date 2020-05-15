// print stairs of n
// base and height are equal to n

const stairs = (n) => {
    // loop through n
    // with for loop
    let j = n - 1;
    let space = " ";
    let hash = "#";
    for (let i = 1; i <= n; i++) {
        if (j >= 1) {
            console.log(space.repeat(j) + hash.repeat(i));
            j--;
        } else if (j === 0) {
            console.log(hash.repeat(i));
        }
    }
};

stairs(6);
