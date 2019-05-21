// Runner numbers
let raceNumber = Math.floor(Math.random() * 1000);

// registered early or not
const registeredEarly = false;

// adults or not
const age = 16;

// if they are adults and early registered, add 1000
if (age >= 18 && registeredEarly === true) {
  raceNumber += 1000;
};


// check age and registration time, then decide what time the race starts
if (age>=18 && registeredEarly===true) {
  console.log(`Your race starts at 9:30am. Your race number is ${raceNumber}`);
} else if (age>=18 && !registeredEarly===true) {
  console.log(`Your race starts at 11:00am. Your race number is ${raceNumber}`);
}  else if  (age<18) {
 		 console.log(`Your race starts at 12:30pm. Your race number is ${raceNumber}`)}