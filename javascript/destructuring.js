var num = { x: 4, y: 5, z: 7 };
// var x = num.x;
// var y = num.y;
// var z = num.z;
// console.log(z);

//destructuring
const { x, y, z } = num;
console.log(x);
// you can also reassign the names of the variables
const { x: a, y: b, z: c } = num;
console.log(b);

// can assign variables from nested objects
const apple = {
    start: { x: 5, y: 8 },
    end: { x: 7, y: 10 }
};
const {
    start: { x: startX, y: startY }
} = apple;
console.log(startX);
