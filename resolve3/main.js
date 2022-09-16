// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x=-30;
// if (x!==0){
//     console.log('true');
// } else {
//     console.log('false');
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('what time is now?');
// console.log(time);
//
// if (time>0 && time <15) {
// console.log('the first quarter of an hour');
// }
// if (time>=15 && time <30){
//     console.log('the second quarter of an hour');
// } else if (time >=30 && time <45) {
//     console.log('the third quarter of an hour');
// } else if (time >=45 && time >=59){
//     console.log('thr fourth quarter of an hour')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day=+prompt('what date is today?')
// console.log(day)
//
// if (day >1 && day <=10){
//     console.log('the first decade of the month');
// } else if (day >=11 && day <=20){
//     console.log('the second decade of the month');
// } else if (day>= 21&& day <=31){
//     console.log('the third decade of the month');
// }
//



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let week = prompt ('what day of the week?')
console.log(week)

switch (week) {
    case "monday":
        console.log('cleaning');
        break;
    case "tuesday":
        console.log('shoping');
        break;
    case "wednesday":
        console.log('cooking');
        break;
    case "thuesday":
        console.log('a visit to the docter');
        break;
    case "friday":
        console.log('to visit parents');
        break;
    case "saturday":
        console.log('a walk with a child');
        break;
    case "sunday":
        console.log('games with the child');
        break;
default:
    console.log('error');
    break;

}





//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = 10;
// let y = 10;
// if (x > y){
//     console.log(x);
// }
// else if (x < y){
//     console.log(y);
// }
// else if (x === y) {
//     console.log('equal');
// }



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = (null || 'default');
//     console.log(x);
//
//
// let y= (NaN||'default');
//     console.log(y);
//
//
// let a= (''||'default');
//     console.log(a);


