// Преобразование массива чисел в символы ( 1 задание )
// var ArrowFunc = function(arr) {
//     return arr.map( (num) => String.fromCharCode(num) ).join(''); //Complete this function
// }
// ТЕСТ:
//     Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')

// Задание 2
// Соединить два массива, сортировать, удалить повторяющиеся цифры
//
// const arr1 = [1, 3, 5, 7, 9, 11, 12];
// const arr2 = [1, 2, 3, 4, 5, 10, 12];
// function mergeArrays(arr1, arr2) {
//     let arr = arr1.concat(arr2);
//     function compareNumeric(a, b) {
//         if (a > b) return 1;
//         if (a === b) return 0;
//         if (a < b) return -1;
//     }
//     arr.sort(compareNumeric);
//     let newArr = [...new Set(arr)];
//     return newArr
// }

// Задание 3 Сложение по циферно
//16+18=214

// function add(num1, num2) {
//     let num1array = (""+num1).split("").map(Number)
//     let num2array = (""+num2).split("").map(Number)
//     const firstArr = num1array.reverse();
//     console.log(firstArr)
//     const secondArr = num2array.reverse();
//     console.log(secondArr)
//     const result = [];
//     let length;
//
//     if (firstArr.length >= secondArr.length) {
//         length = firstArr.length;
//     } else {
//         length = secondArr.length;
//     }
//     for (let i = 0; i < length; i++) {
//         const a = firstArr[i] === undefined ? 0 : firstArr[i];
//         const b = secondArr[i] === undefined ? 0 : secondArr[i];
//         result.push(a + b);
//     }
//     let user = result.reverse()
//     let userResult = user.toString();
//     userResult = userResult.split(',').join('')
//     return(+userResult);
// }

// Задание 4
// Добавить в массив обьектов свойство usersAnswer: null
//
// questions.forEach(function (element) {
//     element.usersAnswer = null;
// });