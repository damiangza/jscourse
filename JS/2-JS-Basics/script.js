// Variables

/*
var name = 'John';
console.log(name);

var lastName ='Smith';
console.log(lastName);

var age = 26;
console.log('age');

var fullAge = true;
console.log('fullAge');
*/

// LECTURE 2: Variables
/*
var name = 'John';
var age = 26;

console.log(name + age);
var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is ' + age + ' year old ' + job + ' who is ' + isMarried);

age = 'thirty six';
job = 'driver';

console.log(name + ' is ' + age + ' year old ' + job + ' who is ' + isMarried);

var lastName = prompt('what is your last name?');

// console.log(lastName);

alert('your name is' + lastName);
*/

// LECTURE 3; operators
/*
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

// LECTURE: if/else
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' maybe one day');
}

isMarried = true;
if (isMarried) {
  console.log('yes');
} else {
  console.log('no');
}

if (isMarried) {
  console.log('yes');
}

if (23 == '23') {
  console.log('23');
}
*/

// LECTURE: 13. if/else and boolean
/*
var age = 30;

if (age < 20) {
  console.log('teenager');
} else if (age > 20 && age < 30) {
  console.log('john is young man');
} else {
  console.log('man');
}

var job = 'teacher';
job = prompt('what does john do?');

switch (job) {
  case 'teacher':
    console.log('teaches kids');
    break;
  case 'driver':
    console.log('cab driver');
    break;
  case 'cop':
  console.log('super hero');
}
*/

// CODING CHALLENGE 1
/*
var markAge = 30;
var johnAge = 20;
var maryAge = 30;
var markHeight = 1900;
var markScore = markHeight + (markAge * 5);
console.log('MARK: ' + markScore);
var johnHeight = 1900;
var johnScore = johnHeight + (johnAge * 5);
console.log('JOHN: ' + johnScore);
var maryHeight = 1900;
var maryScore = maryHeight + (maryAge * 5);
console.log('MARY: ' + maryScore);

if (markScore > johnScore && markScore > maryScore) {
  console.log('Mark is the winnder with a score of: ' + markScore);
} else if (johnScore > markScore && johnScore > maryScore) {
  console.log('John is the winnder with a score of: ' + johnScore);
} else if (maryScore > johnScore && maryScore > markScore) {
  console.log('Mary is the winnder with a score of: ' + maryScore);
} else if (johnScore === markScore && johnScore > maryScore) {
  console.log('John and Mark draw');
} else if (johnScore === maryScore && johnScore > markScore) {
  console.log('John and Mary draw');
} else if (markScore === maryScore && markScore > johnScore) {
  console.log('Mark and Mary draw');
} else if (markScore === maryScore && markScore === johnScore) {
  console.log('It\'s a draw!.\nMark score: ' + markScore + '\n' + 'John Score: ' + johnScore + '\n' + 'Mary Score: ' + ' ' + maryScore);
} else {
  console.log('NO RESULT!');
}
*/

// LECTURE: FUNCTIONS

/*
function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name +' is already retired.');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


// LECTURE: STATEMENTS VS EXPRESSIONS

/*
Statement (performs an action):
function someFun(par){
  //code
}

e.g.
 if (x==5){
   // code do something, but doesnt give a variable or outcome.
 }

Expression (produces an outcome, viz a var or result):
var someFun = function(par){
  //code
}
e.g.
3 + 4
var x = 3
*/


// LECTURE: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(199, 1969, 1948);
console.log(names[2]);
names[1] = 'Ben';

var john = ['John', 'smith', 1990, 'designer', false];

john.push('blue'); // add to end of array
john.unshift('Mr.'); // add to beggining of array
john.pop(); // removes from end of array
john.shift(); // removes from beggning of array

if(john.indexOf('teacher') === -1){
  console.log('not a teacher');
}
*/

// LECTURE: Objects
// key value pairs, no order

// Creating an object method 1:

/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  ismarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]); // john['job'] = 'teacher' in array

// mutating data:
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

// Creating and object method 2:

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried']=true;

console.log(jane);

console.log(john.indexOf('teacher')); // returns positional value
*/

// LECTURE: Objects and methods

/* v1.0
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  ismarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function (yearOfBirth) {
    return 2016 - this.yearOfBirth;
  }
};
*/

/* "this." refers to the object

console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
 */
/* v2.0
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  ismarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function (yearOfBirth) {
    this.age = 2016 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);
 */


//  LECTURE: Loops

/* var names = ['john', 'mary', 'jane', 'peter'];

// for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (i = name.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

// while loops
var i = 0;
while (i < names.length) {
  console.log(names[i])
  i++
}

for (i = 1; i <= 5 i++) {
  console.log(i);
  if (i === 3) {
    break
  }
  console.log(i);
}

for (i = 1; i <= 5 i++) {
  console.log(i);
  if (i === 3) {
    continue
  }
  console.log(i);
} */


// CODING CHALLENGE 2

// var birthYear = [1999, 2005, 1967];
// var ages = [];

// for (i = 0; i < birthYear.length; i++) {
//   ageToDate = 2016 - birthYear[i];
//   ages.push(ageToDate);
//   console.log(ages);
// }

// for (i = 0; i < birthYear.length; i++) {
//   if (ages[i] > 18) {
//     console.log('Full age: ' + ages[i]);
//   } else {
//     console.log('Under age: ' + ages[i]);
//   }
// }

var years = [];
var fullAge = [];
var ofAge = [];
var ageToDate = 0;
var full_1 = [];
var full_2 = [];

function printFullAge(years) {
  for (i = 0; i < years.length; i++) {
    ageToDate = 2016 - years[i];
    fullAge.push(ageToDate);
    if (fullAge[i] >= 18) {
      ofAge.push(true);
      // console.log(ofAge);
    } else {
      ofAge.push(false);
      // console.log(ofAge);
    }
  }
  console.log(ofAge);
  return ofAge;
}

var full_1 = printFullAge([1970, 1990, 2000, 2001, 2010]);
var full_2 = printFullAge([1800, 1900, 2000, 2100]);




