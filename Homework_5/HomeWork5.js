// //__________________________________________Task 1_____________________________________________

// function propsCount(currentObject){
//       return Object.keys(currentObject).length;
// }
// let address = {
//     postal_code: 33165,
//     country: "USA",
//     state: "Filadelphia",
//     city: "Miami",
//     district: "Aventura",
//     street: "15th",
//     house: 10,
//     room: ""
// };

// console.log(propsCount(address))


// //__________________________________________Task 2_____________________________________________

// let np = {
//     country: "Ukraine",
//     region: "Dnipro",
//     city: "Dnipro",
//     street: "Haharina",
//     branch: 15
// }

// function showProps() {
//     return `Properties list: ${Object.keys(np)} 
//     Values list: ${Object.values(np)}`
// }

// console.log(showProps(np));


// //__________________________________________Task 3_______________________________________________________

// class Person{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//         showFullName () {
//             return this.name + " " + this.surname;
//         }
    // }

// class Student extends Person{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName (middleName){
//         return this.surname + " " + this.name + " " + middleName;
//     }
//     showCourse () {
//             let currentYear = new Date().getFullYear();
//             let currentCourse = currentYear - this.year + 1;
//             if(currentCourse <= 0){
//                 return "It looks like you're just about to become a student, but not yet :)"}
//             else if(currentCourse >=1 && currentCourse < 6 ){
//                 return currentCourse}
//             else{return "It looks like you're at least a graduate student already :)"}
//     }
// }

// let stud1 = new Student("Petro", " Petrenko ", 2015);
// console.log(stud1.showFullName(" Petrovych ")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6


// //__________________________________________Task 4_______________________________________________________

// class Worker{
//     constructor(fullName, dayRate, workingDays){
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//     }

//     showSalary(){
//         let salary = this.dayRate * this.workingDays;
//        return salary;
//     }
   
//     #experience = 1.2;
//     showSalaryWithExperience(){
//         let recalculatedSalary = this.showSalary() * this.#experience;
//         return recalculatedSalary;
//     }
   
//     get experience(){ return this.#experience;}
//     set experience(newExp){ this.#experience = newExp;}
//     }

// let worker1 = new Worker("John Johnson", 20, 23);
// let worker2 = new Worker("Tom Thomson", 48, 22);
// let worker3 = new Worker("Andy Anderson", 29, 23);

// let workers = [worker1, worker2, worker3];
// workers.forEach(worker => {
//     console.log(worker.fullName);
//     console.log(`${worker.fullName} salary: ${worker.showSalary()}`);
//     console.log("Experience: " + worker.experience);
//     console.log(`${worker.fullName} recalculated salary: ${worker.showSalaryWithExperience()}`);
//     worker.experience = 1.5;
//     console.log("New experience: " + worker.experience);
//     console.log(`${worker.fullName} salary with new experience: ${worker.showSalaryWithExperience()}`); 
//     console.log("\n");
// });

// function sortBySalary(){
//     return workers.sort((a,b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
// }
// let sortedWorkers = sortBySalary();
// sortedWorkers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));  

