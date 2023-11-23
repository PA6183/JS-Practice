// //__________________________________________Task 1_____________________________________________

// function calcRectangleArea(width, height)
//     {    
//             width = prompt("Please enter the width of the rectangle");
//             height = prompt("Please enter the height of the rectangle")
                              
//                 if(height > 0 && width > 0 ){
//                     area = width*height
//                     return area;}
//                 else{
//                     throw new Error("Entered data is not valid");}
//     }

// try {result = calcRectangleArea();
//     console.log(`Rectangle area is ${result}`);
//     }
// catch(exception)
//     {
//       console.log(`${exception.name}: ${exception.message}`);
//     }

//__________________________________________Task 2_____________________________________________

// function checkAge()
//     {    
//     age = prompt("Please enter you age");
    
//         if(age == 0){
//             throw new Error("The field cannot be empty or have 0 value!");}
//         else if(age < 14){
//             throw new Error("You're too young for this movie \u{1F609}");}
//         else if(age >= 14){
//             alert("Cool! Let's watch the movie \u{1F37F}");}
//         else {
//             throw new Error("The age must be a numeric value");}
//     }

// try {
//     checkAge();
//     }
// catch(exception)
//     {
//       console.log(`${exception.name}: ${exception.message}`);
//     }


// //__________________________________________Task 3_______________________________________________________

// class MonthException extends Error {
// 	constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }	
// }

// function showMonthName(month){
//     monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     month = +prompt("Please enter month number");
//         try {
//             if(Number.isInteger(month) && month > 0 && month<=12){
//                 return mn = monthName[month-1];}            
//             else{throw new MonthException("Incorrect month number:");}
//             }
//         catch(exception)
//             {
//                 return(exception)
//             }
// }
 
// console.log(showMonthName());


// //__________________________________________Task 4_______________________________________________________

// function showUsers(ids){
//     validIds = [];
//     ids.forEach(function showUser(id){
//         try {
//             if (id>=0){
//                validId={ID:id};
//                validIds.push(validId);}
//             else{throw new Error(`ID must not be negative: ${id}`);}       
//             }
//         catch(exception)
//             {
//             console.log(`${exception.name}: ${exception.message}`);
//             }          
//     });
//     console.log(validIds);
//   }
 
// showUsers([2,15,3,-8,6,2,-2])
