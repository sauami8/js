
// 1. var: defined variable like (var name="raj"); 2. const: is used to make constant variable (const name="Raj"); 
//3. let: is scope specific, this can not be accessed outside scope (let name="Raj";)

//in below example var name will alert by outside if alert

var name="Var Name"
const age1=10

if (true) 
{
    let name="Raj";
    alert(name)
}
alert(name);   
alert(age1)

//Template string -------Combine multiple variables

let fname = "Raj";
let sname ="Mishra";

let age = prompt("Enter the Age ");

let result = 'First method ' + fname +' ' + sname +' age is '+ age
alert(result)

let result1 = `Second Method to join variable ${fname} ${sname} ${age}  Years old`
alert(result1)

//--function 
//parameterized Function

function welcome(usr="Anonyms",msg="How are you ")
{
    p_msg = `Hello ${usr} ${msg}`
    alert(p_msg)
}

usr = prompt("What is your user: ")
//msg = prompt("Type message here")

//invoke function with first parameter and 2nd will get value from default
welcome(usr)
//-------------

//----Arrow function example
//function example 2 with arrow function

// function greetings(message)
// {
//     return  alert(`${message} everyone`);
// }

//let is one liner function you can define and return by using the => keuy


//let function1 = (var1, var2) => alert(`${var1} ${var2}`);

let greetings = (message) => alert(`${message} everyone, this is arrow function example`);
//note in case one parameter you don't need (), this option to support multiple function parameter

greetings("Goood to see you ");

function info(i="Portal will be down for maintenance")
{
    return alert(`${i}, plan your activity accordingly`)
}

info()


//------------function practice
//function with if condition

let check_blog = (title, body) =>
{
    if (!title)
    {
        throw new Error("Title is required");
    }
    if (!body)
    {
        throw new Error ("body is Required for blog");
    }
    alert (`Blog title is ${title} and Body is ${body}`)
}

check_blog("Micro Blogging", "About programming languages");

// check_blog()

let _hello = () => alert("Hello World! ")

_hello()


// object 

let ob =
{
    n: [1,2,3,4,5,6],
    c: ['a','b','c','d','e','f','g']

}
alert(`${ob.c} ${ob.n}`)
//-------