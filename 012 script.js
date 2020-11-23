/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
    let numberOfFilms;
    
    let personalMovieDB = {
        count:numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        private:false
    }; 
    do{
    numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
    personalMovieDB.count = numberOfFilms;
    if(!isNaN(numberOfFilms)){
        break;
    };}
    while(true);
    let answer;
    let answer2;
    for(let i=1; i<=numberOfFilms;i++){
        do{
        answer = prompt('Один из последних просмотренных фильмов?');
        answer2 = +prompt('На сколько оцените его?');
        alert(answer2+answer);
        if(answer && answer2 &&  answer.length < 50 && answer.length > 3){break;};
        } while(true);
        personalMovieDB.movies[answer]=answer2;
    };
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
        console.log(personalMovieDB);
    
