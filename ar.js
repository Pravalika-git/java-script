// // // console.log("Hello world")
// // // // var add = (val,calback) => Callback (val+10);

// // // function add(val,callback){
// // //      callback (val+10);
// // // }

// // // add(20,(addRes)=>{
// // // //    console.log(addRes )
// // // });
// // // function print(num){
// // //     console.log(num)
// // // }
// // // print(10+10)

// // // function sub (val,callback){
// // //   var res = val-10
// // //   callback(res);
// // // }
// // // sub(30,(SubRes)=>{
// // //     console.log(SubRes);

// // // })

// // // function add(val,callback){
// // //     var res = val+40;
// // //     callback(res,true);
// // // }

// // // function sub(val,callback){
// // //     var res = val- 20;
// // //     callback(res,true);
// // // }

// // // function mul(val,callback){
// // //     var res = val*2;
// // //     callback(res,true);
// // // }

// // // function div(val,callback){
// // //     var res = val/5;
// // //     callback(res,true);
// // // }

// // // add(20,(addres)=>{

// // // sub(addres,(subres,)=>{

    
// // //      mul(subres,(mulres)=>{
       
// // //         div(mulres,(divres)=>{
// // //         console.log(divres)

// // // })
// // // })
// // //  })
// // //  })


// function add(val, callback) {
//     var res = val + 15;
//     callback(res, true);
// }
// function sub(val, callback) {
//     var res = val - 10;
//     callback(res, true);
// }
// function mul(val, callback) {
//     var res = val * 2;
//     callback(res, true);
// }
// function div(val, callback) {
//     var res = val / 5;
//     callback(res, true);
// }
// add(20, (addRes, status) => {
//     if (status == true) {
//         sub(addRes, (subRes, status) => {
//             if (status == true) {
//                 mul(subRes, (mulRes, status) => {
//                     if (status == true) {
//                         div(mulRes, (divRes, status) => {
//                             if (status == true) {
//                                 console.log(`Final Result : ${divRes}`);
//                             }
//                             else {
//                                 console.error("Division Failed.");
//                             }
//                         })
//                     } else {
//                         console.error("Multiplication Failed.")
//                     }
//                 })
//             }
//             else {
//                 console.error("Substraction Failed");
//             }
//         })
//     } else {
//         console.error("Addition Failed...")
//     }
// })



// // // 1112221

// // console.log("hello")

// // function add(val, callback) {
// //     var res = val + 15;
// //     callback(res, true);
// // }

// // function sub(val, callback) {
// //     var res = val - 10;
// //     callback(res, true);
// // }

// // function mul(val, callback) {
// //     var res = val * 2;
// //     callback(res, true);
// // }
// // function div(val, callback) {
// //     var res = val / 5;
// //     callback(res, true);
// // }

// // add(20, (addres,status)=>{
// //     if (status==true){  
// //         sub(addres,(subres,status)=>{
// //             if (status==true){  
// //                 mul(subres,(mulres,status)=>{

// //                     if (status==true){
                        
                
// //                     }
// //                      else{
// //                         console.error("mul failed")
// //                      }
// //                      else {
// //                         console.error("sub failed")       
// //                   }
// //                     })
// //           }

          
// //       }

// //       else {
// //           console.error("add failed")       
// //     }
       


// // })
// // div(mulres,(divres,status)=>{
// //     if (status==true){
// //         console.log(`final result: ${divres}`)

// //     }
// //     else{
// //         console.error("div failed")
// //     }

// // })       


// // // sub(addres,(subres,status) =>{
// // //      if (status==true){  
// // //     } 

    
// // //        } else {
// // //              console.error("add failed")
// // //         })  

// // //       else {
// // //         console.error("add failed")
// // //       })
// // //     })  


// //     //     if (status==true){  
// //     //     }

// //     //     else{
// //     //         console.error("add failed")
// //     //     }
// //     // })

// // //         mul(subres,(mulres,status)=>{
// // //             if (status==true){  
// // //             }

// // //             div(mulres,(divres,status)=>{
// // //                 if (status==true){  
// // //                 }
// // //             console.log(`final result: ${divres}`)

          
// // //     else {
// // //         console.error("add failed");
// // //     }

// // //     els{
// // //         console.error("sub failed")
// // //     }

// // //     esle:{
// // //         console.error("mul failed")
// // //     }
// // //     esle:{
// // //         console.error("div failed")
// // //     }
    

// // //  })
// // // })
// // // })
// // // })



// // // sub(40,(SubRes)=>{
// // //     console.log(SubRes)
// // //  })

// // //  mul(30,(MulRes)=>{
// // //     console.log(MulRes)
// // //  })
 
