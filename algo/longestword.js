const longestWord = str => {
    // split = we are going to split whereever we have space
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
};

console.log(longestWord("i woke up early today"));
console.log(longestWord("i woke up early today and went straight to work"));
