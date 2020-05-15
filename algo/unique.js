//return true only if all values are unique
// using array, object, string method lastIndexOf()

// using array
// const uniqueArr = str => {
//     let values = [];
//     for (let letter of str) {
//         //    to find out what we are comparing to
//         // console.log(values.indexOf(letter));
//         // values.push(letter);

//         //   if the index is equal to -1, then it is a unique number
//         if (values.indexOf(letter) !== -1) {
//             return false;
//         }
//         values.push(letter);
//     }
//     return true;
// };

// with object
// const uniqueObject = str => {
//     let values = {};
//     for (let letter of str) {
// checking if the letter property is in the object
//         if (values[letter]) {
//             return false;
//         }
// add the property with some kind of value into the object
//         values[letter] = "exists";
//     }
//     return true;
// };
// string method & lastindexOf
// const uniqueStr = str => {
//     for (let i = 0; i < str.length; i++) {
//console.log(str.lastIndexOf(str[i]));
// if the lastIndexOf our string is not the same index, that means it is not unique
//         if (str.lastIndexOf(str[i]) !== i) {
//             return false;
//         }
//     }
//     return true;
// };

// using Set() data structure

const uniqueData = str => {
    // set() only stores unique values
    // let tempStr = new Set();
    // for (let letter of str) {
    //     if (tempStr.has(letter)) {
    //         return false;
    //     }
    //     tempStr.add(letter);
    // }
    // return true;

    // simpler way to write ^^
    // set.prototype.size = number of values in the set
    return new Set(str).size === str.length;
};

console.log(uniqueData("abcde"));
console.log(uniqueData("abcabc"));
