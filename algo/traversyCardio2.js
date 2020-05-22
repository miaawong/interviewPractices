const longestWord = (sen) => {
    // sol 1 = return a single longest word
    // split(' ') each word up
    // count how many letters are in each word
    // have a map count? word : number of letters
    // print out the one with the highest number

    let maxMap = {};
    sen.split(" ").map((str) => {
        maxMap[str] = str.length;
    });
    return Object.keys(maxMap).reduce((max, word) => {
        console.log(max, "nax");
        if (maxMap[max] === maxMap[word]) {
            let arr = [];
            arr.push(word, max);
            return arr;
        } else {
            return maxMap[max] > maxMap[word] ? max : word;
        }
    });

    // sol 2 = return an array and include mutliple words if they have the same length
    // sol 3 = only reutrn an array if mulitple words, otherwise return a string
};
// console.log(longestWord("hi its aboutk again"));

const chunkArr = (arr, len) => {
    // split an array into chunked array of a specific length
    let result = [];
    for (let i = 0; i < arr.length; i += len) {
        let chunk = arr.slice(i, i + len);
        result.push(chunk);
    }
    return result;
};

console.log(chunkArr([1, 2, 3, 4, 5, 6, 7], 3));
