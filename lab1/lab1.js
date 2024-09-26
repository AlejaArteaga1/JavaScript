var userName = "Alejandra Arteaga Diaz"
userName = "Gina Paola Diaz"
let userAge = 19
userAge = 52
const userID = "n1026255441"
console.log(userName);
console.log(userAge);
console.log(userID);

let score = 95.5;
console.log(score);
let courseName = "Fundamentals of JavaScript";
console.log(courseName);
let isEnrolled = true;
console.log(isEnrolled);
let grades = [90, 95, 88, 92];
console.log(grades[0]);
console.log(grades);
let student ={
    name: "Alejandra Arteaga Diaz",
    age: 19,
    course: "CPAN 113"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);

console.log(userAge + score);
console.log(score - userAge);
console.log(userAge * 2);
console.log (score / userAge);

let anotherAge = 48
console.log(userAge == anotherAge);
console.log(userAge === anotherAge);
let anotherScore = 89.7
console.log(score < anotherScore);
console.log(score >= anotherScore);
console.log(isEnrolled);

if (userAge > 18){
    console.log("greater than 18")
} else {console.log("less than 18")}

switch (courseName){
    case "Math":
        console.log("You selected math course");
    break;
    case "Fundamentals of JavaScript":
        console.log("You selected Fundamentals of JavaScript course");
    break;
    case "Problem Solving":
        console.log("You selected Problem Solving program");
    break;
    default:
        console.log("This is not a valid option");
}