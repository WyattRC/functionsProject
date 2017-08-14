// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
    if(x > y){
      console.log(x + ' ' + 'is larger')
    } else {
      console.log(y + ' ' + 'is larger')
    }
}
max(8, 9)

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
   if (x > y && x > z){
     console.log(x + ' ' + 'is larger')
   } else if(y > x && y > z){
     console.log(y + ' ' + 'is larger')
   } else if(z > x && z > y){
     console.log(z + ' ' + 'is larger')
   } else {
     console.log('They are all equal')
   }
}

maxOfThree(6, 3, 9)


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

// let list = ['a', 'e', 'i', 'o', 'u']

//    for(let i = 0; i < list.length; i++)
//      if(char === list[i]){
//
//        console.log('true')
//      } else {
//
//        console.log('false')
//      }
// }
function isVowel(char){
  if(char == 'a' || char == 'i' || char =='o' || char == 'u' || char =='e'){
    return true
  } else {
    return false
  }
}
isVowel('i')

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x, y){
  console.log(x + y)
}
sum(9, 8)

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x, y, z){
  let together = (x * y * z)
  let final = together / 3
  console.log(final)
}
 avg(5, 5, 5)
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(x){
  let length = x.length
  console.log(length)
}
 getLength('aswd')

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x, y){
  if(x > y){
    return true
  } else {
    return false
  }
}

greaterThan(5, 1)

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(x){
  console.log('Hello,' + ' '+ x + '!')
}
greet('Name')

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
 function madlib(w, x, y){
   console.log(w + ' ' + 'brown' + ' ' + x + ' ' + 'jumps over the'+ ' ' + y)
 }
 madlib('quick', 'fox', 'fence')
