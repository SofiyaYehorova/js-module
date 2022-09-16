// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let products =['food',' clothes', 'chemistry', 'bags', 'shoes'];
// let prices= [10, 15, 17, 24, 37];
// let list= [
//         'food', 10, true,
//         'clothes', 15, true,
//         'chemistry', 17, false,
//         'bags', 24, true,
//         'shoes', 37, false,
// ]
// console.log(prices,products,list);
//

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let a=[];
// a[0]='hello';
// a[1]=0;
// a[2]=true;
// a[3]='ukraine';
// console.log(a);
//


// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let numbers = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// let i=0;
// while (i<numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// 2. перебрати його циклом for

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i=0;
// while (i<numbers.length){
//     if(i%2!==0){
//         console.log(numbers[i]);
//     }
//     i++
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let i = 0; i < numbers.length; i++) {
//     if (i%2!==0){
//         console.log(numbers[i]);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i=0;
// while(i<numbers.length){
//     if(numbers[i]%2===0){
//         console.log(numbers[i])
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i=0; i<numbers.length; i++){
//     if (numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%3===0){
//         numbers[i]='octen';
//         console.log(numbers[i]);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     console.log(number);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1.A

// let i=numbers.length-1;
// while(i>=0){
//     console.log(numbers[i]);
//     i--;
// }


// 2.B

// for (let i=numbers.length-1; i>=0; i--){
//     console.log(numbers[i]);
// }

// 3.C

// i=numbers.length-1;
// while (i>=0){
//     if(i%2!==0){
//         console.log(numbers[i]);
//     }
//     i--;
// }

// 4.D
// for (let i=numbers.length-1; i>=0; i--){
//     if (numbers[i]%2!==0){
//
//     console.log(numbers[i]);
// }
// }


// 5.E

// i=numbers.length-1;
// while(i>=0){
//     if(numbers[i]%2===0){
//         console.log(numbers[i])
//     }
//     i--;
// }



// 6. F

// for(let i=numbers.length-1; i>=0; i--){
//     if (numbers[i]%2!==0){
//         console.log(numbers[i])
//     }
// }


// 7.G

// for (i= numbers.length-1; i>=0; i--) {
//     if (numbers[i]%3===0){
//         numbers[i]='octen';
//         console.log(numbers[i]);
//     }
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers= [7, 10, 15.4, 20, 6, -99.1, 54, 87.5, 87.4, 100];
// for (i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let words = ['hello', 'world', 'my', 'name', 'sofiya', 'how', 'are', 'you', 'what'];
// for (w=0; w<words.length; w++){
//     console.log(words[w]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let st= [50,'your', true, 17, 'Oleksandr', false, 6, 'Mark', true, 80];
// for (s=0; s<st.length; s++){
//     console.log(st[s]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let st= [50,'your', true, 17, 'Oleksandr', false, 6, 'Mark', true, 80];
// for (s=0; s<st.length; s++)
// if (typeof st[s]===`boolean`){
//     console.log(st[s]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let st= [50,'your', true, 17, 'Oleksandr', false, 6, 'Mark', true, 80];
// for (s=0; s<st.length; s++)
// if (typeof st[s]===`number`){
//     console.log(st[s]);
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let st= [50,'your', true, 17, 'Oleksandr', false, 6, 'Mark', true, 80];
// for (s=0; s<st.length; s++)
// if (typeof st[s]===`string`){
//     console.log(st[s]);
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array=[];
// array[0]='salut';
// array[1]= 18;
// array[2]= false;
// array[3]= 'hello';
// array[4]=87;
// array[5]='name';
// array[6]='world';
// array[7]=true;
// array[8]='stuff';
// array[9]=45;
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i=0; i<10; i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let a=0; a<100; a++){
//     console.log(a);
//     document.write(a);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// let stuff =[];
// for (let c=0; c<100; c+=2){
//     console.log(c);
//     document.write(c);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write




// for (q=0; q<100;q++){
//     if (q%2===0){
//         console.log(q);
//         document.write(q);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let p=0; p<100; p++){
//     if(p%2!==0){
//         console.log(p);
//         document.write(p);
//     }
// }


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор



// let books= [
//     {
//     title: 'Дорогой длинною',
//     page: 68,
//     genre: ['memoirs', 'historical'],
//     authors: ['А. Вертинский'],
//     },
//
// {
//     title: 'Сулла',
//     page: 1994,
//     genre: ['historical', 'historical', 'historical'],
//     authors: ['А. Короленков'],
// },
//
// {
//     title: 'Цивилизация древнего мира',
//     page: 1269,
//     genre: ['historical', 'historical', 'historical', 'historical'],
//     authors: ['Пьер Грималь', 'А. Короленков'],
// }
// ]

// -знайти наібльшу книжку.

// let maxBook=books[0];
// for (const book of books) {
//     if (book.page > maxBook.page) {
//         maxBook = book;
//     }
// }
// console.log(maxBook);

// // - знайти книжку/ки з найбільшою кількістю жанрів
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let maxGenre = books[0];
// for (const item of books) {
//     if (item.genre > maxGenre.genre) {
//         maxGenre = item;
//     }
// }
// console.log(maxGenre);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // - знайти книжку/ки з найдовшою назвою
//
// let maxLength = books[0];
// for (const maxLengthElement of books) {
//     if (maxLengthElement.title > maxLength.title) {
//         maxLength = maxLengthElement;
//     }
//
// }
// console.log(maxLength);

//
// // - знайти книжку/ки які писали 2 автори
//
// let maxAuthors=books[0];
// for (const maxAuthor of books) {
//     if (maxAuthor.authors > maxAuthors.authors) {
//         maxAuthors = maxAuthor;
//     }
// }
//
// console.log(maxAuthors);

// // - знайти книжку/ки які писав 1 автор
//

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let minAuthor=books[0];
// for (const minAuthorElement of books) {
//     if (minAuthorElement.authors > minAuthor.authors) {
//         minAuthor = minAuthorElement;
//     }
// }
// console.log(minAuthor);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

