var Sailor = function (firstName, lastName, sasID, boatClass, yearOfBirth, club) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sasID = sasID;
  this.boatClass = boatClass;
  this.yearOfBirth = yearOfBirth;
  this.homeClub = club;
}

// calculate current age
Sailor.prototype.currentAge = function () {
  console.log(new Date().getFullYear() - this.yearOfBirth);
}

var calvin = new Sailor('calvin', 'gibbs', 0054, 'laser', 1999, 'iyc');
var lee = new Sailor('lee', 'gibbs', 505, '420', 2001, 'iyc');
var damian = new Sailor('damian', 'gibbs', 171, 'mirror', 1967, 'iyc');
var anne = new Sailor('anne', 'gibbs', 7654, 'sprog', 1967, 'iyc');

console.log(calvin, lee, damian, anne);

calvin.currentAge();
lee.currentAge();
damian.currentAge();
anne.currentAge();

// console.log(calvin, lee, damian, anne);

console.log(calvin.sasID, lee.sasID, damian.sasID, anne.sasID);
