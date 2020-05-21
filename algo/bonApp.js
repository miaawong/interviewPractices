// Anna is allergic to soemthing on the bill
// she still wants to split the bill but will not be paying for what she did not eat

// line 1 : [4,1]
// 4 = the nubmer of food total
// 1 = the index of what she did not eat
// line 2 : [3, 10, 2, 9]
//  the bill
// line 3: 12
// what her friend made her pay

// the question is did brian overcharge Anna?
// if he didn't, print bon appetit
// if he did overcharge, print out what he needs to refund

const bonApp = (items, bill, paid) => {
    let removeItem = items[1];

    let total = bill.reduce((acc, val) => {
        return acc + val;
    });
    total = total - bill[removeItem];
    let difference = paid - total / 2;
    if (difference === 0) {
        return "bon appetit";
    } else {
        return difference;
    }
};

console.log(bonApp([4, 1], [3, 10, 2, 9], 7));
