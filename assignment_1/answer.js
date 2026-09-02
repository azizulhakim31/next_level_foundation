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