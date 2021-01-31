//Lesson-03, Regular Challenge 1

//Create an array, with at least 5 strings.
fruit = ['apples', 'oranges', 'grapes', 'cherries', 'kiwi'];

//Add another element to the array. 
fruit.push('lemon');
console.log(fruit);
fruit.pop(3);
console.log(fruit);

//Remove the third element.
fruit = ['apples', 'oranges', 'grapes', 'cherries', 'kiwi'];
fruit.push('lemon');
console.log(fruit);
fruit.splice(2, 1);
console.log(fruit);

//Create a string from the elements and comma separate them.
fruit = ['apples', 'oranges', 'grapes', 'cherries', 'kiwi'];

let newFruitList = fruit.join(', ');
console.log(newFruitList);
