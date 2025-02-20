
// Q-1. Definition and Comparison:
// What is an arrow function in JavaScript, and how does its syntax differ from a
// traditional function expression?
// Ans:
// Arrow Function:
// • The Function which does not have function keyword and function name and denoted by => is 
// known as Arrow Function.
// • Arrow Functions are introduced in ES6 to increase the readability of anonymous function.
// • Arrow Functions are shorthand property of anonymous functions.
// Comparison with Traditional Function Expression:
// Traditional Function Expression:
// • In a traditional function expression, the function keyword is used, and the function is more 
// verbose.
// • Syntax:

//  var functionName = function(parameters) {
//  //statements
//  return expression;
//  } 

//  Arrow Function Expression:
// • An arrow function removes the function keyword, uses => (the arrow) between parameters and 
// the body, and allows for more concise code.
// • Syntax:

//  var referenceVariable = (Parameters) => {
//  //Statements
//  return expression;
//  }





//1

function function_name(){
    console.log("hello world")
    }
    function_name()
    var function_name=()=>"hello world"
    console.log(function_name())
    //2
    var add=(a, b)=>a + b
    console.log(add(2,4))
    //3
    var square=n=> n * n;
    console.log(square(4)) 
    //4
    var function_name=a=>a*a

    //5
    //implicit
    var cube=a=>a**3
    console.log(cube(2))

    //explicit
    var cube=a=>{
    return a**3
    }
    console.log(cube(2))
    //6
    var subtract=(a,b)=>a-b
    console.log(subtract(2,3))
    //7
    var message=()=>"hello world!"
    console.log(message())

    var mul=(a,b)=> a*b
console.log(mul(4,5))