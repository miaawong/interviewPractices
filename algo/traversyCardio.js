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

console.log(reverseString("hello"));
