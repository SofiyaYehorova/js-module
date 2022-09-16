// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1='hello world';
// let str2='lorem ipsum';
// let str3='javascript is cool';
// console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 ='hello world';
// let str2 ='lorem ipsum';
// let str3='javascript is cool';
// console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1='HELLO WORLD';
// let str2='LOREM IPSUM';
// let str3='JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim(' '));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split=str.split(' ');
// console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers=[10,8,-7,55,987,-1011,0,1050,0];
// let map=numbers.map(value =>value.toString());
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// const sortNums=(direction, arr)=>{
//     if (direction==='ascending'){
//         arr.sort((a, b)=>(a-b));
//     }else if (direction==='descending'){
//         arr.sort((a, b)=>b-a);
//     }
//     return arr;
// }
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// -- відсортувати його за спаданням за monthDuration

// let sort =coursesAndDurationArray.sort((a, b)=>{
//     return b.monthDuration - a.monthDuration
// });
// console.log(sort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter=coursesAndDurationArray.filter(value=>value.monthDuration>5);
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// let cards=[
//     {cardSuit:'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color:'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade',value: 'king', color:'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {value: 'joker', color:'black'},
//
//     {cardSuit:'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color:'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond',value: 'king', color:'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {value: 'joker', color:'red'},
//
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color:'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart',value: 'king', color:'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {value: 'joker', color:'red'},
//
//     {cardSuit:'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color:'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs',value: 'king', color:'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {value: 'joker', color:'black'},
// ]
// - знайти піковий туз

// let find=cards.find(cards=>cards.cardSuit==='spade' && cards.value==='ace');
// console.log(find);

// - всі шістки

// let filter=cards.filter(cards=>cards.value==='6');
// console.log(filter);

// - всі червоні карти

// let filter=cards.filter(cards=>cards.color==='red');
// console.log(filter);

// - всі буби

// let filter=cards.filter(cards=>cards.cardSuit==='diamond');
// console.log(filter);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// - всі трефи від 9 та більше

// let filter=cards.filter(cards=>cards.cardSuit==='clubs' && cards.value>=9|| typeof cards.value==='string' &&
//     cards.cardSuit==='clubs'|| cards.value==='joker' && cards.color==='black');
// console.log(filter);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = cards.reduce((accumulator, cards) => {
//     if (cards.cardSuit === 'spade') {
//         accumulator.spades.push(cards);
//     } else if (cards.cardSuit==='diamond'){
//         accumulator.diamond.push(cards);
//     }else if (cards.cardSuit==='heart'){
//         accumulator.heard.push(cards);
//     }else if (cards.cardSuit==='clubs'){
//         accumulator.clubs.push(cards);
//     }else{
//         accumulator.joker.push(cards);
//     }
//     return accumulator;
// },{
//     spades: [],
//     diamond: [],
//     heard: [],
//     clubs: [],
//     joker:[]
// });
// console.log(reduce);



