// //__________________________________________Task 1_____________________________________________

// //----------> 1st way
    // let test = document.getElementById("test");
    // test.innerHTML = "Last";
 
// //----------> 2nd way
    // let div = document.getElementsByTagName("div");
    // div[0].innerHTML = "Last";
   

// //__________________________________________Task 2_____________________________________________

// let image = document.querySelector(".image");
// image.src = "cat.jpg";
// alert (image.outerHTML);


// //__________________________________________Task 3_____________________________________________

// let p = [...document.querySelectorAll("#text > p")];
// for (let el of p){
//     console.log(`Selector text ${p.indexOf(el)}: ${el.innerHTML}`);
// }

// //__________________________________________Task 4_____________________________________________

// //------------------>1st way
// let list = document.querySelector("#list")
// alert(`${list.firstElementChild.innerHTML}, ${list.lastElementChild.innerHTML}, ${list.firstElementChild.nextElementSibling.innerHTML}, ${list.lastElementChild.previousElementSibling.innerHTML}, ${list.lastElementChild.previousElementSibling.previousElementSibling.innerHTML}`)

// //------------------>2nd way
// const list = [...document.querySelectorAll("#list > li")];
// alert (`${list[0].innerHTML}, ${list[4].innerHTML}, ${list[1].innerHTML}, ${list[3].innerHTML}, ${list[2].innerHTML}`)
  
 
// //__________________________________________Task 5_____________________________________________

// let header = document.querySelector("h1");
// header.style.backgroundColor = "lightgreen";

// let paragraphs = [...document.querySelectorAll("div > p")];
// paragraphs[0].style.fontWeight = "900";
// paragraphs[1].style.color = "red";
// paragraphs[2].style.textDecoration = "underline";
// paragraphs[3].style.fontStyle = "italic";

// let myList = document.querySelector("#myList");
// let myListArr = [...document.querySelectorAll("#myList > li")];
// let newArr = myListArr.map((el) => el = el.innerText)
// myList.innerHTML = newArr.join("");

// let span = document.querySelector("span");
// span.style.display = "none";

// //__________________________________________Task 6_____________________________________________

// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// //-------------->6.1
// let value1 = prompt("Please enter value 1");
// let value2 = prompt("Please enter value 2");
// input1.value = value1;
// input2.value = value2;
// //-------------->6.2
// input1.value = value2;
// input2.value = value1;


// //__________________________________________Task 7_____________________________________________

// let body = document.querySelector("body");
// let main = document.createElement("main");
// main.className = " mainClass check item ";
// body.appendChild(main);

// let div = document.createElement("div");
// div.id = "myDiv";
// main.appendChild(div);

// let p = document.createElement("p");
// let text = document.createTextNode("First paragraph");
// p.appendChild(text);
// div.appendChild(p);

// console.log(main);