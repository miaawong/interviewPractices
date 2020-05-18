// 12 hour time, convert to 24
// 0 <= hour <= 23
// 0 <= minute && seconds <=59

const timeConverter = (time) => {
    let period = time.slice(-2);
    let hour = parseInt(time.slice(0, 2));
    let minSec = time.slice(2, 8);

    // if period is AM && 0 < hour < 12
    if (period === "AM" && hour === 12) {
        hour = 0;
    } else if (period === "PM" && hour === 12) {
        hour;
    } else if (period === "PM" && 1 <= hour < 12) {
        console.log("yo");
        hour = hour + 12;
        console.log(hour);
    }
    hour = hour.toString();
    if (hour.length === 1) {
        console.log(hour);
        console.log("only single");
        return `0${hour}${minSec}`;
    } else {
        return `${hour}${minSec}`;
    }

    // let converted = (hour.toString(), min, sec, period);
    // console.log(converted, "xoncwerwes");
};

console.log(timeConverter("12:45:54PM"));
