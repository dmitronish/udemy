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

const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
const personalMuvieDb = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    private: false
};
const lastSeeMuvie = prompt("Последний из просмотренных фильмов?", ""),
    ocenka = prompt("На сколько ецените его?", ""),
    lastSeeMuvie2 = prompt("Последний из просмотренных фильмов?", ""),
    ocenka2 = prompt("На сколько ецените его?", "");

personalMuvieDb.muvies[lastSeeMuvie] = ocenka;
personalMuvieDb.muvies[lastSeeMuvie2] = ocenka2;
console.log(personalMuvieDb);