let age: number = 30; // Под тип данных number входят значения: число до 2 в 53 степени (в том числе NaN)
//age = '50' - Ошибка типизации

let age1: number | string = 30;
age1 = '50';

// Пример неявной типизации
// let x = 50;
// x = '50'

let flag: boolean = false;
flag = true;

console.log(flag);


//number, string, boolean, null, undefined,       bigint (88888888888888888888888888888888n), symbol(str)

const arr: number[] = [1, 2, 3, 4];
//arr.push('5')  Пример ошибки типизации
const  arr1: number[] | string[] = ["1", "2", "3"];
const arr2: (number | string)[] = [1, '2', 3, '4'];
