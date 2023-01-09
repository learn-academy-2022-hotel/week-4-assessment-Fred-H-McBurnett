// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// JEST TEST
// Describe funtion("colorsShuffled"), () => {
//  it ([returns a shuffled array with the first coler deleted] from colors1)
// it ([returns a shuffled array with the first color deleted from colors2])
// expected output: ["yellow", "blue", "pink", "green"]
// expected output: ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//})

// b) Create the function that makes the test pass.

// Psuedo-code
// 1. Create function(colorsShuffled)
// 2. Using the .shift method, remove the first item from each array
// 3. Using a for loop, create function var array1 to store the randomized values of the remaining elements of the array
// 4. Console log the shuffled array

  const colorsShuffled = (array) => {
  let array1 = array.shift(0)
  // for (arrayX = 0; i < arrayX.length; i++) {
  //   var j = Math.floor(Math.random() * (i - 1));
  //   var temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // }
}
console.log(colors1)

//  I could not get the .shift method to work in this problem, which kept me from getting the second part of the problem.  I could only get it to reverse the order of the elements of the array without removing the first one before reversal. My intent was to use .shift to remove the first element of the array, and then use a for loop to shuffle the remaining elements.
 
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// JEST Test
// describe finalTally
// it takes in the two values of votes1, determines which is the larger value, and performs subtraction to get the finalTally
// expected output: 11
// it takes in the values of votes 2, compares the two values, and perform addition to get the finalTally
// expected output: -31

// b) Create the function that makes the test pass.

// Psuedo-code
// 1. Create function finalTally
// 2. finalTally takes the two values of each constant
// 3. use comparison operator to determine which value is larger
// 4. use addition to obtain finalTally of each constant provided
// 5. Consol.log the results for both of the constants

const finalTally = (upVotes, downVotes) => {
  if (upVotes > downVotes) {
    return(upVotes - downVotes)
    } else {return(-(downVotes) + upVotes)
    }
  }

  console.log(finalTally(13, 2))
  console.log(finalTally(2, 33))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// describe combined_Array
// it(takes in the values from dataArray1), storing them into a new array
// it (takes in the values from dataArray2 and compares them to the values already in the new array, removing any duplicated values)
// Expectede output : ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Psuedo-code
// 1. Create a function that takes in the elements of dataArray1 and loops through those elements to get the initial value of array3
// 2. Using a nested loop, take in values of dataArray2 and loops through those elements, splicing the non-duplicated elements into array3
// 3. Console logs the combined arrays of dataArray1 and dataArray2, with the duplicate elements removed

Array.prototype.unique = function() {
  var a = this.concat();
  // First loop takes in the values in dataArray 1
  for(var i=0; i<a.length; ++i) {
      // Second loop takes in values from dataArray2 and compares them to dataArray1, splicing the new values into the array a
      for(var j=i+1; j<a.length; ++j) {
        // if value in dataArray2 is a duplicate of value from dataArray2, remove the duplicate values
        if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }

  return a;
};
// Merges both arrays and gets unique items
var dataArray3 = dataArray1.concat(dataArray2).unique(); 
console.log(dataArray3)

// After completing the assignment, I looked for ways in which to refactor my code.  I could not think of any method that would allow me to do so, but in my research I found the below code snippet that took all of the code and reduced it to one line (the console.log added at the end was to see the output in order to verify the code works.) 

// const result = [...new Set([...dataArray1, ...dataArray2])]
// console.log(result)