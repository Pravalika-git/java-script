//1 
function sayHello()
{
    console.log("Hello world!");
}
sayHello()

//2
function displayWarning()
{
      console.log ("Warning! System Overload!");
}
displayWarning()

//3 
function   printStatus() 
{
    console.log("System Status: Active")
}
printStatus()

//4
function initialize(){
      console.log ("Initialization Complete");
       shutdown ();
}

function shutdown(){
    console.log ("System shutting down");
    }
initialize()

//5
function startProcess(){
      console.log("process Started");
      endProcess();
}
function endProcess()
{
     console.log("process Ended");  
}
startProcess()

 //6
 
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("pravalika");
greetUser("Sandhya");



//7
 function calculateSum(a,b)
 {
    console.log (a+b)
}
 calculateSum(2,3)
calculateSum(4,8)

//8

var n=5
function countDown(){
  for (var i=5;i>=0;i--){
console.log(i)
}
}
countDown()



// 9 
function checkEvenOdd(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkEvenOdd(22);
checkEvenOdd(5);

//10

function beginSession(){
console.log("Session Started.")
endSession();
}
function endSession(){
console.log("Session Ended.")
}
beginSession()







 