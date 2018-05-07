// function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// }

// // object prototype
// var Person = function (name, yearOfBirth, job) {
//   this.name  = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// // function constructor
// Person.prototype.calculateAge = function () {
//   console.log(2016 - this.yearOfBirth);
// }

// // adding property to the prototype via a function constructor
// Person.prototype.lastName = 'Smith';

// // methods
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// Object.create

// var personProto = {
//   calculateAge: function () {
//     console.log(2016 - this.yearOfbirth);
//   }

// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfbirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//   {
//     name: {value: 'Jane'},
//     yearOfbirth: {value: 1969},
//     job: {value: 'designer'}

// });


// Primitves vs objects

// Objects
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// var obj1 = {
//   name: 'john',
//   age: 26
// };

// console.log(obj1.age);

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// // Functions

// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'cape town';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// Lecture: passing functions as arguments

// var years = [1990, 1965, 1987, 1930, 2005];

// fn = "call back" function

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// function isFullAge(el) {
//   return el >= 18; //true or false value
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el)); //el = age
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);
// console.log(maxHeartRate);



// LECTURE: Functions returning functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log('DESIGNER QUESTION ' + name)
//     }
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log('TEACHER QUESTION ' + name);
//     }
//   } else {
//     return function (name) {
//       console.log('GENERIC QUESTION ' + name)
//     }
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer')
// teacherQuestion('john');
// designerQuestion('john');

// interviewQuestion('teacher')('Mark');

// Lecture: IIFE for data privacy
// Immediately Invoked Function Expression

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

/*
(function () { // <-- no variable passed
  var score = Math.random() * 10; // var score only available within function
  console.log(score >= 5);
})(); //<-- no variable passed to function in ()

console.log(score); // doesn't work, error, score variable only available within function, not declared globally.
*/

// internal scope hidden from external scope
// but still able to pass a variable

/*
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5) // <-- variable passed, but result hidden from global execution context.
*/

// Lecture: Closures

// function retirment(retirementAge) {
//   var a = ' years left until retirement.'
//   return function (yearOfBirth) { // <-- anonymous function
//     var age = 2016 - yearOfBirth
//     console.log((retirementAge - age) + a);
//   }
// }
// var retirementUS = retirment(66);
// var retirementGermany = retirment(65);
// var retirementIceland = retirment(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);


// function interviewQuestion(job) {
//   return function (name) {
//     if (job === 'designer') {
//       console.log('DESIGNER QUESTION ' + name);
//     } else if (job === 'teacher') {
//       console.log('TEACHER QUESTION ' + name);
//     } else {
//       console.log('GENERIC QUESTION ' + name);
//     }
//   }
// }

// var interviewQuestionDesigner = interviewQuestion('designer');
// var interviewQuestionTeacher = interviewQuestion('teacher');
// interviewQuestionDesigner('Mark');
// interviewQuestionTeacher('John');
// interviewQuestion('designer')('johnx');


// Lecture: Bind, call and apply

// var john = {
//   name: 'john',
//   age: 26,
//   job: 'teacher',
//   presentation: function (style, timeOfDay) { // <-- method - presentation
//     if (style === 'formal') {
//       console.log("Good " + timeOfDay + ", Ladies and genetlemen! I'm " + this.name + " I'm a " + this.job + " and I'm " + this.age + " years old.");
//     } else if (style === 'friendly') {
//       console.log("Hey! What's up! I'm " + this.name + " I'm a " + this.job + " and I'm " + this.age + " years old. Have a nice " + timeOfDay);
//     }
//   }
// };

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// }

// john.presentation('formal', 'morning');

// call method
// john.presentation.call(emily, 'friendly', 'afternoon'); // "emily" == this. variable

// apply method
// john.presentation.apply(emily, ['friendly', 'afternoon']); // wont work with john object as object expects variables, not an array.

// bind method. Doesnt call the function, but calls a _copy_ of the function

// var johnFriendly = john.presentation.bind(john, 'friendly'); // two parameters preset

// johnFriendly('morning'); // calling the function with the missing third parameter
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// var years = [1990, 1965, 1987, 1930, 2005];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit; // returns true or false value
// }

// var ages = arrayCalc(years, calculateAge);

// // always pass the this. variable on the bind command first
// // .bind uses a _copy_ of the isFullAge function with preset variables
// var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);















