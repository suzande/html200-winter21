const firstName = 'Suzanne';
const lastName = 'DePoe';
const age = 18;
const driverAge = 16;

if (age >= driverAge) {
  console.log(firstName + ' ' + lastName + ' has had her license for ' + (age - driverAge) + ' year');
} 
else {
  console.log("Driver not 16");
}
