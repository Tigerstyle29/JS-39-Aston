// Задание 1 – Создать объект counter всеми возможными способами;

let counter = {};
let counter1 = new Object();    
let counter2 = Object.create({});

// Задание 2 – Скопировать объект counter всеми возможными способами;

let copiedCounter = Object.assign({}, counter)
let copiedCounter1 = Object.create(counter)
let copiedCounter2 = {...originalCounter}
let copiedCounter3 = structuredClone(counter)

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами

// function declaration
function makeCounter() {
    alert('Hello')
}

// function expression 
const makeCounter = function () {
    alert('Hi')
}

// arrow function
const makeCounter = () => {}

// named function expression
const makeCounter = function Counter() {}

// Задание 4 - прочитать и описать работу глобальной функции structuredClone()

// Глобальная функция structuredClone() в JavaScript используется для глубокого клонирования (deep cloning) объектов. 
// Это означает, что она создает глубокую копию переданного ей объекта, включая все его вложенные объекты, массивы, примитивы и т. д. 
// Процесс клонирования выполняется безопасно и рекурсивно, сохраняя ссылочную целостность.

// Бонус
// Задание 1. Написать функцию глубокого сравнения двух объектов:

// const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
// const obj2 = { here: { is: "on", other: "2" }, object: "Y" };
// const deepEqual = (obj1, obj2) => {
//     if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
//         return obj1 === obj2;
//     }

//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let key of keys1) {
//         if (!deepEqual(obj1[key], obj2[key])) {
//             return false;
//         }
//     }
//     // Если все свойства совпадают, объекты равны
//     return true;
// };

// // Пример использования
// const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
// const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

// console.log(deepEqual(obj1, obj2)); // Выведет false

// Задание 2. Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
	return str.split('').reverse().join('');
}