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

//
var Age = 21;
if (Age < 18) {
    console.log('возраст не подходит!');
}
if (Age >= 18) {
    console.log('вы нужного возраста!');
    for (var a = 1; a <= 10; a++) {
        console.log(Age + ' x ' + a, '= ' + Age * a);
    }
}
//
function aaa(i, x, c) {
    if (c === '+') {return i + x;}

    if (c === '-') {return i - x;}

    if (c === '*') {return i * x;}

    if (c === '/') {return i / x;}

    return 0;
}

console.log('2 + 4 = ', aaa(12, 21, '+'));

console.log('2 - 4 = ', aaa(3, 23, '-'));

console.log('2 × 4 = ', aaa(4, 11, '*'));

console.log('2 ÷ 4 = ', aaa(45, 23, '/'));
//
//1
const students = ['alex', 'maria', 'oleg'];
const scores = [85, 92, 78];
const statuses = [true, false, true];

//2
const colors = ['красный', 'зеленый', 'синий'];
console.log(colors[0]);
console.log(colors[2]);

//3
const car = {
    brand: 'томасс',
    model: 'X5',
    year: 2018
};
console.log('Автомобиль:', car);
console.log('Марка:', car.brand);
console.log('Модель:', car.model);
console.log('Год:', car.year);

//4
const person = {
    name: 'софия',
    age: 24
};
console.log(person);

//5
const teachers = [
    { name: 'андрей', age: 45 },
    { name: 'татьяна', age: 38 },
    { name: 'сергей', age: 51 },
];
for (let i = 0; i < teachers.length; i++) {
    console.log('Имя: ' + teachers[i].name + ', Возраст: ' + teachers[i].age);
}

//6
const primes = [2, 3, 5];
primes.push(7);
console.log(primes);

//7
const amounts = [10, 20, 30, 40];
const increased = amounts.map((amount) => amount * 2);
console.log(increased);

//8
const participantAges = [16, 21, 17, 19, 15];
const eligible = participantAges.filter((age) => age >= 18);
console.log(eligible);

//9
const products = [
    { name: 'телефон', price: 25000 },
    { name: 'ноутбук', price: 50000 },
    { name: 'планшет', price: 15000 },
];
const productName = 'ноутбук';
const product = products.find((p) => p.name === productName);
if (product) {
    console.log('Найден: ' + product.name + ', цена: ' + product.price + ' руб');
}
if (!product) {
    console.log('Товар не найден');
}

//10
const randomNumbers = [7, -2, 14, 0, -5, 9];
const processed = randomNumbers.filter((num) => num > 0).map((num) => num * 4);
console.log(processed);

//11
const toSort = [33, 5, 17, 2];
const defaultSorted = [...toSort].sort();
console.log('По умолчанию:', defaultSorted);
const ascSorted = [...toSort].sort((a, b) => a - b);
console.log('Возрастание:', ascSorted);
const descSorted = [...toSort].sort((a, b) => b - a);
console.log('Убывание:', descSorted);
//

//2
const items = [
    { name: 'Смартфон', price: 25000, inStock: true },
    { name: 'Планшет', price: 35000, inStock: true },
    { name: 'Умные часы', price: 8000, inStock: false },
    { name: 'Ноутбук', price: 65000, inStock: true },
    { name: 'Беспроводные наушники', price: 6000, inStock: true }
];

const stockItems = items.filter(product => product.inStock === true);
console.log('В наличии следующие товары:');
stockItems.forEach(product => {
    console.log(`• ${product.name} - ${product.price}₽`);
});

const costArray = stockItems.map(product => product.price);
console.log('Цены: ' + costArray.join('; '));

let result = 0;
for (let index = 0; index < stockItems.length; index++) {
    result = result + stockItems[index].price;
}
console.log('Суммарная стоимость: ' + result + '₽');

const orderedItems = [...stockItems].sort((item1, item2) => item1.price - item2.price);
console.log('По возрастанию цены:');
orderedItems.forEach(item => {
    console.log(`• ${item.name} - ${item.price}₽`);
});
//

