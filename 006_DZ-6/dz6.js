let stringHello = "hello world";
let stringLorem = "lorem ipsum";
let stringJsCool = "javascript is cool";

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log ("#1 - Знайти та вивести довижину настипних стрінгових значень");

let stringlength = (params) => console.log(`${params} = `, params.length, "знаків")

stringlength (stringHello);
stringlength (stringLorem);
stringlength (stringJsCool);
console.log ("");

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log ("#2 - Перевести до великого регістру наступні стрінгові значення");

let stringUpCase = (params) =>  {
    const stringUpCase = params.toUpperCase();
    console.log(`${params} = `, stringUpCase)
    return stringUpCase
};

let stringHelloUpCase = stringUpCase (stringHello);
let stringLoremUpCase = stringUpCase (stringLorem);
let stringJsCoolUpCase = stringUpCase (stringJsCool);
console.log ("");


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log ("#3 - Перевести до нижнього регістру настипні стрінгові значення");

let stringtoLowerCase = (params) => console.log(`${params} = `, params.toLowerCase());

stringtoLowerCase  (stringHelloUpCase);
stringtoLowerCase  (stringLoremUpCase);
stringtoLowerCase  (stringJsCoolUpCase);
console.log ("");


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log (`#4 - "брудна" стрінга`);
let str = ' dirty string    dirty string    dirty string   ';
let stringLine = "";

let arrString = str.split(' ');
for (const key of arrString) {
    if (key !== "") { 
        stringLine = stringLine + key + " ";
    }
};
console.log (stringLine.substring(0, stringLine.length-1));
console.log ("");

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log (`#5 - Ревуть воли як ясла повні`);
let strShevchenko = 'Ревуть воли як ясла повні';

let stringToarray = (str) => console.log(str.split(' '))
stringToarray (strShevchenko);

console.log ("");


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log (`#6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]`);
let arrmap = [10,8,-7,55,987,-1011,0,1050,0];

let arrNewMap = arrmap.map((params) => params); 

console.log (arrNewMap.toString());
console.log ("");

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log (`#7 - створити функцію sortNums(direction)`);
let nums = [11,21,3];

function sortNums(nums, direction) {
    let arr = nums.sort((a, b) => a - b);
    switch (direction) {
        case "ascending" : return arr;
        case "descending": return arr.reverse();
        default:
        break;
    }
}

console.log (sortNums(nums,'ascending'));
console.log (sortNums(nums,'descending'));
console.log ("");


// ==========================
// - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log (`#7 - є масив: відсортувати, відфільтрувати, map перетворити `);
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let arr_min = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
let arr_5_monthDuration = coursesAndDurationArray.filter(params => params.monthDuration > 5);
let arr_id = coursesAndDurationArray.map(function(params,index) {return {id: index+1, ...params}});     
console.log (arr_min);
console.log (arr_5_monthDuration);
console.log (arr_id);
console.log ("");


//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
console.log (`#8 - карти `);
let cards = [
    { cardSuit: 'spade', value: "6", color: 'black'}, //пика
    { cardSuit: 'spade', value: "7", color: 'black'},
    { cardSuit: 'spade', value: "8", color: 'black'},
    { cardSuit: 'spade', value: "9", color: 'black'},
    { cardSuit: 'spade', value: "10", color: 'black'},
    { cardSuit: 'spade', value: 'jack', color: 'black'},
    { cardSuit: 'spade', value: 'queen', color: 'black'},
    { cardSuit: 'spade', value: 'king', color: 'black'},
    { cardSuit: 'spade', value: 'ace', color: 'black'},

    { cardSuit: 'clubs', value: "6", color: 'black'}, //трефа
    { cardSuit: 'clubs', value: "7", color: 'black'},
    { cardSuit: 'clubs', value: "8", color: 'black'},
    { cardSuit: 'clubs', value: "9", color: 'black'},
    { cardSuit: 'clubs', value: "10", color: 'black'},
    { cardSuit: 'clubs', value: 'jack', color: 'black'},
    { cardSuit: 'clubs', value: 'queen', color: 'black'},
    { cardSuit: 'clubs', value: 'king', color: 'black'},
    { cardSuit: 'clubs', value: 'ace', color: 'black'},

    { cardSuit: 'heart', value: "6", color: 'red'}, //черви
    { cardSuit: 'heart', value: "7", color: 'red'},
    { cardSuit: 'heart', value: "8", color: 'red'},
    { cardSuit: 'heart', value: "9", color: 'red'},
    { cardSuit: 'heart', value: "10", color: 'red'},
    { cardSuit: 'heart', value: 'jack', color: 'red'},
    { cardSuit: 'heart', value: 'queen', color: 'red'},
    { cardSuit: 'heart', value: 'king', color: 'red'},
    { cardSuit: 'heart', value: 'ace', color: 'red'},

    { cardSuit: 'diamond', value: "6", color: 'red'}, //бубна
    { cardSuit: 'diamond', value: "7", color: 'red'},
    { cardSuit: 'diamond', value: "8", color: 'red'},
    { cardSuit: 'diamond', value: "9", color: 'red'},
    { cardSuit: 'diamond', value: "10", color: 'red'},
    { cardSuit: 'diamond', value: 'jack', color: 'red'},
    { cardSuit: 'diamond', value: 'queen', color: 'red'},
    { cardSuit: 'diamond', value: 'king', color: 'red'},
    { cardSuit: 'diamond', value: 'ace', color: 'red'},
]


let arr_search_value = cards.filter(params => params.value === 'ace')
                            .filter(params => params.cardSuit === 'spade'); //знайти піковий туз
console.log ("піковий туз", arr_search_value);

let arr_search_6 = cards.filter(params => params.value === '6'); //всі шістки
console.log ("всі шістки", arr_search_6);

let arr_search_red = cards.filter(params => params.color === 'red'); //всі червоні карти
console.log ("всі червоні карти", arr_search_red );

let arr_search_diamond = cards.filter(params => params.cardSuit === 'diamond'); //всі буби
console.log ("всі буби", arr_search_diamond);

let arr_search_clubs = cards.filter(params => params.cardSuit === 'clubs')
                            .filter(params => params.value !== '6' && params.value !== '7' && params.value !== '8')//всі трефи від 9 та більше
console.log ("всі трефи від 9 та більше", arr_search_clubs);


console.log ("");

// =========================
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log (`#9 - упакувати всі карти по "мастях" в об'єкт`);

let reduce = cards.reduce((finish, card) => {
    switch (card.cardSuit) {
        case 'clubs': finish.clubs.push(card);  break;
        case 'spade': finish.spades.push(card); break;
        case "heart": finish.hearts.push(card); break;
        case 'diamond': finish.diamonds.push(card); break; 
    default:
    break;
    }

    return finish;

}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log (reduce);
console.log ("");


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
console.log (`#10 - написати пошук всіх об'єктів`);

let sass = [];
let docker = [];

coursesArray.forEach(element => {
    element.modules.forEach (index => {
        switch (index) {
            case "sass": sass.push(element); break;
            case "docker": docker.push(element); break;
            default:
            break;
        }
    })
});
console.log ("sass", sass)
console.log ("docker", docker);
console.log ("");


