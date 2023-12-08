// //__________________________________________Task 1_____________________________________________

// let newWindow = window.open("","","width=300, height=300");
// setTimeout(function(){newWindow.resizeTo(500, 500)}, 2000);
// setTimeout(function(){newWindow.moveTo(200,200)},4000)
// setTimeout(function(){newWindow.close()},6000)


// //__________________________________________Task 2_____________________________________________

// function changeCSS() {
//     let text = document.getElementById("text");
//     text.style.color = "orange";
//     text.style.fontSize = 20;
//     text.style.fontFamily = "Comic Sans MS";
// };


// //__________________________________________Task 3_____________________________________________

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let link = document.getElementById("link");
    
btn1.addEventListener('click', function (){document.body.style.backgroundColor = "blue"});
btn2.addEventListener('dblclick', function (){document.body.style.backgroundColor = "pink"});
btn3.addEventListener('mousedown', function (){document.body.style.backgroundColor = "brown"});
btn3.addEventListener('mouseup', function (){document.body.style.backgroundColor = "white"});
link.addEventListener('mouseover', function (){document.body.style.backgroundColor = "yellow"});
link.addEventListener('mouseout', function (){document.body.style.backgroundColor = "white"});


// //__________________________________________Task 4_____________________________________________

// function deleteSelected() {
//     let list = document.getElementById("list");
//     let selected = list.selectedIndex;
//     if (selected >=0) {
//       list.remove(selected);
//     }
// }
  
 
// //__________________________________________Task 5_____________________________________________

// let live = document.getElementById("live");
// live.addEventListener("click", function (){
//     let msg = document.createElement("p");
//     msg.innerText = "I was clicked!";
//     document.body.appendChild(msg);});
// live.addEventListener("mouseover", function (){
//     let msg = document.createElement("p");
//     msg.innerText = "Mouse is on me!";
//     document.body.appendChild(msg);});
// live.addEventListener("mouseout", function (){
//     let msg = document.createElement("p");
//     msg.innerText = "Mouse is not on me!";
//     document.body.appendChild(msg);});


// //__________________________________________Task 6_____________________________________________

// let currentSize = document.getElementById("currentSize");
// window.addEventListener("resize", function (event){   
//     currentSize.innerText = `Width: ${ window.innerWidth}, Height: ${window.innerHeight}`   
//     document.body.appendChild(currentSize);
//     });


