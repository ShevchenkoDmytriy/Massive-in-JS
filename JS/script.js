// var array = createRandomArray(10);
// function createRandomArray(length) {
//   var array = [];
//   for (var i = 0; i < length; i++) {
//     array.push(Math.floor(Math.random() * 100)); 
//   }
//   return array;
// }
// function printArray(array) {
//   document.write(array+"<br>");
// }
// function printEvenElements(array) {
//   var evenElements = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenElements.push(array[i]);
//     }
//   }
//   document.write(evenElements+"<br>");
// }
// function sumArrayElements(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// function findMaxElement(array) {
//   var max = array[0];
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// function addElementAtIndex(array, index, element) {
//   array.splice(index, 0, element);
// }
// function removeElementAtIndex(array, index) {
//   array.splice(index, 1);
// }
// printArray(array);
// printEvenElements(array);
// var sum = sumArrayElements(array);
// document.write('Сума елементів масиву: ' + sum+"<br>");
// var maxElement = findMaxElement(array);
// document.write('Максимальний елемент масиву: ' + maxElement+"<br>");
// addElementAtIndex(array, 5, 99);
// printArray(array);
// removeElementAtIndex(array, 2);
// printArray(array);

// //////////////////////////////

// var array2 = createRandomArray(5);
// function createRandomArray(length) {
//   var array = [];
//   for (var i = 0; i < length; i++) {
//     array.push(Math.floor(Math.random() * 100)); 
//   }
//   return array;
// }
// function mergeArrays(array, array2) {
//   var mergedArray = array.concat(array2);
//   return Array.from(new Set(mergedArray));
// }
// function findCommonElements(array, array2) {
//   var commonElements = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array2.includes(array[i]) && !commonElements.includes(array[i])) {
//       commonElements.push(array[i]);
//     }
//   }
//   return commonElements;
// }
// function findMissingElements(array, array2) {
//   var missingElements = [];
//   for (var i = 0; i < array.length; i++) {
//     if (!array2.includes(array[i]) && !missingElements.includes(array[i])) {
//       missingElements.push(array[i]);
//     }
//   }
//   return missingElements;
// }
// var array2 = createRandomArray(5);
// document.write('Масив 1:'+ array+"<br>");
// document.write('Масив 2:'+ array2+"<br>");
// var mergedArray = mergeArrays(array, array2);
// document.write('Об\'єднання масивів без повторень:'+ mergedArray+"<br>");
// var commonElements = findCommonElements(array, array2);
// document.write('Спільні елементи масивів без повторень:'+ commonElements+"<br>");
// var missingElements = findMissingElements(array+ array2);
// document.write('Елементи першого масиву, яких немає у другому масиві:'+ missingElements+"<br>");

// //////////////////////////////

var fruits = ["apple", "banana", "orange", "kiwi", "mango", "pear"];
function printFruits() {
  document.write("<ul>");
  for (var i = 0; i < fruits.length; i++) {
    document.write("<li>" + fruits[i] + "</li>");
  }
  document.write("</ul>");
}

function searchFruit(fruitName) {
  var lowerCaseFruitName = fruitName.toLowerCase();
  for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase() === lowerCaseFruitName) {
      return i; 
    }
  }
  return -1; 
}
printFruits();
var fruitName = prompt("Введіть назву фрукта:");
var fruitIndex = searchFruit(fruitName);
if (fruitIndex !== -1) {
  document.write("Фрукт знайдено на позиції " + fruitIndex);
} else {
  document.write("Фрукт не знайдено");
}