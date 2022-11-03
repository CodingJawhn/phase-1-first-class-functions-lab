const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}
// first define returnFirstTwoDrivers variable with the function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//array
const createFareMultiplier = function(fareMultiplier) {
    return function(value) {
       return value * fareMultiplier
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}
