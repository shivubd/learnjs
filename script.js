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

we can use typeof to check datatype of that variable

*/
let x = 10;
let y = 'xyz';
let z = true;
console.log('TYPES of x, y, z', typeof x, typeof y, typeof z)
/*
*/