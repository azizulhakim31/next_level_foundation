// Question 1
function describeValue(value) {
    let type = typeof value;
    let truthiness;

    if (value) {
        truthiness = "truthy";
    } else {
        truthiness = "falsy";
    }

    return type + " | " + truthiness;
}

console.log(describeValue(null))


// Question 2
function getDayType(day) {
    let lowerCaseDay = day.toLowerCase();

    switch (lowerCaseDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Weddingday"));


// Question 3
function validateUsername(name) {

    username = name.toLowerCase();

    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available"
    }
}

console.log(validateUsername("abcd") );


// Question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {

    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}

console.log(getCngFare(5, true, 10));


// Question 5
const getChaseVerdict=(target, scored, ballsLeft)=> {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    } else {
        let requiredRate = (runsNeeded / ballsLeft) * 6
        let verdict;

        if (requiredRate <= 6) {
            verdict= "Comfortable";
        } else if (requiredRate <= 12) {
            verdict= "Tough";
        } else if (requiredRate > 12) {
            verdict= "Almost Impossible";
        }

        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    }

}

console.log(getChaseVerdict(100, 90, 12));