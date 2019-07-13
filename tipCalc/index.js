let tip;

const calculateTip = () => {
    const bill = document.querySelector('#billAmount').value;
    const serviceOp = document.querySelector('#serviceOp').value;
    if (serviceOp === "bad") {
        tip = bill * (.10);
    } else if (serviceOp === "ok") {
        tip = bill * (.15);
    } else {
        tip = bill * (.20);
    }
    tipDisplay.innerHTML = `$ ` + tip;
}


// listen for submit 
const calculate = document.querySelector('#calculate');
const tipDisplay = document.querySelector('.tip');
// find out the input


// build a function that calculates the tip
// if bad = 10% 
// if ok = 15% 
// if amazing = 20% 


// return the tip calculated 

calculate.addEventListener('click', calculateTip);