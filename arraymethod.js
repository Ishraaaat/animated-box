const array=[1,2,3,4,5]
console.log(array.length)

const array1=[1,2,3,4,5]
const arr=array1.push(6)
console.log(array1.length)


const array2=[1,2,3,4,5]
const arr1=array2.pop(5)
console.log(array2.length)

const array3=[1,2,3,4,5]
console.log(typeof(array.toString()))

const array4=["apple","banana","kiwi"]
const arr2=array4.shift()
console.log(arr2)
console.log(array4)

const array5=["apple","banana","kiwi"]
const arr3=array5.unshift("grapes","pineapple")
console.log(arr3)
console.log(array5)

const fruits = ["apple", "banana", "orange"]
const joinedString = fruits.join(" - ");
console.log(joinedString);

const array6 = [1, 2, 3, 4, 5];
console.log(array.includes(3));
console.log(array.includes(6));

let array7=["apple","banaaa","cherry"]
// console.log(array7.splice(1,2))
// console.log(array7)
console.log(array.splice(1,"mango"))

const array8 = [1, 2, 3, 4, 5];
console.log(array8.indexOf(3)); 
console.log(array8.indexOf(6)); 