// // //  div(15,(SubRes)=>{
// // //     console.log(SubRes)
// // //  })

// // // function mul(val,callback){
// // //     var res=val*2;
// // //     console.log(res)
// // // }
// // // mul(20,(MulRes)=>{
// // //     console.log(MulRes)
// // // })
// console.log("hello")

// function add(val, callback) {
//     var res = val + 15;
//     callback(res, true);
// }
// function sub(val, callback) {
//     var res = val - 10;
//     callback(res, true);
// }
// function mul(val, callback) {
//     var res = val * 2;
//     callback(res, true);
// }
// function div(val, callback) {
//     var res = val / 5;
//     callback(res, true);
// }

// add(20,(addres,status)=>{
//     if (status == true){
//      sub(addres,(subres,status) =>{
//         if (status == true){
//             mul(subres,(mulres,status)=>{
//                 if (status==true){
//                     div(mulres,(divres,status)=>{
//                         if (status == true){
//                         console.log(`Final result${divres}`);
//                         }
//                         else{
//                             console.error("div failed")

//                         }
//                     })

//                 }
//                 else{
//                     console.error("mul failed")
//                 }
//             })

//         }
//         else{
//           console.error("sub failed")  
//         }
//         })
//     }
    
//     else{
//        console.error("add fail") 
//     }

// })

function add(val,callback){
    var res=val+20
    callback(res,true)
}
function sub(val,callback){
    var res=val-40
    callback(res,true)

}
function mul(val,callback){
    var res=val*5
    callback(res,true)

}
function div(val,callback){
    var res=val/5
    callback(res,true)

}
add(50,(addres,status)=>{
    if (status == true){
sub(addres,(subres,status)=>{
    if (status == true){
     mul(subres,(mulres,status)=>{
        if (status){
            div(mulres,(divres,status)=>{
                if (status == true){

                    console.log(`Final result : ${divres}`)
                }
                else{
                   console.eroor("Div failed") 
                }
            })
        }
        else{
          print("No mul")  
        }
     })

    }
    else{
        console.error("No sub")

    }
})

    }
    else{
        console.error("No Add")
    }
})

let age = 21;
let message=age >=18  ? "you are eligible" : "you are not eligible"
console.log(message);
// 1.  Bus Fare Discount   
// - A bus company offers a discount for students under 18 and 
// senior citizens above 60.
//  Write a condition to determine if
//  a person gets a discount based on their age.  
//  var  year=18
//  var  years=60
//  var total_year

//  if  (year>18){
// console.log(total_year = "Bus fare discount")
//  }

//  else if (years<=60)
//  {
// console.log(total_years = "Bus fare discount");




function Discount(age){
    if (age <18 || age >60){
        return "eliglible"
    }
    else{
        return "not done"
    }
}   

console.log(Discount(15));
console.log(Discount(30));
console.log(Discount(50)); 
console.log(Discount(62));


// - An online store offers  free shipping  if the total purchase amount is  $50 or more . 
// Write a condition to check if the user qualifies for free shipping.  
var shop = 30;
var amount= shop<50 ? "user qualifies for free shipping." : "user not for free shipping."
console.log(amount)

// method --2 
function free_shipping(amount){
    if (amount>50){
        return "true"
    }
    else{
        return "false"
    }

}

console.log(free_shipping(45))
console.log(free_shipping(60))
console.log(free_shipping(70))

// 3.  Library Late Fee Calculation   
//    - A library charges a fine based on how late a book is returned:  
//      -  1–5 days:  $1 per day  
//      -  6–10 days:  $2 per day  
//      -  More than 10 days:  $5 per day  
//      -  Returned on time:  No fine  
//    - Write a condition to determine the fine amount.  

function late_fess(charges){
    if (charges <5){
        return "$1 per day  "
    }else if(charges <8){
        return " $2 per day  "

     }
     else if (charges <10){
        return " $5 per day  "

     }
     else{
        return "No fine"
     }
 
}
console.log(late_fess(8));
console.log(late_fess(5));
console.log(late_fess(6));
console.log(late_fess(4));
console.log(late_fess(11));

// 4.  Traffic Signal System   
//    - A smart traffic system should display the correct signal based on the traffic light color
//     (Red = "Stop", Yellow = "Slow Down", Green = "Go").
//      Write a condition to determine the action.  


function getTrafficSignal(timeInSeconds) {
    // Green: 0-20 seconds
    if (timeInSeconds >= 0 && timeInSeconds <= 20) {
        return "Green light";
    } 
    // Yellow: 21-25 seconds
    else if (timeInSeconds >= 21 && timeInSeconds <= 25) {
        return "Yellow light";
    } 
    // Red: 26-30 seconds
    else if (timeInSeconds >= 26 && timeInSeconds <= 30) {
        return "Red light";
    } 
    // Any other time is invalid in this example
    else {
        return "Invalid time range";
    }
}

