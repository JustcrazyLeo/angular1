console.log(1);
//Практика 1
var string = 'Privet';
var nomer = 69;
var shtoto = false;

var variable = 5;
variable = "текст";
variable = true;
var empty = null;
function show() {
    console.log("...");
}
show();
// Практика 2
var count = 0;
console.log(count);
count = 99;
console.log(count);
// Практика 3
var a = 25;
var b = 4;
var sum = a + b;
if (sum % 2 === 0) {
    console.log("Число " + sum + " чётное");
}
if (sum % 2 != 0) {
    console.log("Число " + sum + " нечётное");
}

var sc = 0;
sc += 1;
sc += 1;
sc += 1;
sc -= 1;
sc -= 1;
console.log(sc);

var wallet = 1000;
wallet += 200;
wallet *= 0.7;
wallet /= 2;
console.log(wallet);
// Практика 4
var speed = 80;
var isRoadClear = false;
if (speed <= 60 || !isRoadClear) {
    console.log('Можно ехать');
}
if (speed >= 80 && isRoadClear) {
    console.log('Опасно');
}

var hk = true;
var knowsPassword = false;
if (hk && knowsPassword) {
    console.log("Полный доступ");
}
if ((hk && !knowsPassword) || (!hk && knowsPassword)) {
    console.log("Ограниченный доступ");
}
if (!hk && !knowsPassword) {
    console.log("Доступ запрещён");
}
// Практика 5
var sum1 = 0;
for (var i = 1; i <= 10; i++) {
    sum1 += i;
}
console.log(sum1);

var A = 5;
var res = 1;
for (var i = 1; i <= 10; i++) {
    res = A * i;
    console.log(A + "×" + i + "=" + res);
}

var n = 6;
var fac = 1;
for (var i = 1; i <= n; i++) {
    fac *= i;
}
console.log(fac);

//Практика Функции
//1
function add(a, b) {
    return a + b;
}
console.log(add(-2, 1));
console.log(add(264, 35));
console.log(add(3, -2));
//2
function greet(name) {
    if (name === void 0) { name = "Имя"; }
    console.log("привет, " + name + "!");
}
greet("мужчины");
//3
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(23));
console.log(isEven(56));
//4
function sq(num) {
    return num * num;
}
console.log(sq(34));
console.log(sq(7));
//5
function sravn(a, b) {
    if (a > b) {
        return "первое число больше";
    }
    if (b > a) {
        return "второе число больше";
    }
    return "равны";
}
console.log(sravn(123, 167));
console.log(sravn(6, 99));
console.log(sravn(12, 35));