//
async function loadContent() {
    try {
        const apiCall = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (apiCall.status !== 200) {
            throw new Error(`Ошибка: ${apiCall.status}`);
        }
        const content = await apiCall.json();
        return content;
    } catch (err) {
        console.error('Сбой загрузки материалов:', err);
        return [];
    }
}

async function getContentItem(itemId) {
    try {
        const apiCall = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
        if (apiCall.status !== 200) {
            throw new Error(`Ошибка: ${apiCall.status}`);
        }
        const item = await apiCall.json();
        return item;
    } catch (err) {
        console.error('Ошибка получения материала:', err);
        return null;
    }
}

async function loadPeople() {
    try {
        const apiCall = await fetch('https://jsonplaceholder.typicode.com/users');
        if (apiCall.status !== 200) {
            throw new Error(`Ошибка: ${apiCall.status}`);
        }
        const people = await apiCall.json();
        return people;
    } catch (err) {
        console.error('Сбой загрузки людей:', err);
        return [];
    }
}

async function workflow() {
    console.log('>>> МАТЕРИАЛЫ');
    const contentItems = await loadContent();
    if (contentItems.length > 0) {
        const primaryItem = contentItems[0];
        console.log('Первый материал:');
        console.log('ИД:', primaryItem.id);
        console.log('Заголовок:', primaryItem.title);
        console.log('Материал:', primaryItem.body);
        console.log('---');
    }
    console.log('>>> МАТЕРИАЛ ПО ИДЕНТИФИКАТОРУ');
    const specificItem = await getContentItem(1);
    if (specificItem) {
        console.log('Материал 1:', specificItem.title);
    }
    console.log('---');
    console.log('>>> ЛЮДИ С ДЛИННЫМИ ИМЕНАМИ');
    const peopleList = await loadPeople();
    const filteredPeople = peopleList.filter(person => person.name.length > 10);
    filteredPeople.forEach(person => {
        console.log('Человек:', person.name);
    });
    console.log('---');
    console.log('>>> ТЕКСТЫ МАТЕРИАЛОВ');
    const allContent = await loadContent();
    const contentTexts = allContent.map(item => item.body);
    console.log('Тексты материалов:', contentTexts);
    console.log('---');
    console.log('>>> ПОИСК МАТЕРИАЛА');
    const searchedItem = allContent.find(item => item.title === "qui est esse");
    if (searchedItem) {
        console.log('Найденный материал:');
        console.log('ИД:', searchedItem.id);
        console.log('Заголовок:', searchedItem.title);
        console.log('Содержание:', searchedItem.body);
    } else {
        console.log('Материал не обнаружен');
    }
}
workflow();
//

//
async function obtainContentItems() {
    try {
        const networkResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const contentItems = await networkResponse.json();
        return contentItems;
    } catch (networkError) {
        console.error('Network request failed:', networkError);
        return [];
    }
}

async function analyzeContent() {
    const contentCollection = await obtainContentItems();

    const userIdentifiers = contentCollection.map(content => content.userId);
    
    console.log('Complete list of user IDs:');
    userIdentifiers.forEach((userId, idx) => {
        process.stdout.write(`${userId}${idx < userIdentifiers.length - 1 ? ', ' : ''}`);
    });
    const distinctUsers = [...new Set(userIdentifiers)].sort();
    console.log('Distinct users who created content:');
    distinctUsers.forEach(user => {
        console.log(`👤 User ${user}`);
    });
    console.log('Content distribution analysis:');
    distinctUsers.forEach(user => {
        const userContentCount = userIdentifiers.filter(id => id === user).length;
        const percentage = ((userContentCount / userIdentifiers.length) * 100).toFixed(1);
        console.log(`User ${user}: ${userContentCount} items (${percentage}%)`);
    });
    console.log(`Summary Report:
    Total content items: ${contentCollection.length}
    Active users: ${distinctUsers.length}
    Average items per user: ${(contentCollection.length / distinctUsers.length).toFixed(1)}`);
}
analyzeContent();
//