'use strict';
var score = 0;

//Ask user for name
function fUsername()
{
var username = prompt('What is your name?');
console.log('Name is ' + username);
alert('Hey, '+username+ '!');
}


//Ask user a true/false question
function fCity()
{
var city = prompt('Am I from Philly?');
console.log('Am I from Philly?' + city.toLowerCase());
if (city.toLowerCase() === 'yes' || city === 'y' || city === 'Y' ) {
  alert('Incorrect!  I\'m from Boston.');
} else if (city === 'n' || city === 'N' || city.toLowerCase() === 'no') {
  alert('Correct!');
  score++;
}
}


// //Ask user a true/false question
// var coffee = prompt('Do I love coffee?');
// console.log('Do I love coffee? = ' + coffee.toLowerCase());
// if (coffee.toLowerCase() === 'y' || coffee === 'Y' || coffee.toLowerCase() === 'yes') {
//   alert('Correct!  Coffee runs in my veins.');
//   score++;
// } else if (coffee === 'n' || coffee === 'N' || coffee.toLowerCase() === 'no') {
//   alert('Incorrect!');
// }

// //Ask user a true/false question
// var bjj = prompt('Do I practice Brazilian Jiu Jitsu?');
// console.log('Do I practice Brazilian Jiu Jitsu? = ' + bjj.toLowerCase());
// if (bjj === 'y' | bjj === 'Y' || bjj.toLowerCase() === 'yes') {
//   alert('Correct!  I love me some wrasslin');
//   score++;
// } else if (bjj === 'n' | bjj === 'N' || bjj.toLowerCase() === 'no') {
//   alert('Incorrect!');
// }

// ///Ask user a true/false question
// var javaQuestion = prompt('Have I worked with Javascript before?');
// console.log('Have I worked with Javascript before? = ' + javaQuestion.toLowerCase());
// if (javaQuestion === 'y' | javaQuestion === 'Y' || javaQuestion.toLowerCase() === 'yes') {
//   alert('Incorrect!  Codefellows has been my first experience working with Javascript.');
// } else if (javaQuestion === 'n' | javaQuestion === 'N' || javaQuestion.toLowerCase() === 'no') {
//   alert('Correct!  I have experience with Bash and Python, but I haven\'t worked with Javascript prior to Codefellows.');
//   score ++;
// }

// //Ask user a number related question - can likely convert to a switch statement
// var i = 0;
// console.log(seattleResident);
// while (i < 4)
// {
//   var seattleResident = prompt('How long have I lived in Seattle? (number of months)');
//   if (seattleResident === '1') {
//     break;
//   } else if (seattleResident > '5'){
//     alert('Too high, '+ username +'!  Try again.');
//     i++;
//     alert('You have used ' + i + ' out of 4 guesses!');
//   } else if (seattleResident <= '5'){
//     alert('Getting close, '+ username +'!  Try again.');
//     i++;
//     alert('You have used ' + i + ' out of 4 guesses!');
//   }
// }
// if (seattleResident === '1'){
//   alert('I guess you\'re alright, ' + username +'.');
//   score++;
// } else {
//   alert('I thought we were friends, ' + username +'. :(');
// }

// // Ask a user a multiple accepted question using arrays

// var townArray = ['EVERETT', 'PUYALLUP', 'TACOMA','SUMNER','BONNEY LAKE', 'TOLEDO'];
// var m = 0;
// var tries = 6;
// while (m < tries)
// {
//   var townPrompt = prompt('Besides Seattle, where else I have visited in WA state?');
//   console.log(townPrompt.toUpperCase());
//   for (var t = 0; t < townArray.length; t++){
//     var check = townPrompt.toUpperCase() === townArray[t].toUpperCase();
//     if (check === true)
//     {
//       break;
//     }
//   }
//   if (check === true) {
//     break;
//   }
//   m++;
//   alert('Incorrect, please try again.  That was ' + m + ' out of ' + tries + ' tries.');
// }
// if (check === true) {
//   alert('Correct!');
//   score++;
// } else{
//   alert('Incorrect :(');
// }


// alert('Congratulations!  You made it to the end.');
// alert('You got ' + score + ' out of 6 correct!');
