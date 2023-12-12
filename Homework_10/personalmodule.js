const os = require("os");

function hello (){
    let now= new Date();
    let time= now.getHours();
    let date = now.getFullYear();
    let message;
 if (time >= 5 && time<11){
   message = " Good morning ";
}
else if (time >= 11 && time<17){
    message = " Good day ";
}
else if (time >= 1 && time<23){
   message = " Good evening ";
}
else {message = " Good night ";}

return (`Date of request: ${now}
<br>${message}, ${os.userInfo().username}!`)
}

module.exports = hello();