const reverseString = (str) => {
    // my first way
    // let arr = str.split("");
    // arr.reverse();
    // return arr.join("");

    //even cleaner
    //return str.split("").reverse().join("");

    return str
        .split("")
        .reduce(
            (reverse, char) => (
                console.log(reverse, "rev", char, "char"), char + reverse
            )
        );
};

// console.log(reverseString("hello"));

const isPalindrome = (str) => {
    //return true if its a palindrome, false if not
    // ex: racecar === true
    const revStr = str.split("").reverse().join("");
    return revStr === str ? "true" : "false";
};

// console.log(isPalindrome("hello"));

const reverseInt = (int) => {
    //return an integer in reverse
    let revStr = int.toString().split("").reverse().join("");
    return parseInt(revStr) * Math.sign(int);
};

// console.log(reverseInt(-678));

const capitalizeLetters = (str) => {
    //return a string with the first letter of every word capitalized
    //split the string between the spaces
    //get first letter of that
    // then cap it
    //join it
    // mia's first way
    return (
        str
            .split(" ")
            // word[0] is a string! but I am using Property Access (es5)
            // I also used charAt
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ")
    );
};
// console.log(capitalizeLetters("i love javascript"));

const maxCharacter = (str) => {
    //this one was challenging cause i ddidn't know how to add to an object?
    // return a character that occurs the most time in this string
    //ex: 'hello' == 'l'
    let maxChar = "";
    let arr = str.split("");
    let charMap = {};
    let max = 0;

    arr.map((char) => {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

// console.log(maxCharacter("javascript"));

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        if (output === "") {
            output = i;
        }
        console.log(output);
    }
};

console.log(fizzBuzz());