// Example usage:
console.log(getTrafficSignal(10)); // Green light
console.log(getTrafficSignal(23)); // Yellow light
console.log(getTrafficSignal(28)); // Red light
console.log(getTrafficSignal(35)); // Invalid time range

function MovieTicketPricing (age)  {
  if (age <12 ){
    return "$5  "
}
else if (age >=12 && age <=60){
       return "$10 "
}
else if (age >60){
    return "$7"
}
}

console.log(MovieTicketPricing(10))
console.log(MovieTicketPricing(70))
console.log(MovieTicketPricing(18))
console.log(MovieTicketPricing(40))

// 7.  User Login System   
//    - A system checks a username and password. 
//    If both match, it logs the user in. If either is incorrect,
//     it shows an error message. 
//     Write a condition for this scenario.  
function login(username,userpassword){
      var StoreUserName ="myusername"
       var Storepassword ="mypassword"
      

if (username === StoreUserName &&
     userpassword === Storepassword ){
    return "Logs the user in"

     }
     else{
        return "Error message"
     }
    }
console.log(login("myusername","mypassword"))
console.log(login("myusername","true"))
console.log(login("myusername","false"))
console.log(login("myusername","pass"))

// 8.  Weather-Based Outfit Suggestion   
//    - A weather app suggests clothing based on temperature:  
//      -  Below 10°C:  "Wear a heavy jacket"  
//      -  10°C to 20°C:  "Wear a light jacket"  
//      -  Above 20°C:  "Wear a t-shirt"  
//    - Write a condition to display the correct suggestion.  
function  WeatherBasedOutfit(temprature){
    if (temprature<10){
        return "Wear a heavy jacket"  

    } 
     else if (temprature >=10 && temprature <=20){
        return "Wear  a light jacket"  

    } 

    
    else{
        return  "Wear a t-shirt"  
    }

}
console.log(WeatherBasedOutfit(8))
console.log(WeatherBasedOutfit(15))
console.log(WeatherBasedOutfit(25))
console.log(WeatherBasedOutfit(120))

console.log(WeatherBasedOutfit(19))

// 9.  Restaurant Order Discount   
//    - A restaurant offers:  
//      -  10% discount for orders above $100   
//      -  5% discount for orders between $50-$100   
//      -  No discount for orders below $50   
//    - Write a condition to calculate the final bill.  
function    Restaurant(orders){
    if (orders <100 ){
        return "10% discount"
}
     else if (orders <=50 && orders >=100){ 
    return "5% discount"

}
   else{
      return " No Discount : orders below $50   "
   }
}
console.log(Restaurant(60))
console.log(Restaurant(12))
console.log(Restaurant(120))
console.log(Restaurant(20))

// 10.  Online Exam Eligibility   
//    - A student can attempt an online exam  only if :  
//      - They have  registered   
//      - They have  paid the fee   
//    - Write a condition to check if the student can take the exam.  

function exam( marks,Eligibility ){
    var  attempt = "registered"
    var attempt1 =  "paid_the_fees"


if (marks === attempt && 
    Eligibility === attempt1 ){
    return "They have regestried"

}

else{
    return "No regestier"
}
}
console .log(exam("registered" , "paid_the_fees"))
console .log(exam( "registered"))
console .log(exam( "registered", "paid "))







    
// 8.  Weather-Based Outfit Suggestion   
//    - A weather app suggests clothing based on temperature:  
//      -  Below 10°C:  "Wear a heavy jacket"  
//      -  10°C to 20°C:  "Wear a light jacket"  
//      -  Above 20°C:  "Wear a t-shirt"






// 5.  Student Exam Result   
//    - A student’s grade is based on their marks:  
//      -  90+  = A  
//      -  80-89  = B  
//      -  70-79  = C   >79 <70
//      -  60-69  = D >69 <60  
//      -  Below 60  = Fail  
//    - Write a condition to determine the student’s grade. 
 var marks =78
 if (marks>90){
    console.log("A grade")
 

 }else if (marks  >80 ){
    console.log("B grade");
 } 
else if (marks >70 ){
    console.log("C grade")
}
else if (marks >60 ){
    console.log("D grade")
}


else{
    console.log("fail")

}




// 6.  Movie Ticket Pricing   
//    - A movie theater charges:  
//      -  Children (below 12 years):  $5  
//      -  Adults (12 to 60 years):  $10  
//      -  Seniors (above 60 years):  $7  
//    - Write a condition to determine the ticket price based on age.  

// var ticket = 5;
// if (ticket == 5 )



 





  





 
 

