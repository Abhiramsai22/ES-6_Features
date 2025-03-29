// To import named exports in our File have to use {}

// import {add,sub,a,obj} from "./exportmodules.js";

// console.log(add(30,20));
// console.log(sub(20,10));

// console.log(a+1);
// console.log(obj);

// import { addtwonumbers as sum } from "./exportmodules.js";
// console.log(sum(10,25));

// import findreallenghtofstring from "./exportmodules.js";
// console.log(findreallenghtofstring("  sai   "))

// import * as allmodules from "./exportmodules.js"
// console.log(allmodules);
// console.log(allmodules.a);
// console.log(allmodules.default);
// allmodules.add();
// allmodules.sub();


// import ("./exportmodules.js")
// .then(response=>
// {
//     for(let key in response){
//         console.log(response[key])
//     }
// })
// .catch(err=>console.log(err));

// let module = await import("./exportmodules")
// console.log(module);

let form = document.querySelector("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let usermessage = document.getElementById("usermessage");

form.addEventListener("submit",(event)=>{
    let name = username.value.trim();
    let pwd = password.value.trim();

    if(name == '' || pwd==''){
        event.preventDefault();
    }
    if(name=='')
    {
        username.className="error";
    }
    else{
        username.className="";
    }
    if(pwd==''){
        password.className="error";
    }
    else{
        password.className="";
    }
})







