//JAVASCRIPT ARRAY METHODS
let arr = [1, 2, 3]

//length
//Returns the length of array
console.log('\nlength')
console.log(arr.length)

//isArray
//Returns true if given parameter is array or else false
console.log('\nisArray')
console.log(Array.isArray(arr))
console.log(Array.isArray("Hello"))

//entries
//returns the Iterator object for the array (key/value pairs)
let fruits = ['Banana', 'Apple', 'Mango', 'Pineapple']
console.log('\nentries')
for (let fruit of fruits.entries()) {
    console.log(fruit)
}

//push
//Adds the given element at end of the array (MODIFIES THE ARRAY)
console.log('\npush')
console.log(arr)
arr.push(4)
console.log(arr)

//pop
//Removes the element at the end of the array (MODIFIES THE ARRAY)
console.log('\npop')
console.log(arr.pop())
console.log(arr)

//unshift
//Adds the given element at start of the array (MODIFIES THE ARRAY)
console.log('\nunshift')
console.log(arr)
arr.unshift(0)
console.log(arr)

//shift
//Removes the first element of the array (MODIFIES THE ARRAY)
console.log('\nshift')
console.log(arr.shift())
console.log(arr)

//concat
//concat is used to concatenate the array with given array in param    (RETURNS NEW CONCATENATED ARRAY, DOES NOT MODIFY THE EXISTING)
console.log('\nconcat')
console.log(arr)
console.log(arr.concat([4,5]))

//fill
//replaces all the elements of array with given element               (MODIFIES THE EXISTING ARRAY)
console.log('\nfill')
console.log(arr)
arr.fill(10)
console.log(arr)
arr = [1, 2, 3]

//map
//map takes the callback function as paramter, and the function is executed on all the array elements, and is stored in a array                       (RETURNS A NEW ARRAY NOT MODIFIES THE EXISTING ARRAY)
console.log('\nmap')
console.log(arr)
console.log(arr.map((e) => e*e))

//filter
//filter takes the callback function / condition as parameter, and the returns the array with the elements for which the condition is true and does not include elements where condition is false                           (RETURNS A NEW ARRAY NOT MODIFIES THE EXISTING ARRAY)
console.log('\nfilter')
console.log(arr)
console.log(arr.filter((e) => { return e%2 !== 0 }))

//every
//every takes the callback function / condition as parameter, and returns true if all the elements in array pass the condition, and if any element does not pass condition it returns false                                    (DOES NOT MODIFY EXISTING ARRAY)
console.log('\nevery')
console.log(arr)
console.log(arr.every((e) => e%1 === 0))
console.log(arr.every((e) => e%2 === 0))

//some
//some takes the callback function / condition as parameter, and returns true if any one of the elements in array pass the condition, and if all the elements does not pass condition it returns false                      (DOES NOT MODIFY EXISTING ARRAY)
console.log('\nsome')
console.log(arr)
console.log(arr.some((e) => e%2 === 0))
console.log(arr.some((e) => e%5 === 0))

//reduce
//reduce takes the callback function & initial value. The callback function is with 4 parameters - accumulatedValue, currentElement, currentIndex, arr. performs the function on each element of the array and returns the single value i.e. accumulatedValue. (DOES NOT MODIFY EXISTING ARRAY)
console.log('\nreduce')
console.log(arr)
console.log(arr.reduce((res, ele) => (ele%2 !== 0) ? res + ele : res, 0))
//Here only elements not divisible by 2 are added.
//Here 0 is the initial value. SUM = 0 + 1 + 3 = 4

//at
//take the index as parameter and returns the element at given index, if index is not valid returns undefined
console.log('\nat')
console.log(arr)
console.log(arr.at(1))
console.log(arr.at(10))

//indexOf
//takes the elements as parameter and returns the index of that element in array, if element is not present in array it returns -1
console.log('\nindexOf')
console.log(arr)
console.log(arr.indexOf(3))
console.log(arr.indexOf(100))

//includes
//returns true if given element is present in array or else returns false
console.log('\nincludes')
console.log(arr)
console.log(arr.includes(3))
console.log(arr.includes(0))

//reverse / toReversed
//reverses the order of elements 
//reverse (MODIFIES THE EXISTING ARRAY)
//toReversed (RETURNS NEW REVERSED ARRAY, INSTEAD OF MODIFYING)
console.log('\nreverse')
console.log(arr)
// console.log(arr.toReversed()) //ES2023 FEATURE
arr.reverse()
console.log(arr)

//sort / toSorted
//sort the array elements in ascending order
//sort() (MODIFIES THE EXISTING ARRAY)
//toSorted() (RETURNS NEW SORTED ARRAY, INSTEAD OF MODIFYING)
console.log('\nsort')
console.log(arr)
// console.log(arr.toSorted()) //ES2023 FEATURE
arr.sort()
console.log(arr)