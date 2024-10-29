//=================Question 01==================//

function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

console.log(power(2, 3));

//=================Question 02==================//

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020)); 
console.log(isLeapYear(2021)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000));

//=================Question 03==================//

let a = 5, b = 6, c = 7;
// Function to calculate the semi-perimeter (S)
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

// Function to calculate the area using the semi-perimeter
function calculateArea(a, b, c) {
    let S = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

console.log("Area of triangle:", calculateArea(a, b, c)); 

//=================Question 04==================//

function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

function calculatePercentage(mark1, mark2, mark3) {
    let totalMarks = mark1 + mark2 + mark3;
    let maxMarks = 300; 
    return (totalMarks / maxMarks) * 100;
}

function mainFunction(mark1, mark2, mark3) {
    let average = calculateAverage(mark1, mark2, mark3);
    let percentage = calculatePercentage(mark1, mark2, mark3);
    
    console.log("Average Marks:", average);
    console.log("Percentage:", percentage + "%");
}

mainFunction(85, 90, 80); 

//=================Question 05==================//

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }
    return -1; 
}

console.log(customIndexOf("hello", "e")); 
console.log(customIndexOf("hello", "a")); 

//=================Question 06==================//

function removeVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

// Example usage
console.log(removeVowels("This is a sample sentence.")); // Outputs: "Ths s  smpl sntnc."

//=================Question 07==================//

function countSuccessiveVowels(text) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length - 1; i++) {
        let firstChar = text[i];
        let secondChar = text[i + 1];

        
        if (vowels.includes(firstChar) && vowels.includes(secondChar)) {
            count++;
           
            console.log("Found successive vowels:", firstChar + secondChar);
            
            switch (firstChar + secondChar) {
                case "ea":
                case "ui":
                    console.log(`Specific pair "${firstChar + secondChar}" found.`);
                    break;
            }
        }
    }
    
    return count;
}

// Example usage
const text = "Pleases read this application and give me gratuity";
console.log("Total successive vowel pairs:", countSuccessiveVowels(text)); // Outputs: 3

//=================Question 08==================//

// Function to convert kilometers to meters
function convertToMeters(km) {
    return km * 1000;
}

// Function to convert kilometers to feet
function convertToFeet(km) {
    return km * 3280.84;
}

// Function to convert kilometers to inches
function convertToInches(km) {
    return km * 39370.1;
}

// Function to convert kilometers to centimeters
function convertToCentimeters(km) {
    return km * 100000;
}

// Main function to display all conversions
function displayConversions(km) {
    console.log("Distance in kilometers:", km);
    console.log("Distance in meters:", convertToMeters(km));
    console.log("Distance in feet:", convertToFeet(km));
    console.log("Distance in inches:", convertToInches(km));
    console.log("Distance in centimeters:", convertToCentimeters(km));
}

// Example usage
const distanceInKm = 5; 
displayConversions(distanceInKm);

//=================Question 09==================//

function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12;
    
    if (hoursWorked > regularHours) {
        let overtimeHours = hoursWorked - regularHours;
        let overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    } else {
        return 0; 
    }
}

function displayOvertimePay(hoursWorked) {
    let overtimePay = calculateOvertimePay(hoursWorked);
    console.log("Total hours worked:", hoursWorked);
    console.log("Overtime pay:", overtimePay > 0 ? `Rs. ${overtimePay}` : "No overtime pay");
}


displayOvertimePay(45); 
displayOvertimePay(40); 

//=================Question 10==================//

function calculateNotes(amount) {
    let hundreds = 0;
    let fifties = 0;
    let tens = 0;

    // Calculate the number of 100 Rs notes
    if (amount >= 100) {
        hundreds = Math.floor(amount / 100);
        amount %= 100; 
    }

    // Calculate the number of 50 Rs notes
    if (amount >= 50) {
        fifties = Math.floor(amount / 50);
        amount %= 50; 
    }

    // Calculate the number of 10 Rs notes
    if (amount >= 10) {
        tens = Math.floor(amount / 10);
        amount %= 10; 
    }

    return {
        hundreds,
        fifties,
        tens,
    };
}


function displayCurrencyNotes(amount) {
    
    if (amount % 10 !== 0) {
        console.log("Amount should be a multiple of 10.");
        return;
    }
    
    const notes = calculateNotes(amount);
    console.log("Total amount to withdraw: Rs.", amount);
    console.log("Number of 100 Rs notes:", notes.hundreds);
    console.log("Number of 50 Rs notes:", notes.fifties);
    console.log("Number of 10 Rs notes:", notes.tens);
}


displayCurrencyNotes(470); // For an amount of Rs. 470
