let tip;

const calcTip = () => {
    const bill = document.querySelector("#billAmount").value;
    const serviceOp = document.querySelector("#serviceOp").value;
    if (serviceOp === "bad") {
        tip = bill * 0.1;
    } else if (serviceOp === "ok") {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    tipDisplay.innerHTML = "$" + tip;
};

const calculate = document.querySelector("#calculate");
const tipDisplay = document.querySelector(".tip");

calculate.addEventListener("click", calcTip);
