"use strict";
// // колбэк функции
// function lernJs(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log("урок пройден");
// }

// lernJs("Js", done);


// let arr = [1, 3, 5, 7, 9];

// function first(text, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log((i + 1) + " " + "элемент" + " " + arr[i]);
//     }
//     callback();
// }

// function test() {
//     console.log("callback function");
// }

// first("practic", test);

// function summaElemArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const array = [2, 4, 6];
// let res = summaElemArr(array);
// console.log(res);
// res *= 2;
// console.log(res);

// // обьекты

// const options = {
//     name: "text",
//     width: 1024,
//     height: 1024,
//     color: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };

// options.makeTest();
// const {border, bg} = options.color;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["color"]["border"]);
// console.log(options.name);
// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// массивы

const arr = [12, 2, 3, 16, 8];
arr.sort(compaerNum);
console.log(arr);

function compaerNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });


// arr.pop(); //удаляет последний элемент
// arr.push(10); //добавление в конец

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const product = str.split(", "); //получаем из строки массив
// product.sort(); //сортируем
// console.log(product.join('; ')); //переводим массив в строку