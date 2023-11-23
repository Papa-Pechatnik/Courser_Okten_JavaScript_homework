/* - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль */
console.log("Створити масив, наповнити його 10 елементами");
let a = [1,2,3,4,5,'6','7',true,{},[]]
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);
console.log ("");

/* - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre. */
console.log("Створити 3 об'єкти які описують книги");
let obj1 = {
    title: "Коти вояки",
    pageCount: 190, 
    genre: "Пригоди"
};

let obj2 = {
    title: "Лісова казка",
    pageCount: 356, 
    genre: "Казки"
};

let obj3 = {
    title: "Мумі-троль",
    pageCount: 56, 
    genre: "Фантастика"
};
console.log (obj1, obj2, obj3);
console.log ("");

/* - - Створити 3 об'єкти які описують книги. 
Поля об'єкту : title ,pageCount, genre, authors. 
Поле "автори" - являється  масивом. Кожен автор має поля name та age. */
console.log("Створити 3 об'єкти які описують книги");
let obj11 = {
    title: "Коти вояки",
    pageCount: 190, 
    genre: "Пригоди",
    authors: [{
        name: "Василь",
        age: 87
    }]
};

let obj21 = {
    title: "Лісова казка",
    pageCount: 356, 
    genre: "Казки",
    authors: [{
        name: "Петро",
        age: 67
    }]
};

let obj31 = {
    title: "Мумі-троль",
    pageCount: 56, 
    genre: "Фантастика",
    authors: [{
        name: "Маруся",
        age: 16
    }]
};
console.log (obj11, obj21, obj31);
console.log ("");

/* - Створити масив з 10 об'єктами які описують сутніть "користувач".
    Поля: name, username,password.
    Вивести в консоль пароль кожного користувача */

console.log("пароль кожного користувача");
let user = [
    {
        name: "Андрей",
        username: "Барсик",
        password: 1
    },
    {
        name: "Велимир",
        username: "Мурка",
        password: 2
    },
    {
        name: "Андроник",
        username: "Маркиза",
        password: 3
    },
    {
        name: "Венцеслав",
        username: "Персик",
        password: 4
    },
    {
        name: "Венцеслав",
        username: "Анри",
        password: 5
    },
    {
        name: "Ансельм",
        username: "Кексик",
        password: 6
    },
    {
        name: "Варлам",
        username: "Боня",
        password: 7
    },
    {
        name: "Велвел",
        username: "Соня",
        password: 8
    },
    {
        name: "Гуго",
        username: "Люся",
        password: 9
    },
    {
        name: "Ананс",
        username: "нанс",
        password: 10
    },
]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
console.log ("");

/* - Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', 
інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3 */

console.log ("Вірно \ Невірно")
let x = +prompt("Число :", 0);

if (x == 0) {
console.log ("Невірно")
} else {
    console.log ("Вірно")
};
console.log ("");
/* - Дано змінну time яка рівна числу від 0 до 59. 
    Потрібно написати код, який перевірить, 
    до якої четверті години попадає число
    (в першу, другу, третю или четверту частину години).
*/
console.log ("Частина години: числу від 0 до 59");
let time = +prompt ("Число від 0 до 59", 0);
let xx = time / 15;
let timePrint;

if (xx < 4 ) { timePrint = "IV-та чверть"};
if (xx < 3 ) { timePrint = "IІІ-тя чверть"};
if (xx < 2 ) { timePrint = "IІ-га чверть"};
if (xx < 1 ) { timePrint = "I-ша чверть"};

console.log (timePrint);
console.log ("");

/* - У змінній day дано якесь число від 1 до 31.
 Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю). 
*/

console.log ("Декада, число від 1 до 31.");

let day = +prompt ("Число від 1 до 31", 1);
let xxx = day / 10;
let dayPrint;
if ( xxx >= 3) 
    { dayPrint = "IІІ-тя декада"}
else if (xxx <= 1 ) 
    { dayPrint = "I-ша декада"} 
    else {
    dayPrint = "II-га декада"
}
console.log (dayPrint);
console.log ("");
/*
- Скласти розклад на тиждень за домопоги switch. 
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа 
що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/

console.log ("розклад на тиждень");
let dayweek = +prompt ("Число від 1 до 7", 1);
let dayweekPrint;
switch (dayweek) {
    case 1:
        dayweekPrint = "Monday";
    break;
    case 2: 
        dayweekPrint = "Tuesday";
    break;
    case 3: 
        dayweekPrint = "Wednesday"
    break;
    case 4: 
        dayweekPrint = "Thursday"
    break;
    case 5: 
        dayweekPrint = "Friday"
    break;
    case 6: 
        dayweekPrint = "Saturday"
    break;
    case 7: 
        dayweekPrint = "Sunday"
    break;
    default:
    break;
}
console.log (dayweekPrint);
console.log ("");

/*
Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/

console.log ("Знайти та вивести максимальне число з тих двох");
let numberPrint;
let number1 = +prompt ("Перше число: ");
let number2 = +prompt ("Друге число: ");
if (number1 == number2) {
    numberPrint = "Числа рівні"
    } else if (number1 > number2) {
            numberPrint = `${number1} > ${number2}`
        } else numberPrint = `${number2} > ${number1}`

console.log (numberPrint);
console.log ("");

/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). 
Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default" 
якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

*/
console.log ("НЕЗРОЗУМІЛА ПОСТАНОВА ЗАВДАННЯ, тому вирішення нема.");

/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. 
За допомоги іф перевірити кожен його елемент на тривалість навчання. 
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
*/
console.log ("arrays.js");
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesMonthDuration = 5;
if (coursesAndDurationArray[0].monthDuration >= coursesMonthDuration) { console.log("Супер")};
if (coursesAndDurationArray[1].monthDuration >= coursesMonthDuration) { console.log("Супер")};
if (coursesAndDurationArray[2].monthDuration >= coursesMonthDuration) { console.log("Супер")};
if (coursesAndDurationArray[3].monthDuration >= coursesMonthDuration) { console.log("Супер")};
if (coursesAndDurationArray[4].monthDuration >= coursesMonthDuration) { console.log("Супер")};
if (coursesAndDurationArray[5].monthDuration >= coursesMonthDuration) { console.log("Супер")};
console.log("Всі інші курси не ДУЖЕ СУПЕР");