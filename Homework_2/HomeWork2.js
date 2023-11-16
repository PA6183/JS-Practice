// //Task 1

// let x = 1;
// let y = 2;
// let res1 =  "" + x + y // Add the code, it is necessary to use the variables x and y
// console.log(res1); // "12"
// console.log( typeof res1); // "string"

// let res2 = Boolean(x) + String(y)  // Add code is required use variables x and y
// console.log(res2); // "true2"
// console.log( typeof res2); // "string"

// let res3 = Boolean (x+y)// Add code is required use variables x and y
// console.log(res3); // true
// console.log( typeof res3); // " boolean "

// let res4 = Number(Boolean(x) + String(y)) // Add code is required use variables x and y
// console.log(res4); // NaN
// console.log( typeof res4); // "number"



// //Task 2

// //Sub-task a)
// let m = prompt("Please enter a number");
// console.log(`You entered following value: ${m}`);
// if (m%2 == 0 && m > 0 ){
//     console.log("Variable m is even and is positive");
// }
// else {
//     console.log("Variable m does not meet the condition 'even and positive'");
// }


// // Sub-task b)
// let a = prompt("Please enter a number");
// console.log(`You entered following value: ${a}`);
// if (a%7 == 0 ){
//     console.log("Variable a is multiple of 7");
// }
// else {
//     console.log("Variable a is NOT multiple of 7");
// }

// //Task 3
// // Create an empty array;
// // 1) Write any number in the first element of the array;
// // 2) Write any line in the second element of the array;
// // 3) Write any logical value in the third element of the array;
// // 4) Write the value null in the fourth element of the array ;
// // 5) Enter the number of elements stored in the array on the screen;
// // 6) Ask the user to enter any value and write this value in the fifth element of the array;
// // 7) Display the fifth array element on the screen.
// // 8) Delete the 1st element of the array and display the array on the screen.

//  const array=[];
// array[0]=25;
// array[1]="Just a line of text";
// array[2]= true;
// array[3]=null;
// console.log("Number of elements in the array is " + array.length);
// const m = prompt("Please enter any value");
// array[4]=m;
// console.log(`The 5th element of the array is "${array[4]}"`);
// array.shift();
// console.log(array);

// //Task 4
// // Write a program that combines all existing elements of the array into a ribbon and separates them with the symbol “*”.

// const cities = ["Dnipro", "Chernivtsi", "Katowice", "Athens", 'Kyiv'];
//   console.log(cities.join(' * '));


// //Task 5
// let isAdult=+prompt("Please enter your age");
// if (isAdult>=18){
// console.log("You have reached the age of majority");
// }
// else {console.log("You are still too young");}

// //Task 6
// let a=+prompt("Please enter the length of the 1st side");
// let b=+prompt("Please enter the length of the 2nd side");
// let c=+prompt("Please enter the length of the 3rd side");


// //Sub-task 1: Calculate the area of the triangle
// let p=(a+b+c)/2; //This is an auxiliary variable for the following math formula:
// let s=(p*(p-a)*(p-b)*(p-c))**(1/2);
// console.log(+s.toFixed(3)); //Rounded result

// //Sub-task 2: Determine wether the triangle is rectangular

// //my comment - Creating a new DESC ordered array:
// let numbers = [a,b,c];
// numbers = numbers.sort(function(l,m) {
//     return l - m;
//   })
// console.log(numbers);

// //my comment - Assigning new variables for convenience:
// g = numbers[2];
// k1 = numbers[1];
// k2 = numbers[0];
// console.log(g, k1, k2);

// if (g > k1 && g > k2)
// {
// sqr_g = g **2;
// sum_sqr_ks = k1**2 + k2**2;
// if (sqr_g === sum_sqr_ks)
// {
//   console.log("The triangle is rectangular");
// }
// else console.log("The triangle is NOT rectangular");
// }
// else console.log("The triangle is NOT rectangular");

// // Determine whether values entered by user are correct
// if (a>0 && b>0 && c>0)
// //my comment - Creating a new DESC ordered array:
// {numbers = [a,b,c];
// numbers = numbers.sort(function(l,m) {
//     return l - m;
//   })
// console.log(numbers); //outputting the entered values for convenience
// max = numbers[2];
// n1 = numbers[1];
// n2 = numbers[0];
// if (max<n1+n2)
// {
//   console.log('Entered values are valid');
// }
//   else console.log('Invalid data');
// }
// else console.log('Invalid data');


// //Task 7

// //1st way - using "if"
// var now= new Date();
// var time= now.getHours();
// console.log(time);
//  if (time >= 5 && time<11){
//     console.log(" Good morning ");
// }
// else if (time >= 11 && time<17){
//     console.log(" Good day ");
// }
// else if (time >= 1 && time<23){
//     console.log(" Good evening ");
// }
// else {console.log(" Good night ");}

// //2nd way - using "switch"
// var now= new Date();
// var time= now.getHours();
// switch (true) {
//     case time>=5 && time<11:
//         console.log(" Good morning ");
//         break;
//     case time >= 11 && time<17:
//         console.log(" Good day ");
//     case time >= 1 && time<23:
//         console.log(" Good evening ");
//     default: console.log(" Good night ");
//         break;
// }

