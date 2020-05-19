// grades less than 38 is failing
// if the DIFFERENCE between the grade (ie. 84) and the next multiple of 5 (85) is less than 3
// 85-84 = 1
// round grade up to the next multiple of 5
// grade = 85

// loop through all grades
// find out which ones are below 38
// do nothing to 'em
// if the grade - (grade/5) is < 3
// grade = Math.round(grade/5)*5
// return the rounded grades

const grading = (arr) => {
   return arr.map((grade) => {
        let nextMulti = Math.ceil(grade / 5) * 5;
        let difference = nextMulti - grade;
        if (grade < 38) {
            return grade;
        } else if (difference >= 3) {
            return grade;
        } else if (difference < 3) {
            grade = nextMulti;
            return grade;
        }
    });
  
};

console.log(grading([73, 67, 40, 33]));
