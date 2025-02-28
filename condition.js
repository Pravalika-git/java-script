// 1. Find the Larger Number with a Callback
// Instructions:
// Define a function findLarger(num1, num2, callback).
// The callback should return the larger number using only if statements (no logical operators).
// The return value of the callback should be increased by 5 before returning.
// Print the final result.
// Example Input & Expected Output:
// Input: findLarger(12, 20, callback)
// Expected Output: 25
console.log("Hello dev,pravs")
function findLarger(num1, num2, callback){
    return callback(num1,num2)
}

console.log(findLarger(12, 20, (num1,num2)=>{
    if (num1>num2) {
         return  num1 +5
    }
    else{

        return num2+5
    }
}))
// 2. Sum or Difference with a Callback
// Instructions:
// Define a function calculate(num1, num2, callback).
// The callback should return:
// The sum if num1 > num2.
// The difference if num2 > num1.
// 0 if both numbers are equal.
// Multiply the return value by 3 before returning.
// Print the final result.
// Example Input & Expected Output:
// Input: calculate(10, 5, callback)
// Expected Output: 45
function calculate(num1, num2, callback)
{
    console.log(callback(num1,num2))
}
calculate(10, 5, (num1,num2) =>{
    if (num1 > num2){
        return (num1,num2)*2

    }
    if (num2 > num1){
        return (num2,num1)*2

    }
})
// 3. Even or Odd with a Callback
// Instructions:
// Define a function checkEvenOdd(num, callback).
// The callback should return "Even" if num is divisible by 2, otherwise "Odd".
// The function should return "Even Number" or "Odd Number" based on the callback result.
// Use only if statements, no logical operators.
// Example Input & Expected Output:
// Input: checkEvenOdd(8, callback)
// Expected Output: "Even Number"

function checkEvenOdd(num, callback)
{
    if (callback(num) == "Even"){
        return "Even nummber"
    }
    return "Odd number"
 
}

console.log(checkEvenOdd(8,num=>{
    if (num%2 == 0){
        return "Even nummber"
    }
    return "Odd number"

} ))

// 4. Positive, Negative, or Zero with a Callback
// Instructions:
// Define a function checkSign(num, callback).
// The callback should return:
// "Positive" if num > 0.
// "Negative" if num < 0.
// "Zero" if num === 0.
// Append " value" to the callback’s return value.
// Print the final result.
// Example Input & Expected Output:
// Input: checkSign(-10, callback)
// Expected Output: "Negative value"
function checkSign(num, callback)
{
   return callback (num) +"value"

}
console.log(checkSign(-10, num=>{
    if ( num > 0){
      return "Positive"

    }
    if ( num < 0){
        return "Negative"

    }
    if (num ===0){
        return "Zero"
    }

}))

// 5. Multiply by Condition with a Callback
// Instructions:
// Define a function multiplyConditionally(num1, num2, callback).
// The callback should return:
// num1 * num2 if num1 > num2.
// num1 + num2 if num2 > num1.
// num1 if both numbers are equal.
// Multiply the return value by 4 before returning.
// Print the final result.
// Example Input & Expected Output:
// Input: multiplyConditionally(4, 6, callback)
// Expected Output: 40
function multiplyConditionally(num1, num2, callback){
    console.log(callback(num1,num2))
}

multiplyConditionally(4, 6,(num1,num2)=>{
    if(num1 > num2){
        return num1*num2*4
    }
    
    if(num2 > num1){ 
        return  (num1+num2)*4
    }
    return num1*4
    
})










