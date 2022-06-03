var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()

fruit.pop()

fruit.unshift("watermealon")

var orangeIndex = fruit.indexOf("orange")

var two =[1]
var joinedtwo = two.join('')
console.log(joinedtwo)
fruit.push(joinedtwo)

var lengeth = vegetables.length

var three =[3]
var joinedthree = three.join('')
console.log(joinedthree)
vegetables.push(joinedthree)
food = fruit.concat(vegetables);

console.log(food)

//food.splice(4, 6)
//food.pop(2, 4)

food.splice(4, 2,)

console.log(food)


food.reverse()

console.log(food)

let foodString = food.toString();


let text = food.join();


console.log(vegetables)
console.log(fruit)
console.log(orangeIndex)
console.log(lengeth)
console.log(food)
console.log(text)
console.log()
console.log()
console.log()
// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array. 




// 10. Turn the array into a string and return it.

// If you've done everything correctly, the last step should print the following string to the console: