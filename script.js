/*

Datatypes in JS
There are 2 types
1. Primitive
2. Object

* Primitive - Number, boolean, string, undefined, null, BigInt, Symbol (ES2015)
* Object - composition of primitive data types
    eg: {
            name: 'Shivu'
            rollno: 20
        }
Javascript is dynamically typed language, the varibles take the type depending
upon the value assigned to it

let x = 10;
let y = 'xyz';
let z = true

above the x is Number, y is string, and z is boolean

And we can assign a value of different type to a varible afterwards

let x = 10;
x = true
x = 'shivu'

above we can see we can assign different types of values


* Undefined - it is type given to a varible which is decalred but is not assigned with any value
* Null - this value represent an empty value

we can use typeof to check datatype of that variable

*/
let x = 10;
let y = 'xyz';
let z = true;
let p;
let q = null;
console.log('TYPES of x, y, z, p, q', typeof x, typeof y, typeof z, typeof p, typeof q)
/*

$ DECLARING A VARIABLE
we can declare a variable using 3 keywords
1. let (es6)
2. const (es6)
3. var (old)

let and const are mainly used and they are newer js, var is not recommended to use

*   The varibles declared with let/var can be changed/reassigned/mutables, whereas variables declared with const are immutable or cannot be changed once assigned with value

*   The variables declared with let/const are blocked scope, only accessible inside that particular block, whereas var is a global scope

*/
let first = 10;
var second = 20;
const third = 30;
first = 20;
second = 30;
// z = 40 //THIS THROWS ERROR, we cannot reassign const variables
console.log("DECLARING", first, second, third)

if(true) {
    let example1 = 'Shivu';
    var example2 = 'Shivaraj';
    const example3 = 'Shiv';
}
console.log('CALLING OUT OF SCOPE',example2)

//Below things will throw error, because we are calling out of scope
// console.log('CALLING OUT OF SCOPE',example1)
// console.log('CALLING OUT OF SCOPE',example3)
