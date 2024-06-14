// Object

// const groups = {
//     group897: {
//         student1:{
//             //  key  value = proporty
//             ism: "Muhammadali",
//             familiya: "Botiorv",
//             age: 11,
//             shahar: "Yunsobod 11 ",
//         },
//         student2:{
//             ism: "Zubayer",
//             familiya: "Xusanov",
//             age: 14,
//             shahar: "Yunsobod 9"
//         }
        
//     },
//     group883:{
//         student1:{
//             ism: "Elshod",
//             familiya: "Turginjonov",
//             age: 13,
//             shahar: "Yunsobod 13"
//         }
//     },
// }
// console.log(groups.group897); // Dote notation
// console.log(groups["group883"]["familiya"]); // Bracket notation





// Mana ↓↓↓


// const myStudents = [
//     {
//         ism: "Muhammadali",
//         login: 773633,
//         password: 91860,
//     },
//     {
//         ism: "Zubayer",
//         login: 597168,
//         password: z,
//     },
//     {
//         ism: "Elshod",
//         login: 759846,
//         password: 45623,
//     },
//     {
//         ism: "Sanjar",
//         login: 84682,
//         password: 47365,
//     },
//     {
//         ism: "Samir",
//         login: 849855,
//         password: 13516,
//     },
//     {
//         ism: "Suhrob",
//         login: 547054,
//         password: 56753,
//     },
//     {
//         ism: "Begzod",
//         login: 484868,
//         password: 77775,
//     },
//     {
//         ism: "Jalolidinov",
//         login: 456123,
//         password: 15642,
//     },
// ]

// let userLogin = +prompt("Login kriting");
// let userPassword = +prompt("Password kriting");

// const result = myStudents.find(item => item.login == userLogin && item.password == userPassword)

// if(result){
//     alert(`${result.ism} Hush keldsiz`)
// }else{
//     alert("Login yoki parol notogri")
// }





let userName = prompt("Введите ваше имя:");
let spaceId = prompt("Введите ваш  MODME ID:");
let spacePassword = prompt("Введите ваш пароль:");

let Space = {
    name: userName,
    ID: spaceId,
    password: spacePassword
};

console.log(Space);

// Assolomu aleykum. agar buni korvotgan bolsiz tepadi kodni korin biza darsda qildi iltimos
// Iltimos 100 coinla
