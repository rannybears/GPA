function getUserDetails() {
    let gpa = parseFloat(prompt("Enter your GPA:"));
    let height = parseFloat(prompt("Enter your height:"));
    let weight = parseFloat(prompt("Enter your weight:"));

    console.log("GPA: " + gpa.toFixed(2));
    console.log("Height: " + height.toFixed(2));
    console.log("Weight: " + weight.toFixed(2));
}

getUserDetails();
