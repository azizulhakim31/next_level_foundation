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