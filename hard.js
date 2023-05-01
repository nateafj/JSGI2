// Define Tom's height and mass in inches and grams
let tomHeightInInches = 9;
let tomMassInGrams = 8;

// Define Jerry's height and mass in inches and grams
let jerryHeightInInches = 10;
let jerryMassInGrams = 45;

// Convert Tom's height from inches to meters
let tomHeightInMeters = tomHeightInInches * 0.0254;

// Convert Tom's mass from grams to kilograms
let tomMassInKilograms = tomMassInGrams / 1000;

// Calculate Tom's BMI
let tomBMI = tomMassInKilograms / (tomHeightInMeters ** 2);

// Convert Jerry's height from inches to meters
let jerryHeightInMeters = jerryHeightInInches * 0.0254;

// Convert Jerry's mass from grams to kilograms
let jerryMassInKilograms = jerryMassInGrams / 1000;

// Calculate Jerry's BMI
let jerryBMI = jerryMassInKilograms / (jerryHeightInMeters ** 2);

// Compare Tom's and Jerry's BMI
let tomHasHigherBMI = tomBMI > jerryBMI;

// Print the result to the console
console.log("Is Tom's BMI higher than Jerry's? " + tomHasHigherBMI);

