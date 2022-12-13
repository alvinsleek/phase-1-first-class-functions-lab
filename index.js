// Code your solution in this file!
// Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it
const returnFirstTwoDrivers = (drivers) => {
   return drivers.slice(0, 2);
  }
  
  // Declare a variable with const that is assigned an anonymous function
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  }
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  const createFareMultiplier = (multiplier) => {
    // Return a function that will multiply a fare for a ride accordingly
    return (fare) => fare * multiplier;
  }
  
  // Declare a variable with const and assign a function returned by createFareMultiplier() to it
  const fareDoubler = createFareMultiplier(2);
  
  // Declare a variable with const and assign a function returned by createFareMultiplier() to it
  const fareTripler = createFareMultiplier(3);
  
  // This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
  const selectDifferentDrivers = (drivers, driverSelectionFn) => {
    // Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers
    return driverSelectionFn(drivers);
  }
  
