"Use strict";

// function showMessage() {
//     let message = "Привет, я JavaScript!"; // локальная переменная

//     document.write( message );
//   }

//   showMessage(); // Привет, я JavaScript!

// function my_function(n) {
//     if (n==0) {
//         return 0 ; 
//     }else if (n==1) {
//         return 1; 
//     }else{
//         return my_function(n-1) + " " + n;

//     }

// }
// document.write(my_function(3));

// обьекты
// const obj = {
//     name: "Dima",
//     age: 39,
//     isMaried: true
// };
// console.log(obj["name"]);
// // массив
// let arr = ["aple.jpg", "nut.gif", 6, "lemon.bmp", {}, []];
// console.log(arr[1]);

// взаимодействие с пользователем
// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// document.write(answers);

// интерполяция в js
// const user = "lesha";
// console.log("Привет" + " " + user);

// const names = "Dima";
// console.log(`Привет, ${names}`);


// операторы
// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// консольное приложение практика
// const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
// const personalMuvieDb = {
//     count: numberOfFilms,
//     muvies: {},
//     actors: {},
//     genres: [],
//     private: false
// };
// const lastSeeMuvie = prompt("Последний из просмотренных фильмов?", ""),
//     ocenka = prompt("На сколько ецените его?", ""),
//     lastSeeMuvie2 = prompt("Последний из просмотренных фильмов?", ""),
//     ocenka2 = prompt("На сколько ецените его?", "");

// personalMuvieDb.muvies[lastSeeMuvie] = ocenka;
// personalMuvieDb.muvies[lastSeeMuvie2] = ocenka2;
// console.log(personalMuvieDb);

// условные операторы
// тернарный оператор
// const num = 150;
// (num === 50) ? console.log("ok!") : console.log("error!");

// const num = 50;
// switch (num) {
//     case 49:
//         console.log("неверно");
//         break;
//     case 100:
//         console.log("неверно");
//         break;
//     case 50:
//         console.log("dthyj");
//         break;
//     default:
//         console.log("не в этот раз");
// }


// циклы
// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num++;
// } 
// while (num < 55);

// let num = 50;
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// практика 2

// const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
// const personalMuvieDb = {
//     count: numberOfFilms,
//     muvies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// for (let i = 0; i < 2; i++) {
//     const lastSeeMuvie = prompt("Последний из просмотренных фильмов?", ""),
//         ocenka = prompt("На сколько ецените его?", "");
//     if (lastSeeMuvie != null && ocenka != null &&
//         lastSeeMuvie != "" && ocenka != "" && lastSeeMuvie.length < 50) {
//         personalMuvieDb.muvies[lastSeeMuvie] = ocenka;
//         console.log("done!");
//     } else {
//         console.log("error");
//         i--;
//     }
// }
// if (personalMuvieDb.count < 10) {
//     console.log("просотрено довольно мало фильмов");
// } else if (personalMuvieDb.count >= 10 && personalMuvieDb.count < 30) {
//     console.log("вы класический зритель");
// } else if (personalMuvieDb.count >= 30) {
//     console.log("вы киноман!");
// } else {
//     console.log("произошла ошибка");
// }
// console.log(personalMuvieDb);

// const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
// const personalMuvieDb = {
//     count: numberOfFilms,
//     muvies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// let i = 0;
// while (i < 2) {
//     const lastSeeMuvie = prompt("Последний из просмотренных фильмов?", ""),
//         ocenka = prompt("На сколько ецените его?", "");
//     if (lastSeeMuvie != null && ocenka != null &&
//         lastSeeMuvie != "" && ocenka != "" && lastSeeMuvie.length < 50) {
//         personalMuvieDb.muvies[lastSeeMuvie] = ocenka;
//         console.log("done!");        
//     } else {
//         console.log("error");
//         i--;
//     }
//     i++;
// }
// if (personalMuvieDb.count < 10) {
//     console.log("просотрено довольно мало фильмов");
// } else if (personalMuvieDb.count >= 10 && personalMuvieDb.count < 30) {
//     console.log("вы класический зритель");
// } else if (personalMuvieDb.count >= 30) {
//     console.log("вы киноман!");
// } else {
//     console.log("произошла ошибка");
// }
// console.log(personalMuvieDb);

const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
const personalMuvieDb = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    private: false
};

let i = 0;
do {
    const lastSeeMuvie = prompt("Последний из просмотренных фильмов?", ""),
        ocenka = prompt("На сколько ецените его?", "");
    i++;
    if (lastSeeMuvie != null && ocenka != null &&
        lastSeeMuvie != "" && ocenka != "" && lastSeeMuvie.length < 50) {
        personalMuvieDb.muvies[lastSeeMuvie] = ocenka;
        console.log("done!");
    } else {
        console.log("error");
        i--;
    }
}
while (i < 2);
if (personalMuvieDb.count < 10) {
    console.log("просотрено довольно мало фильмов");
} else if (personalMuvieDb.count >= 10 && personalMuvieDb.count < 30) {
    console.log("вы класический зритель");
} else if (personalMuvieDb.count >= 30) {
    console.log("вы киноман!");
} else {
    console.log("произошла ошибка");
}
console.log(personalMuvieDb);