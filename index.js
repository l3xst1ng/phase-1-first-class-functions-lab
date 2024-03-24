// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// Function to return the first two drivers (non-destructive)
function returnFirstTwoDrivers(driverList) {
  return driverList.slice(0, 2); // Uses slice to create a copy of the first two elements
}

// Function to return the last two drivers (non-destructive)
function returnLastTwoDrivers(driverList) {
  return driverList.slice(-2); // Uses slice to create a copy of the last two elements
}

// Array containing the driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that creates a fare multiplier function
function createFareMultiplier(multiplier) {
  return (fare) => fare * multiplier; // Returns a function that multiplies the fare
}

// Pre-defined fare multiplier functions
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Function to select drivers based on a provided function
function selectDifferentDrivers(arrayOfDrivers, selectionFunction) {
  return selectionFunction(arrayOfDrivers.slice()); // Non-destructive copy for selection
}
