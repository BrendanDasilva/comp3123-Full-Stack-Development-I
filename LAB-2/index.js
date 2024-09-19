// Exercise 1: Rewrite the following code block using ES6 syntax

/*
function gretter(myArray, counter) {
  var greenText = "Hello";

  for (var index = 0; index < myArray.length; index++) {
    console.log(greenText + myArray[index]);
  }
}
  */
console.log("EXERCISE 1: ");

const gretter = (myArray, counter) => {
  const greenText = "Hello";

  for (let index = 0; index < myArray.length; index++) {
    console.log(`${greenText} ${myArray[index]}`);
  }
};

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

// Exercise 2: Using destructuring assignment syntax and the spread operator, write a function that capitalizes the first letter of a string
console.log("\nEXERCISE 2: ");

const capitalize = (str) => {
  const [first, ...rest] = str;
  return `${first.toUpperCase()}${rest.join("")}`;
};

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3: Using array.proto.map create a function to use the capitalize method in Exercise 2 to upper case the first character of each color in the following array...
console.log("\nEXERCISE 3: ");

const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map((color) => capitalize(color));

console.log(capitalizedColors);

// Exercise 4: Using array.proto.filter create a function that will filter out all the values of the array that are less than 20
console.log("\nEXERCISE 4: ");

var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter((value) => value >= 20);

console.log(filterLessThan20);

// Exercise 5: Using array.proto.reduce create a function to calculate the sum and product of a given array
console.log("\nEXERCISE 5: ");

var array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, value) => sum + value, 0);

const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6: Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. The parameters for the Car class is the model and yeah. The parameters for the subclass is the model, year and balance. --- Use the super keyword in the Sedan subclass to set the model and name in base Car constructor
console.log("\nEXERCISE 6: ");

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.model} has a balance of $${this.balance}`;
  }
}

const car2 = new Car("MINI Cooper", 1965);
console.log(car2.details());

const sedan = new Sedan("Nissan GT-R", 2022, 55000);
console.log(sedan.info());
