/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
    let numberOfFilms;
    
    let personalMovieDB = {
        count:numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        private:false
    }; 
start();
    function start(){
        do{
            numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
        }while(!numberOfFilms)
        personalMovieDB.count = numberOfFilms;
    };
    let answer;
    let answer2;
    function rememberFilms(){
        for(let i=1; i<=numberOfFilms;i++){
            do{
                answer = prompt('Один из последних просмотренных фильмов?');
                answer2 = +prompt('На сколько оцените его?');
                if(answer && answer2 &&  answer.length < 50 && answer.length > 3){break;};
            } while(true);
                personalMovieDB.movies[answer]=answer2;
        };
    };
rememberFilms();
function detectLevel(){
        if (personalMovieDB.count<10){
            alert("Просмотрено довольно мало фильмов");
        }
        else if(personalMovieDB.count>=10|| personalMovieDB.count<=30){
            alert("Вы классический зритель");
        }
        else if(personalMovieDB.count>30){
            alert("Вы киноман");
        }
        else {
            alert("Ошибка");
        }
};
detectLevel();
function showMyDB(){
    if(personalMovieDB.private==false){
        console.log(personalMovieDB);
    };
};
       
function writeYourGenres(){
    for(let i=1;i<=3;i++){
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
};
writeYourGenres();
showMyDB();    
