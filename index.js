// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(function(element) {
    return element.revenue > num;
  });
}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(function(element) {
    return element.name;
  });
}

function exactMatch(driverObjs, attribute) {
  return driverObjs.filter(function(driver) {
    for (const key in attribute) {
      return driver[key] === attribute[key];
    };
  });
}

function exactMatchToList(array, attribute) {
  return exactMatch(array, attribute).map(function(element) {
    return element.name;
  })
}
