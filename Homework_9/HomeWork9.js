// //__________________________________________Task 1_____________________________________________

// function getPromise(message, delay){
//     message = prompt ("Please enter your message");
//     delay = prompt ("Please enter integer value for the delay in ms");
    
//     return new Promise ((resolve, reject) =>{
//         resolve(setTimeout(function(){console.log(message)}, delay));
// })
// }
//     getPromise().then((result) => console.log(result)); 


// //__________________________________________Task 2_____________________________________________

// function calcArrProduct ( arr ){
//     let result = 1;
//     return new Promise ((resolve, reject) =>{
//         for(let value of arr){
//             if(typeof value === "number"){
//                 result = result * value;} 
//             else{result = "Error! Incorrect array!"
//                      break;}
//         }
//         resolve (result);   
//     })
// }

// calcArrProduct([3,4,5]).then((result) => console.log(result))
// calcArrProduct ( [5,"user2", 7, 12]).then((result) => console.log(result))


   