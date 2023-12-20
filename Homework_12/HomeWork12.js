// //__________________________________________Task 1_____________________________________________

// function checkFirstLetter(string){
//     let re = /^[A-Z]/;
//     if (re.test(string) === true){
//         return `String "${string}" starts from uppercase letter` 
//     }
//     else{return `String "${string}" does not start from uppercase letter` }
// }
    
// console.log(checkFirstLetter('Upper case'));
// console.log(checkFirstLetter('lower case')); 
// console.log(checkFirstLetter('aNother string')); 
    

// //__________________________________________Task 2_____________________________________________

// function checkEmailAddressValidity(string){
// //     let re = /^\S+@[A-Za-z0-9-.]+\.[A-Za-z]+(\s+)?$/g;
//     let re = /^[\w\.!#\$%&'\*\+-\/=\?\^_`\{\|\}~]+@[A-Za-z0-9-.]+\.[A-Za-z]+(\s+)?$/g;
// // 
//     return re.test(string);
// }
// console.log(checkEmailAddressValidity("1254@485")); //false
// console.log(checkEmailAddressValidity("1254@48.5")); //false
// console.log(checkEmailAddressValidity("4k.c")); //false
// console.log(checkEmailAddressValidity("12@54@485.c")); //false
// console.log(checkEmailAddressValidity("1254@485.c")); //true
// console.log(checkEmailAddressValidity("4@85.c")); //true
// console.log(checkEmailAddressValidity("4@k.c")); //true
// console.log(checkEmailAddressValidity("!#$%&'*+-/=?^_`{|}~4@k.k.c")); //true
// console.log(checkEmailAddressValidity("Qmail2@gmail.com ")) //true

// //__________________________________________Task 3_____________________________________________

// let re = /d([b]+)(d?)/gi;
// let string = "cdbBdbsbz";
// result = re.exec(string);
// console.log(result.slice(0, result.length));  //[" dbBd ", " bB ", " d "]


// //__________________________________________Task 4_____________________________________________
// //OPTIONAL
// let re = /(\S+)\s+(\S+)/;
// let string = "Java Script";
// console.log(string.replace(re, "$2, $1"))

// //__________________________________________Task 5_____________________________________________

// function checkCardNumber(cardNumber){
//     let re = /\d{4}-\d{4}-\d{4}-\d{4}/;
//         if (re.test(cardNumber) === true){
//             return `Card number "${cardNumber}" is valid` 
//         }
//         else{ return(`Card number "${cardNumber}" is NOT valid`)}
// }
// console.log(checkCardNumber("1234-587-5245-4567"));// not valid
// console.log(checkCardNumber("1234058752454567"));// not valid
// console.log(checkCardNumber("1234-5887-5245-4658"));// valid

// //__________________________________________Task 6_____________________________________________

// function validateEmailAddress(string){

//     let re = /^[A-Za-z0-9]+\w*-?\w*@[A-Za-z0-9-.]+\.[A-Za-z]+(\s+)?$/g;
// // 
//     if (re.test(string) === true){
//     console.log("Email is correct.")
//     }
//     else{console.log("Email is not corrcet!")}
// }
// validateEmailAddress('my_mail@gmail.com'); //Email is corrcet.
// validateEmailAddress('#my_mail@gmail.com'); //Email is not corrcet!
// validateEmailAddress('my_ma--il@gmail.com'); //Email is not corrcet!
// validateEmailAddress('my_ma-il@gmail.com'); //Email is corrcet.


// //__________________________________________Task 7_____________________________________________
// //OPTIONAL
// function validateLogin(string){
//     let re1 = /^[A-Za-z][A-Za-z0-9.]{1,9}$/g; //Added "." character" into the regular expression since the 2nd part of the task 7 says that the function should take floating numbers as well, meaning that "." character should be included along with letters and numbers.
//     let re2 = /\d+\.*\d*/g;
//     // if (re1.test(string) === true){
//     // console.log(re1.test(string))
//     // }
//     // else{console.log(re1.test(string))}
//     console.log(re1.test(string));
//     console.log(string.match(re2));
// }
// validateLogin('ee1.1ret3'); //true 1.1, 3        
// validateLogin('ee1*1ret3'); //false 1 , 1 , 3  
