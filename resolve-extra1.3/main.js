// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//
// let array=[];
// for (let i=0; i<50*2; i=i+2){
//     console.log(i);
//     document.write(i);
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let array=[];
// for (let i=0; i<100; i+=2) {
//     if(i%2===1){
//         console.log(i);
//         document.write(i);
//     }
//
// }


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let array = [];
// for (let i = 0; i < 20; i++) {
//     array.push(Math.floor(Math.random()*100));
//     console.log(array[i]);
//     console.log(array);
// }
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let num=[];
// for (let i = 0; i < 20; i++) {
//     num.push(Math.floor(Math.random()*(732-8)+8));
//     console.log(num[i]);
//     console.log(num);
//
// }

// 2. Вивести за допомогою console.log кожен третій елемен

// let array=[];
// for (let i = 2; i < 20; i+=3) {
//     console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let array=[];
// for (let i = 2; i < 20; i+=3) {
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
// };


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr1 = [];
// let arr2 = [];
// for (let i = 2; i < arr1.length; i+=3) {
//     if(arr1[i]%2===0){
//         arr1.push(arr2[i])
//         console.log(arr2[i]);
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56




// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let bills=[100,250,50,168,120,345,188];
//
// let check=0;
//
// for (let i = 0; i < bills.length; i++) {
//     check+=bills[i];
// }
// console.log(check);
//
// let medBills=check/bills.length;
//
// console.log(medBills);
//

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [];
// let arr1=[]
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random()*100));
//     console.log(array[i]);
//     console.log(array);
//     arr1.push(array[i]*5);
//     console.log(arr1);
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.


// let array = ['vasja', 34, 17, true, 'mark', 78];
// let empty=[];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         empty.push(array[i]);
//     }
// }
// console.log(empty);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities=[];
// for (let user of usersWithId) {
//     for (let city of citiesWithId){
//         if(user.id===city.user_id){
//             user.address=city;
//         }
//     }
// }
//
// usersWithCities=usersWithId;
// console.log(usersWithCities);


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let array1=[10, 15, 8, 59, 15, 26, 36];
//
// for (let i = 0; i < array1.length; i++) {
//     if(array1[i]%2===0){
//         console.log(array1[i]);
//     }
//
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array1=[10, 15, 10, 59, 15, 26, 36];
// let emptyArr=[];
// for (let i = 0; i < array1.length; i++) {
//     emptyArr[i]=array1[i];
// }
// console.log(emptyArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr=[ 'a', 'b', 'c'];
// let str="";
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr=[ 'a', 'b', 'c'];
// let i=0;
// let str="";
// while (i < arr.length) {
//     str = str + arr[i];
//     i++;
// };
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr=[ 'a', 'b', 'c'];
// let str="";
// for (const string of arr) {
//     str = str + string;
// }
// console.log(str);