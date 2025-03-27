// 1)Task 1: Object Destructuring

const person={
    name:"John Doe",
    age:30,
    address:{
        city:"New york",
        country:"USA"
    },
    hobbies:["Reading","Traveling"]
};

let {name:fullname,age,address:{city}}=person
console.log(fullname,age,city);

let {address:{country="unknown"}}=person
console.log(country)

let {hobbies:[firsthobby]}=person;
console.log(firsthobby)

//Task 2: Array Destructuring

const fruits = ["apple","banana","mango","orange","pineapple"]

let [first,second,...rem]=fruits;

[first,second]=[second,first]

console.log(first,second,rem);


//Task 3: Function with Rest Parameters

function sumnumbers(...sum){
    return sum.reduce((sum,num)=>sum+num);
}
console.log(sumnumbers(1, 2, 3, 4));
console.log(sumnumbers(10, 20, 30));

//Task 4: Merging Objects using Spread Operator

const user = {name:"Alice",age:25}
const job = {title:"Devloper",company:"Techcorp"}

const userprofile = {...user,...job,experince:"2 years"};

console.log(userprofile);

//Task 5: Copy and Modify an Array using Spread Operator

const  numbers = [1,2,3,4,5];
const num = [...numbers];
num[0]=10;
console.log(numbers)
console.log(num)


const numbers1 = [1, 2, 3, 4, 5];
const newNumbers = [0, ...numbers, 6];
console.log(newNumbers);

