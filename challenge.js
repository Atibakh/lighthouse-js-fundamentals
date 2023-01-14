//challenge 2 final position

const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  const destination = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      destination[1] += 1;
    } else if (move === "south") {
      destination[1] -= 1;
    } else if (move === "west") {
      destination[0] -= 1;
    } else if (move === "east") {
      destination[0] += 1;
    }
  }
  return destination;
};

console.log(finalPosition(moves));


//challenge 3 age calculator

function ageCalculator (name,birthYear, currentYear){
  const age = currentYear - birthYear;
  return `${name} is ${age} years old.`
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

//challenge 4 how Many Hundreds

function howManyHundreds(numOfBottles){
  const numContainer = Math.trunc(numOfBottles / 100)
  return numContainer
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

//challenge 5 Area Calculator

function calculateRectangleArea(length, width){
  if ((length < 0) || (width < 0)) return;
    const rectangle= length * width;
  return rectangle;

}
function calculateTriangleArea(base, height){
  if ((base < 0) || (height < 0)) return;
const triangle = base * height / 2;
return triangle

}
function calculateCircleArea(radius){
  if (radius < 0) return;
  const circle = Math.PI * Math.pow(radius, 2);
  return circle
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

