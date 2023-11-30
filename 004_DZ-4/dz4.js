let arr = [1, 2, 3, 4, 5, 'A', 'B', true];
let arrNN = [-100, 0, 500, -201, 1000];
let text = "Привіт Ментор Okten!";


// #1
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log (areaRectangle(10, 20));

function areaRectangle(a, b) {
    return a*b;
}


//#2
// створити функцію яка обчислює та повертає площу кола з радіусом r
console.log (areaСircle(10));

function areaСircle(r) {
    return Math.PI * Math.pow(r, 2);
}


//#3
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log (areaСylinder(10, 20));

function areaСylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}


//#4
// - створити функцію яка приймає масив та виводить кожен його елемент

printArr(arr);

function printArr(arr) {
    for (const iterator of arr) {
        console.log(iterator)
    }
}

//#5
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
print(text);

function print(text) {
    document.write(`<p>${text}</p>`);
}


//#6
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
ul_li(text);

function ul_li(text) {
    document.write(`<ul>`)  
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}

//#7
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
ul_li_params (text, 3);

function ul_li_params (text, params) {
    document.write(`<ul>`);
    for(i=1; i<=params; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}


//#8
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

ol_li (arr);

function ol_li (arr) {
    document.write(`<ol>`);
    for (const item of arr) {
          document.write(`<li>${item}</li>`);  
        }
    document.write(`</ol>`)
}


//#9
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.
let user = [
    {
        id: "Андрей",
        name: "Барсик",
        age: 1
    },
    {
        id: "Велимир",
        name: "Мурка",
        age: 2
    },
    {
        id: "Андроник",
        name: "Маркиза",
        age: 3
    },
    {
        id: "Венцеслав",
        name: "Персик",
        age: 4
    }
];

div_box (user);

function div_box (user) {
    for (const key in user) {
        document.write("<div>");
        const element = user[key];
            for (const key in element ) {
                document.write(`<p> ${key}: ${element[key]} </p>`);
            }
            document.write("</div>");
}};

//#10
// - створити функцію яка повертає найменьше число з масиву
console.log("min = ", minNumber(arrNN));

function minNumber(params) {
    let min = Number.MAX_VALUE;
    for (const iterator of params) {
        if (min > iterator) { min = iterator};
    }
 return min;
}


//#11
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. 
// Приклад sum([1,2,10]) //->13

sum(arrNN); // let arrNN = [-100, 0, 500, -201, 1000]; ->1199

console.log("Сума  = ", sum(arrNN));

function sum(params) {
    let sum = 0;
    for (const iterator of params) {
        sum += iterator;
    }
 return sum;
}

//#12
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arrSwap = [11,22,33,44];
let index1 = 0;
let index2 = 1;

console.log("Start []" , arrSwap);
console.log("New []", swap (arrSwap,index1,index2));

function swap(arr,index1,index2) {
    for (const key in arr) {
        if (+key === index1 || +key === index2) 
        {
            let nn = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = nn;
            return arr;
        }
        }
    }

//#13
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let sumUAH = 10000;
let currencyValues = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
];

let exchangeCurrency = 'USD';
console.log (`${exchangeCurrency} = `, exchange(sumUAH,currencyValues,exchangeCurrency));

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const key in currencyValues) {
    if (currencyValues[key].currency === exchangeCurrency) {
        let value = Number(currencyValues[key].value);
        return sumUAH / value;
    }
    }}
