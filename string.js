// 1. Create an Array
// Create an array with five numbers and print it.
arr =[1,2,3,4,5]
console.log(arr)
// 2. Access an Element
// Given an array, print the third element.
arr =[6,7,8,9,10]
console.log(arr[3])

// 3. Change an Element
// Modify the second element of an array to a new value.
arr =[10,20,30,40,50]
arr[2]=70
console.log(arr)

// 4. Find Length
// Write a function that returns the length of an array.

function length(arr){
    return arr.length
}
console.log(length([1,2,3,4,5]))

// 5. Add an Element (Push)
// Add a new element to the end of an array.
arr =[10,20,30,40,50]
arr.push(60)
console.log(arr)


// 6. Remove the Last Element (Pop)
// Remove the last element from an array and print the updated array.
var arr =[6,7,5,4,3]
arr.pop()
console.log(arr)

// 7. Loop Through an Array
// Use a loop to print each element of an array.

arr=[1,2,3,4,5]
for (var i =0;i<=arr.length;i++)
console.log(arr)
// 8. Check if an Element Exists
// Write a function to check if a given value exists in an array.

function checkValue(arr,value){
    return value in arr
}
console.log(checkValue([1,2,3,4,5],3))
console.log(checkValue([1,2,3,4,5],6))

// 9. Copy an Array
// Create a copy of an array and print it.
array = [1, 2, 3, 4, 5]
console.log("Original Array",array)
copied_array = array.slice()
console.log("Copied Array:", copied_array)

// Another method
copy_arr = [...array]
console.log(copy_arr)

// 0. Convert Array to String
// Convert an array to a string using .join() and print the result.
arr=[1,2,3,4]
console.log(arr.join(""))
