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

describe("colorsShuffled", () => {
  it("returns a shuffled array with the first color deleted", () => {
    expect(colorsShuffled(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(colorsShuffled(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// Good Failure
// colorsShuffled
// ✕ returns a shuffled array with the first color deleted (1 ms)

// ● colorsShuffled › returns a shuffled array with the first color deleted


// b) Create the function that makes the test pass.

// Psuedo-code
// 1. Create function(colorsShuffled)
// 2. Using the .shift method, remove the first item from each array
// 3. Using a for loop, create function var array1 to store the randomized values of the remaining elements of the array
// 4. Console log the shuffled array

  const colorsShuffled = (array) => {
    array.shift()
    // the for loop
      // start the count at 0, using variable `i` to store it
      // use the length to help dynamically tell the for loop where to stop the count
      // the count will increase by 1 on each iteration
      for(i = 0; i < array.length; i++) {

        // swap values at two different indexes within the array
        // store a random number that will represent an index within the array
        var j = Math.floor(Math.random() * i);
        // store the value at the index represented by number produced from for loop
        var temp = array[i];
        // reassign the value at the i-index with the value at the random j-index
        array[i] = array[j];
        // reassign the value at the random index with what was store in the temp variable
        array[j] = temp;
      }
    console.log(array)
    return array
}


//  I could not get the .shift method to work in this problem, which kept me from getting the second part of the problem.  I could only get it to reverse the order of the elements of the array without removing the first one before reversal. My intent was to use .shift to remove the first element of the array, and then use a for loop to shuffle the remaining elements.
 
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// JEST Test
describe("finalTally", () => {
  it("returns upvotes - downvotes", () => {
    expect(finalTally(votes1)).toEqual(11)
    expect(finalTally(votes2)).toEqual(-31)
  })
})

// Good Failure
  // finalTally
    // ✕ returns upvotes - downvotes (1 ms)

    // ● finalTally › returns upvotes - downvotes
  
// b) Create the function that makes the test pass.

// Psuedo-code
// 1. Create function finalTally
// 2. finalTally takes in an object
// 3. use comparison operator to determine which value is larger
// 4. use addition to obtain finalTally of each constant provided
// 5. Consol.log the results for both of the constants

const finalTally = (x) => {   
  return x.upVotes - x.downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// JEST Test
describe("finalArray", () => {
  it("returns a single array with no duplicates", () => {
    expect(finalArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Good Failure
// finalArray
//     ✕ returns a single array with no duplicates (1 ms)

//   ● finalArray › returns a single array with no duplicates


// b) Create the function that makes the test pass.

// Psuedo-code
// 1. Create a function that takes in two arrays
// 3. combine the arrays of dataArray1 and dataArray2, with the duplicate elements removed

// Array.prototype.unique = function() {
//   var a = this.concat();
//   // First loop takes in the values in dataArray 1
//   for(var i=0; i<a.length; ++i) {
//       // Second loop takes in values from dataArray2 and compares them to dataArray1, splicing the new values into the array a
//       for(var j=i+1; j<a.length; ++j) {
//         // if value in dataArray2 is a duplicate of value from dataArray2, remove the duplicate values
//         if(a[i] === a[j])
//               a.splice(j--, 1);
//       }
//   }

//   return a;
// };
// // Merges both arrays and gets unique items

// const finalArray = (x, y) => {
//   return x.concat(y).unique()
// }

// var dataArray3 = dataArray1.concat(dataArray2).unique(); 
// console.log(dataArray3)

// After completing the assignment, I looked for ways in which to refactor my code.  I could not think of any method that would allow me to do so, but in my research I found the below code snippet that took all of the code and reduced it to one line (the console.log added at the end was to see the output in order to verify the code works.) 

// const result = [...new Set([...dataArray1, ...dataArray2])]
// console.log(result)

const finalArray = (x, y) => {
  return [...new Set([... x, ...y])]
}