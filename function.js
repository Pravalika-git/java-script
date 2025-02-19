
// 1
function processNumbers(num1, num2, callback) {
    console.log(num1,num2)
    return callback(num1, num2);
   }

var result = processNumbers(3, 4, function(x, y) {
    console.log(x,y)
    return x + y;
});
console.log("The sum of 3 and 4 is:", result);

// 2
function greet(callback){
    return callback ("alice");
}

var res=greet(function(name){
return "Hello, "+name + "!";
});

console.log(res);


// 3
function calculate(num1,num2,callback){
    return callback(num1,num2)
}
var res=calculate(10,5,function(num1,num2){
    return num2-num1;
    
})
console.log("Difference:", res);

// Asynchrous-- Not waiting
// call back no paraanthsesis()
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcalculator){
    console.log("hello")
}
calculator(1,2,sum)



