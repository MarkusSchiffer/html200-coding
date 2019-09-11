const fName = "Billy";
const lName = "McDonald";
const age = 29;
const min = 16;

if (age >= min) {
  console.log(fName + " " + lName + " has been driving for " + (age - min) + " years.");
} else {
  for (let count = 5; count > 0; count--) {
    console.log(count);
  }
}
