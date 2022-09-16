// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User (id, name, surname, email, phone){
//     this.name = name;
//     this.id = id;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     // console.log(this);
// }
//
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let newUser=[];
//
// let user1=new User ('1', 'vasya', 'stepanjyk', 'stepanjyk@gmail.com', '2409785');
// let user2=new User('2', 'serhiy', 'bondar', 'serhbon@gmail.com', '8948596');
// let user3=new User('3', 'sofiya','yehorova', 'yehorova66@gmail.com', '1548466');
// let user4=new User('4','sasha', 'sukhanov', 'sukhanov12@gmail.com', '6894515');
// let user5=new User ('5', 'lilia', 'yehorova', 'yehorova47@rambler.ru', '5489856');
// let user6=new User('6', 'serhiy', 'kuprin', 'kupribs@gmail.com', '4589742');
// let user7=new User('7', 'anna', 'kuprina', 'annnak@gmail.com', '4875264');
// let user8=new User('8', 'mark', 'sukhanov', 'markS@gmail.com','6485971');
// let user9=new User('9', 'olya', 'golubovitch', 'golubO@gmail.com', '6598451');
// let user10=new User('10', 'tihomur', 'golubovitch', 'golubT@gmail.com', '5481526');
//
// newUser.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// console.log(newUser);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers=newUser.filter(function (value){
//     return value.id%2===0;
// })
// console.log(filterUsers);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort=newUser.sort((u1, u2)=>{
//     return u2.id-u1.id;
// });
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//


// створити пустий масив, наповнити його 10 об'єктами Client

// let newClient=[];
//
// let client1=new Client ('1', 'vasya', 'stepanjyk', 'stepanjyk@gmail.com', '2409785', [1, 3, 4]) ;
// let client2=new Client('2', 'serhiy', 'bondar', 'serhbon@gmail.com', '8948596', [2, 3 , 8, 9]);
// let client3=new Client('3', 'sofiya','yehorova', 'yehorova66@gmail.com', '1548466', [7, 8 , 11]);
// let client4=new Client('4','sasha', 'sukhanov', 'sukhanov12@gmail.com', '6894515', [14, 18, 20, 78 ]);
// let client5=new Client ('5', 'lilia', 'yehorova', 'yehorova47@rambler.ru', '5489856', [11]);
// let client6=new Client('6', 'serhiy', 'kuprin', 'kupribs@gmail.com', '4589742', [10, 2, 9, 56]);
// let client7=new Client('7', 'mark', 'sukhanov', 'markS@gmail.com','6485971', [4, 1, 65]);
// let client8=new Client('8', 'olya', 'golubovitch', 'golubO@gmail.com', '6598451', [7, 10, 1]);
// let client9=new Client('9', 'tihomur', 'golubovitch', 'golubT@gmail.com', '5481526', [4, 6, 10]);
//
// newClient.push(client1, client2, client3, client4, client5, client6, client7, client8, client9);
// console.log(newClient);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = newClient.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// function Car (model, producer, year, speed, volume){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
//     this.drive=function(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     this.info = function () {
//         for (const item in this) {
//             if(typeof this[item]!=='function'){
//                 console.log((`${item} -- ${this[item]}`));
//             }
//         }
//     }
//     this.increaseMaxSpeed=function (newSpeed){
//         this.speed += newSpeed;
//     }
//
//     this.changeYear=function (newYear){
//        this.year += newYear;
// }
//     this.addDriver=function (driver){
//         this.driver=driver;
//     }
// }
//
// let car = new Car('maxima', 'nissan', 2020, 300, '3498');
//
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2);
// car.addDriver({name:'sofiya', age:37});
//
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, speed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//
//     info() {
//         for (const item in this) {
//             if(typeof this[item] !=='function'){
//                 (`${item} -- ${this[item]}`);
//             }
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed+=newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year+=newValue;
//     }
//
//     addDriver(driver) {
//         this.driver=driver
//     }
// }
//
// let car = new Car('maxima', 'nissan', 2020, 300, '3498');
// console.log(car);
//
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(3);
// car.addDriver({name:'sofiya', age:37});
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Popeluska{
//     constructor (name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
//
//
//
//     let popeluska1=new Popeluska('lilia', 30, 39);
//     let popeluska2=new Popeluska('sofiya', 37, 37);
//     let popeluska3=new Popeluska('jaruna',14, 30);
//     let popeluska4=new Popeluska('sofiya', 17, 35);
//     let popeluska5=new Popeluska('nikol', 15, 33);
//     let popeluska6=new Popeluska('olja', 17, 36);
//     let popeluska7=new Popeluska('galia', 22, 38);
//     let popeluska8=new Popeluska('tanja', 38, 37);
//     let popeluska9=new Popeluska('orusja', 34, 38);
//     let popeluska10=new Popeluska('lesja', 36, 34);
//
// const array=[popeluska1, popeluska2, popeluska3, popeluska4, popeluska5, popeluska6, popeluska7, popeluska8, popeluska9, popeluska10]
//
// class Prince extends Popeluska{
//     constructor(name, age, findFootSize) {
//         super(name, age);
//         this.findFootSize=findFootSize;
//     }
// }
//
// let prince= new Prince('sasha', 40, 39);
//
//     let find=(array, prince)=>{
//         for (const item of array) {
//             if (prince.findFootSize === item.footSize) {
//                 return `moja popelushka je ${item.name}`;
//             }
//         }
//     }
// console.log(find(array, prince));
