"use strict";

// функции
// function showFirstMessage () {
//     console.log("Hello world!");
// }

// showFirstMessage();

// function showFirstMessage (text) {
//     console.log(text);
// }

// showFirstMessage("Hello world!");

// function calc (a, b) {
//     return (a + b);
// }
// console.log(calc(1, 5));
// console.log(calc(2, 3));
// console.log(calc(8, 2));

// function ret() {
//     let num = 50;

//     return num;
// }

// const enotherNum = ret();
// console.log(enotherNum);

// const loger = function() {
//     console.log("Hello");
// };
// loger();

// стрелочная функция

// const calc = (a, b) => a + b;

// методы и свойства строк и чисел

// const str = "text";
// const arr = [1, 2, 3];

// console.log(str.length);
// console.log(arr.length);

// const str = "text";

// console.log(str[2]);
// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));
// console.log(fruit.slice(5));
// console.log(fruit.slice(5, 10));
// console.log(fruit.substring(5, 10));
// console.log(fruit.substr(5, 3));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// практика ч3 используем функции
let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы просмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы просмотрели?", "");
    }
}
start();

const personalMuvieDb = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastSeeMuvie = prompt("Последний из просмотренных фильмов?", ""),
            ocenka = prompt("На сколько ецените его?", "");
        if (lastSeeMuvie != null && ocenka != null &&
            lastSeeMuvie != "" && ocenka != "" && lastSeeMuvie.length < 50) {
            personalMuvieDb.muvies[lastSeeMuvie] = ocenka;
            console.log("done!");
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMuvieDb.count < 10) {
        console.log("просотрено довольно мало фильмов");
    } else if (personalMuvieDb.count >= 10 && personalMuvieDb.count < 30) {
        console.log("вы класический зритель");
    } else if (personalMuvieDb.count >= 30) {
        console.log("вы киноман!");
    } else {
        console.log("произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDb() {
    if (personalMuvieDb.private == false) {
        console.log(personalMuvieDb);
    }
}
showMyDb();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMuvieDb.genres[i - 1] = genre;
        personalMuvieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

// console.log(personalMuvieDb);