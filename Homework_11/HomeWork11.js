// //__________________________________________Task 1_____________________________________________

function vote(){
    let date = new Date();
    fetch ("http://127.0.0.1:5500/Homework_11/hw11.html")
        .then((result) => document.querySelector("#btn").textContent = `Your vote is accepted: ${date}`)
}

// //__________________________________________Task 2_____________________________________________

let authors = ["David Flanagan", "Kyle Simpson", "John Resig", "Jeremy Keith"];
function showAuthors(){
    let body = document.querySelector("body");  
    let ul = document.createElement("ul"); 
        fetch ("http://127.0.0.1:5500/Homework_11/hw11.html")
        .then((result) => 
            authors.forEach(el => {  
            let li = document.createElement ("li");   
            let author = document.createTextNode(`${authors[el]}`); 
            li.appendChild(author);
            ul.appendChild(li);
            body.appendChild(ul);
            })   
        )      
}





