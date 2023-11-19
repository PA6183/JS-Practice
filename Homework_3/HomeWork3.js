// //__________________________________________Task 1_____________________________________________

// // *** "for" loop
// const arr=[2,3,4,5];
// let product=1; 
// for(i=0; i < arr.length; i++){
//   product = product * arr[i];
// }
// console.log(product);

// // "while" loop
// const arr=[2,3,4,5];
// let i=0;
// let product=1; 
// while(i < arr.length)
// { 
//   product = product * arr[i];
//  i++;
// }
// console.log(product);

// //__________________________________________Task 2_____________________________________________

// for(i=0; i <= 15; i++){
//     if (i%2 === 0){
//         console.log(i + " is even");    
//     }
//     else console.log(i + " is odd");
// }
    

// //__________________________________________Task 3_____________________________________________

// function randArray(k) {
//     k = +prompt ("Please enter desired number of random numbers that you want to get");
//     const arr = new Array();
//     for (i=0; i<k; i++){
//     min = 0;
//     max = 500;
//     let randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     arr[i]=randNumber;
//    }
//    console.log(arr);
// }
// randArray();


// //__________________________________________Task 4_____________________________________________

// function raiseToDegree(a, b) {
//         a = +prompt ("Please enter an integer value for a");
//         b = +prompt ("Please enter an integer value for b");
//        console.log(a**b);
//    }
// raiseToDegree();


// //__________________________________________Task 5_____________________________________________

// //=== Solution 1 ===
// function findMin() {
//            let  minValue=arguments[0];
//         for (i=0; i <= arguments.length; i++)
//             {
//                       if (minValue>arguments[i])
//                 {
//                     minValue=arguments[i];
//                 }
//                 else {minValue=minValue;                }
//            }
//            console.log(minValue);
// }
//     findMin(5,5, 5, -584101,-25,-8,9,10)

// //=== Solution 2 ===
// function findMin() {
//        console.log(Math.min(...arguments));
// }
// findMin(5,1,25,8,-9,10)


// //__________________________________________Task 6_____________________________________________

// function findUnique(arr)
// {
//        const unique = [];
//     for (let i of arr)
//    {if (!unique.includes(i))
//         {
//      unique.push(i);
//          }
//         }
  
// if (arr.length !== unique.length)
// {console.log("False"); }
// else {console.log("True")}
// }

// findUnique([-2,2,15,4,9]);
// findUnique([-2,2,15,-2,4,9]);


// //__________________________________________Task 7_____________________________________________

// function lastElements(arr, a)
// {
//      newArr = [];
// if (a !== null && a !== undefined && a <= arr.length)
// {
// newArr = arr.splice(arr.length-a, a); 
// console.log(`Last element(s) [ ${newArr} ]`);
// }
// else if(a === null || a === undefined)
// {
// console.log(`Last element(s) ${arr[arr.length-1]}`);
// }
// else {console.log(`Last element(s) [ ${arr} ]`);}
// }
// lastElements([56,-8,5,9,2,-4,3]  );
// lastElements([56,-8,5,9,2,-4,3], 10);
// lastElements([56,-8,5,9,2,-4,3], 3)


// //__________________________________________Task 8_____________________________________________

//     function titleCase(sentence) 
//         {
//         wordsArr = sentence.split(" ");
       
//     //This function takes each word of the phrase -> splits to letters -> uppercase the 1st letter 
//     // -> combines letters back into word        
//         function convertToUpper(value) {
//                 const lettersArr  = value.split("");
//                 lettersArr[0] = lettersArr[0].toUpperCase();
//                 let upperCaseWords = lettersArr.join("");
//                 return upperCaseWords
//     }
//         finalArr = wordsArr.map(convertToUpper);// Creates new array from converted words
//         result = finalArr.join(" ");
//         console.log(result);
// }
    
//     titleCase("i love java script")







