"use strict";
// колбэк функции
function lernJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("урок пройден");
}

lernJs("Js", done);

let arr = [1, 3, 5, 7, 9];

function first(text, callback) {
    for (let i = 0; i < arr.length; i++) {
        console.log((i + 1) + " " + "элемент" + " " + arr[i]);
    }
    callback();
}

function test() {
    console.log("callback function");
}

first("practic", test);