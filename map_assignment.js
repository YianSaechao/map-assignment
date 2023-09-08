//1. Double the Numbers Given an array of numbers, transform each number by doubling its value IN A NEW ARRAY.*/

const numbers = [2, 4, 6, 8];

const doubleNumbers = numbers.map((array) => {
    return array * 2;
});
console.log(doubleNumbers) */


/*2. Name Greetings You have an array of names. Transform each name into a greeting message IN A NEW ARRAY.*/

const names = ["Alice", "Bob", "Charlie"]; // Expected output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
 

const newGreetingArray = names.map((stringNames) =>{
    return "Hello, " + stringNames + "!";
})
console.log(newGreetingArray); 

//3. Object Property Extraction Given an array of objects where each object has a firstName and lastName, extract just the lastName and return a new array with those.*/

const people = [
   {firstName: "John", lastName: "Doe"},
   {firstName: "Anna", lastName: "Smith"},
   {firstName: "Peter", lastName: "Jones"}
];

const newPeopleArray = people.map((name) =>{
    return name.lastName;
}) 

console.log(newPeopleArray);


// 4.String Lengths Transform an array of strings into an array of numbers representing the length of each string.*/

const words = ["apple", "banana", "cherry"];

const newWords = words.map((fruit) =>{
    return fruit.length;
  }
);

console.log(newWords);