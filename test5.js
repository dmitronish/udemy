"use strict";
// // ООП
// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// const solder = {
//     heals: 400,
//     armor: 150,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(solder);
// // const john = {
// //     heals: 100
// // };

// // john.__proto__ = solder;
// Object.setPrototypeOf(john, solder);

// console.log(john);
// console.log(john.armor);
// john.sayHello();

// практика ч4 используем функции

const personalMuvieDb = {
    count: 0,
    muvies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMuvieDb.count = prompt("Сколько фильмов вы просмотрели?", "");

        while (personalMuvieDb.count == "" || personalMuvieDb.count == null || isNaN(personalMuvieDb.count)) {
            personalMuvieDb.count = prompt("Сколько фильмов вы просмотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMuvieDb.count < 10) {
            console.log("просотрено довольно мало фильмов");
        } else if (personalMuvieDb.count >= 10 && personalMuvieDb.count < 30) {
            console.log("вы класический зритель");
        } else if (personalMuvieDb.count >= 30) {
            console.log("вы киноман!");
        } else {
            console.log("произошла ошибка");
        }
    },
    showMyDb: function () {
        if (personalMuvieDb.private == false) {
            console.log(personalMuvieDb);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMuvieDb.private) {
            personalMuvieDb.private = false;
        } else {
            personalMuvieDb.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === "" || genre == null) {
                console.log("вы ввели некоректные данные!");
                i--;
            } else {
                personalMuvieDb.genres[i - 1] = genre;
            }

        }
        personalMuvieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });
    }
};

