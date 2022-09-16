// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a, b){
//     let res= a * b;
//     return res;
// }
// console.log(rectangle(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle (Pi, r) {
//     let res =Pi * r;
//     return res;
// }
//
// console.log(circle(3.14, 6));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder (Pi, r, h) {
//     let res= 2 * Pi * r * (h + r);
//     return res;
// }
// console.log(cylinder(3.14, 5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function arrayPrinter(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arrayPrinter(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (text){
//     document.write(`<p>${text}</p>`)
// }
// paragraph('hello');
// paragraph('world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function createUL (text){
//     document.write('<ul>')
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>')
// }
// createUL('New text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
//          li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUl(text, number){
//     document.write('<ul>')
//     for (let i=0; i<number; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>')
// }
// createUl('New Li', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let sameArray=['sofiya', 2022, true, 'mark', 2020]
// function same(array){
//     document.write('<ol>')
//     for (let i= 0; i<sameArray.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</ol>')
// }
// same(sameArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
//          кожного об'єкту окремий блок.

// let newArray = [
//     {id:1, name: 'Oleksandr', age: 42},
//     {id:2, name:'Sofiya', age:37},
//     {id:3, name: 'Mark', age:2}
// ]
//
// function object(array){
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
//     }
// }
// object(newArray);


// - створити функцію яка повертає найменьше число з масиву

// let numArray= [5, 7, 50, 17, -3, -12]
// function num(array){
//     let min= array[0];
//     for (const item of array) {
//         if (item<min){
//             min=item;
//         }
//     }
//     return min;
// }
//
// console.log(num(numArray));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numArray= [5, 7, 50, 17, -3, -12]
// function sum(arr){
//     let res=0;
//     for (const item of arr) {
//         res= res + item;
//     }
//     return res;
// }
//
// console.log(sum(numArray));
