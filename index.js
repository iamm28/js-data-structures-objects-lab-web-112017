// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  let newobj = {...driver}
  newobj[key] = value;
  return newobj;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}
function deleteFromDriverByKey(driver, key) {
  let newDriver = delete driver.key
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
