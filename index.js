// let arr = [undefined,2,3,4,5,6,7];
// // let [a,b,c,d,e,f,g]=arr;
// // console.log(a,b,c,d,e,f,g);

// // let [a,b,,c,,d]=arr
// // console.log(a,b,c,d)

// let [a=0,...b]=arr
// // console.log(a)
// // console.log(b)

// console.log(b.reduce((sum,next)=>sum+next)) // sum of list b

// let obj={
//     "empname":"Abhiram",
//     "empdesg":"CEO",
//     "empsal":"1 cr pm"
// }
// let {empname,empdesg,empsal}=obj;

// console.log(empname,empdesg,empsal)

// let {empname:employeename,empdesg:employedesgnation,empsal:employeesalary}=obj;
// console.log(employeename,employedesgnation,employeesalary);


let obj ={
    "empname":"Abhiram",
    "empdesg":"CEO",
    "empsalary":"1cr pm",
    "empaddress":{
        "city":"hyderabad",
        "state":"TG",
        "street":"KPHB"
    }
}

let {empname,empdesg,empsalary,empaddress:{city,state,street}}=obj;
console.log(empname,empdesg,empsalary,city,state,street);


