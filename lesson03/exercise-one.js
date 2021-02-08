//Lesson-03, Regular Challenge 1

//Create an array, with at least 5 strings.
const fruit = ['apples', 'oranges', 'grapes', 'cherries', 'kiwi'];

//Add another element to the array. 
fruit.push('lemon');
console.log(fruit);
fruit.pop(3);
console.log(fruit);

//Remove the third element.
const fruit = ['apples', 'oranges', 'grapes', 'cherries', 'kiwi'];
fruit.push('lemon');
console.log(fruit);
fruit.splice(2, 1);
console.log(fruit);

//Create a string from the elements and comma separate them.
const fruit = ['apples', 'oranges', 'grapes', 'cherries', 'kiwi'];

let newFruitList = fruit.join(', ');
console.log(newFruitList);
