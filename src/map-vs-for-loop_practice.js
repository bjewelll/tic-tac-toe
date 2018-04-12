
// Map vs. For Loop Practice

// Below are exercises to get you seeing the differences between using a map and a for loop. Beneath each prompt write the code to fulfill the exercise requirement.


// Exercise 1
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
// make a empty array below is a empty array
var byfive =[]
// make a for loop that times by 5
for(let i = 0; i < nums.length; i++){
  byfive.push(nums[i]*5)
console.log("nums", nums[i])
}
// Write a for loop that saves the result of each number multiplied by 5 to another array.
// Exercise 2
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.
//create map on nums array
var themap = nums.map((the) =>{
  //create results of each number, multiplied by 5
  return the * 5
})


// EXERCISE 3
// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.
//make a empty array
var emptyRay =[]
//make a loop that saves evenly divisible by 3
for(let i = 0; i <= nums.length; i++){
  console.log(numbers[i])
  if(numbers[i] % 3 == 0){
  emptyRay.push(numbers[i])
  }
}
// EXERCISE 4
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.
//create a map that saves numbers that a divisible by 3
var mapnumbers = numbers.map((dBy) =>{
// create a if statement that sees if the number is divisible by 3
  if(dBy % 3 == 0){
// send the return dBy
    return dBy
  }
})



// Exercise 5
// Consider this variable:
var toons = [{name: "Tom", animal: "cat"}, {name: "Jerry", animal: "mouse"}, {name: "Bugs", animal: "rabbit"}, {name: "Daffy", animal: "duck"}, {name: "Felix", animal: "cat"}, {name: "Oswald", animal: "rabbit"}]
// Write a for loop that saves all cat characters to another array.

//create a empty array to push final results
var isitacat =[]
// crate a for loop that reads everything in the toons var
for(i = 0; i < toons.length; i++){
  console.log(i)
//create a if statement to says if animal is a cat push to isitacat
if (toons[i].animal == 'cat'){
isitacat.push(toons[i].name)
 }
}

// Exercise 6 map-vs-for-loop_practice
// Use map on the toons array to save all rabbit characters to another array.
var nameofcat = toons.map((rab) =>{
// create a if statement that sees if the number is divisible by 3
  if(rab.animal == "rabbit"){
// send the return dBy
    return rab
  }
})
// Exercise 7
// Write a for loop to save the names of each character to another array.
var charName = []
  for (i=0; i < toons.length; i++) {
  charName.push(toons[i].name)
}

// Exercise 8
// Use map on the toons array to save a description of each character to another array.
var charType = []
  for (i=0; i < toons.length; i++) {
  charType.push(toons[i].animal)
}
console.log(charName[0] + " is a "+ charType[0]);



// Exercise 9
// Consider this variable:
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
//make a empty array
var wholename = []
for(k = 0; k < people.length; k++){
  wholename[k] = people[k]
  wholename[k].fullName = people[k].firstName + " " + people[k].lastName
}
console.log(wholename)

// Exercise 10
// Refactor the above code to use a map on the people array to achieve the same result.
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
var wholenamemap = people.map((ppl)=>{
  ppl.fullName = (ppl.firstName + " " + ppl.lastName)
  return ppl
})
// Exercise 11
// Consider this function:
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
function addTitle(person){
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.
var titleArray = []
    for (zz=0; zz < people.length; zz++){
        titleArray[zz] = addTitle(people[zz])
}
// Exercise 12
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.
var aTitle = people.map(addTitle)

var bb = people.map(addTitle)
