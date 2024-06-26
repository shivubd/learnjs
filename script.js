/*

$ DATATYPES
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
console.log('CALLING OUT OF SCOPE', example2)

//Below things will throw error, because we are calling out of scope
// console.log('CALLING OUT OF SCOPE',example1)
// console.log('CALLING OUT OF SCOPE',example3)



/*
OPERATORS
operators are used to perform some actions on variable/values
There are different types of JavaScript operators:

1. Arithmetic Operators
    +	Addition
    -	Subtraction
    *	Multiplication
    **	Exponentiation (ES2016)
    /	Division
    %	Modulus (Division Remainder)
    ++	Increment
    --	Decrement
*/
let m = 4
console.log("ARITHEMATIC OPERATOR", 2+3, 3-2, 5*6, 2**3, 10/5, 11%5, ++m , m++, m--, --m);
/*
2. Assignment Operators
    =
    +=, -=, *=, /=, %=
*/
let ex = 10; //used to assign values to varibles
ex+=10
console.log('ASSIGNMENT OPERATOR', ex)
//ex+=10 -> ex = ex + 10
//ex-=10 -> ex = ex - 10
//ex*=10 -> ex = ex * 10
//ex/=10 -> ex = ex / 10
//ex%=10 -> ex = ex % 10
/*
3. Comparison Operators
    ==	equal to (here js will convert type to same type and compares eg. '2'==2)
    ===	equal value and equal type
    !=	not equal (here js will convert type to same type and compares eg. '2'!=2)
    !==	not equal value or not equal type
    >	greater than
    <	less than
    >=	greater than or equal to
    <=	less than or equal to
*/
console.log("COMPARISON OPERATOR", '2'==2, '2'===2, '2'!=2, '2'!==2, 3>2, 2<3, 2>=2, 3<=3 )
/*
4. String Operators
    String comparison - compares the unicode value of 1st character of comparing strings
    String addition - we can concatenate strings using + operator and += assignment operator
    Strings and Numbers - 
        * when we use + operator on string and number , then the number is converted to string and string concatenation is performed
        * when we use - operator on string and number, then the string is converted to number and substraction is performed
*/
console.log('STRING OPERATORS', '20'<'5', 'Hello,'+' '+'World!', '5'+5, 5 - '5')
/*
5. Logical Operators
    &&	logical AND
    ||	logical OR
    !	logical NOT
*/
console.log('LOGICAL OPERATORS', true && false, true || false, !false)
/*
6. Bitwise Operators
    &	AND
    |	OR
    ~	NOT
    ^	XOR
    <<	left shift
    >>	right shift
    >>>	unsigned right shift
7. Ternary Operators
    ? - this checks a condition and returns a value depeding upon whether condition is true or false
*/
console.log('TERENARY OPERATORS', true?'Condition is true':'Condition is false')
/*
8. Type Operators
    typeof	Returns the type of a variable
    instanceof	Returns true if an object is an instance of an object type
*/
let date = new Date()
console.log('TYPE OPERATORS', typeof 'XYZ',date instanceof Date)
/*
OPERATOR PRESEDENCE
operators perfor, multiple operation on given varible by using Operator precedence in which there is priority to each operator
check this for precedence - https://www.w3schools.com/js/js_precedence.asp


STRINGS AND TEMPLATE LITERALS
    we can concatenate strings using + symbol
    but for concatenation of complex strings it is confusing hence we use 
    template literals
*/
const firstname = 'Shivaraj'
const job = 'Developer'
const year = 2000
//String concatenation
let result1 = "I'm "+firstname+', a '+(2024 - year)+' years old '+job+'!'
//String template literals
let result2 = `I'm ${firstname}, a ${2024 - year} years old ${job}!`
console.log('STRING CONCATENATION',result1,'\nSTRING TEMPLATE LITERAL', result2)

/*
IF ELSE STATEMENTS
*/
console.log("IF/ELSE STATEMENTS")
const age = 15
if(age >= 18) {
    console.log('You can now take a driving license 🏍')
} else if(age < 17){
    console.log(`You have not attained the age for driving license, please wait for another ${18 - age} years`)
} else {
    console.log('Wait for just 1 year!')
}

/*
TYPE CONVERSION
    we can change the type of value using methods like Number(), String(),  
    Boolean()
*/
console.log(Number('23'), typeof Number('23'))
console.log(String(56),typeof String(56))
console.log(Number('Jonas'), typeof Number('Jonas'))//this will result in NaN(not a number) which is also a type of number

/*
TYPE COERSION
    the javascript changes the type of value depending upon the operation  
    performed on that value.
*/
console.log('Im '+23+' years old')//here 23 will be converted to string and concatenation is performed
console.log('50'-5)//here 50 is converted to number and substraction is performed
console.log('10'+5+5)//here first it encounters a string and then + so it converts other values to string for concatenation
console.log(10+5+'5') //here first it encounters 10+5 so it will become 15 and then when it encounters '5' it converts 15 to string and concatenates
console.log('10'-'5'-'2'-2+'10')

/*
TRUTHY AND FALSEY VALUES
5 falsey values:
    1. 0
    2. ''
    3. undefined
    4. null
    5. NaN
Rest all are truthy values, empty object is also a truthy value
*/
console.log(Boolean(0),Boolean(''),Boolean(undefined), Boolean(null), Boolean(NaN))
console.log(Boolean(10), Boolean('false'), Boolean({}))
// console.log(typeof String(null))
let height;
if(height) {
    console.log('Defined')
} else {
    console.log('Undefined')
}
/*
EQUALITY OPERATORS == vs ===
    == is loose equality operator, it will check if values are match, does  
    not take into consideration the type of values
    === is equality operator, that will take into consideration the type of  
    values as well
*/
const val = '9'
console.log('Loose equality', val == 9) //here it is type coersion,hence true
console.log('Tight equality', val === 9) //Recommended
console.log('Losse inequality', val != 9)
console.log('Losse inequality', val !== 9)

/*
BOOLEAN LOGIC
    && AND - any one false, equals to false
    || OR - any one true, equals to true
    ! NOT - true <=> false
*/
console.log('AND', true && false)
console.log('OR', true || false)
console.log('NOT', !false)

/*

SWITCH STATEMENT
*/
console.log('Switch statement')
const switchValue = 4
switch(switchValue) {
    case 1: console.log('Sunday')
    break
    case 2: console.log('Monday')
    break
    case 3: console.log('Tuesday')
    break
    case 4: console.log('Wednesday')
    break
    case 5: console.log('Thursday')
    break
    case 6: console.log('Friday')
    break
    case 7: console.log('Saturday')
    break
    default: console.log('Not valid day')
}