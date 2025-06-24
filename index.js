const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers));  // ['Amari', 'Mo']
console.log(fareDoubler(10));                // 20
console.log(fareTripler(10));                // 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']