// Variables
var userName = "John Doe"; // Using var (older way, generally avoid)
let userAge = 30; // Using let (for variables that might change)
const PI = 3.14; // Using const (for constants that shouldn't change) [cite: 2]

// Functions
function calculateBMI(weightKg, heightM) {
  let bmi = weightKg / (heightM * heightM);
  return bmi;
}

function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
[cite, 3]

// Conditions
function validateInput(value) {
  if (value === "") {
    return "Input is required";
  } else if (typeof value === 'number' && value < 0) {
    return "Input must be a positive number";
  } else {
    return "Input is valid";
  }
}

function getDayOfWeek(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    // ... other cases
    default:
      dayName = "Invalid day";
  }
  return dayName;
}
[cite, 3]

// Loops
function generateUserTable(users) {
  let tableHTML = "<table>";
  for (let i = 0; i < users.length; i++) {
    tableHTML += "<tr><td>" + users[i].name + "</td><td>" + users[i].email + "</td></tr>";
  }
  tableHTML += "</table>";
  return tableHTML;
}

let i = 0;
while (i < 5) {
  console.log("While loop iteration: " + i);
  i++;
}

let j = 0;
do {
  console.log("Do-while loop iteration: " + j);
  j++;
} while (j < 5);
[cite, 4]