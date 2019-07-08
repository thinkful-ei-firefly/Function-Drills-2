function daysInAMonth(month) {
    if (month === "January" || month === "March" || month === "May" || month === "July" || 
    month === "August" || month === "October" || month === "December") {
        console.log(`${month} has 31 days.`)
        return 31;
    }
    else if (month === "April" || month === "June" || month === "September" ||
    month === "November") {
        console.log(`${month} has 30 days.`)
        return 30;
    }
    else if (month ==="February") {
        console.log(`${month} has 28 days.`)
        return 28;
    }
    else {
        throw new Error("Not a valid month");
    }
}

try {daysInAMonth("July")}
catch(err) {console.log(err.message)}