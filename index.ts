console.log(1)
//Практика 1
let string: string ='Privet';
let nomer: number=69; 
let shtoto: boolean=false;

let variable: any = 5;
variable = "текст";
variable = true;
let empty: null = null;
function show(): void{
    console.log("...");
}
show();
// Практика 2
let count: number=0;
console.log(count);
count=99;
console.log(count);
// Практика 3
let a: number = 25;
let b: number = 4;
let sum: number = a + b;
if (sum%2===0) {
    console.log("Число " + sum + " чётное");
}
if (sum%2!=0) {
    console.log("Число " + sum + " нечётное");
}

let sc: number=0;
sc+=1;
sc+=1;
sc+=1;
sc-=1;
sc-=1;
console.log(sc);

let wallet: number=1000;
wallet+=200;
wallet*=0.7;
wallet/=2;
console.log(wallet);
// Практика 4
const speed: number=80;
const isRoadClear: boolean=false;
if (speed<=60||!isRoadClear){
console.log('Можно ехать');
}
if (speed>=80 && isRoadClear) {
console.log('Опасно');
}

let hk: boolean = true;
let knowsPassword: boolean = false;
if (hk&&knowsPassword) {
    console.log("Полный доступ");
}
if ((hk&&!knowsPassword)||(!hk&&knowsPassword)){
    console.log("Ограниченный доступ");
}
if (!hk&&!knowsPassword){
    console.log("Доступ запрещён");
}
// Практика 5
let sum1=0;
for (let i=1;i<=10;i++){
    sum1+=i;
}
console.log(sum1);

let A=5;
let res=1;
for (let i=1;i<=10;i++){
    res=A*i;
    console.log(A+"×"+i+"="+res);
}

let n=6;
let fac=1;
for (let i=1;i<=n;i++){
    fac*=i;
}
console.log(fac);

//Практика Функции
//1
function add(a:number,b:number):number{
    return a + b;
}
console.log(add(-2, 1));
console.log(add(264, 35));
console.log(add(3, -2));

//2
function greet(name: string = "Имя") {
    console.log("привет, " + name + "!");
}
greet("мужчины");

//3
function isEven(num:number):boolean{
    return num%2===0;
}
console.log(isEven(23));
console.log(isEven(56));

//4
function sq(num:number):number{
    return num*num;
}
console.log(sq(34));
console.log(sq(7));

//5
function sravn(a: number, b: number): string {
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
let Age:number=21; 
if (Age<18){
    console.log('возраст не подходит!');
}
if (Age>=18){
    console.log('вы нужного возраста!');
    for (let a=1;a<=10;a++){
        console.log(Age+' x '+a,'= '+Age*a);
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
const students: string[] = ['alex', 'maria', 'oleg'];
const scores: number[] = [85, 92, 78];
const statuses: boolean[] = [true, false, true];

//2
const colors: string[] = ['красный', 'зеленый', 'синий'];
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
type Person = {
    name: string;
    age: number;
}
const person: Person = {
    name: 'софия',
    age: 24
}
console.log(person);

//5
interface Teacher {
    name: string;
    age: number;
}
const teachers: Teacher[] = [
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
interface Product {
    name: string;
    price: number;
}
const products: Product[] = [
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

//1
type Goods = {
    name: string;
    price: number;
    inStock: boolean;
};
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
interface ArticleData {
    userId: number;
    id: number;
    title: string;
    content: string;
}
interface MemberData {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function retrieveArticles(): Promise<ArticleData[]> {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (request.status !== 200) {
            throw new Error(`Сервер вернул статус: ${request.status}`);
        }
        const articles: ArticleData[] = await request.json();
        return articles;
    } catch (error) {
        console.error('Проблема с загрузкой статей:', error);
        return [];
    }
}

async function fetchArticle(articleId: number): Promise<ArticleData | undefined> {
    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`);
        if (request.status !== 200) {
            throw new Error(`Сервер вернул статус: ${request.status}`);
        }
        const article: ArticleData = await request.json();
        return article;
    } catch (error) {
        console.error('Не удалось получить статью:', error);
        return undefined;
    }
}

async function retrieveMembers(): Promise<MemberData[]> {
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        if (request.status !== 200) {
            throw new Error(`Сервер вернул статус: ${request.status}`);
        }
        const members: MemberData[] = await request.json();
        return members;
    } catch (error) {
        console.error('Ошибка загрузки участников:', error);
        return [];
    }
}

async function startApplication() {
    console.log('=== ЗАГРУЗКА СТАТЕЙ ===');
    const articlesCollection = await retrieveArticles();
    if (articlesCollection.length > 0) {
        const mainArticle = articlesCollection[0];
        console.log('Основная статья:');
        console.log('Номер:', mainArticle.id);
        console.log('Заголовок:', mainArticle.title);
        console.log('Содержимое:', mainArticle.content);
        console.log('---');
    }
    console.log('=== ПОИСК СТАТЬИ ПО НОМЕРУ ===');
    const numberedArticle = await fetchArticle(1);
    if (numberedArticle) {
        console.log('Статья №1:', numberedArticle.title);
    }
    console.log('---');
    console.log('=== УЧАСТНИКИ С РАСШИРЕННЫМИ ИМЕНАМИ ===');
    const membersList = await retrieveMembers();
    const selectedMembers = membersList.filter(member => member.name.length > 10);
    selectedMembers.forEach(member => {
        console.log('Участник:', member.name);
    });
    console.log('---');
    console.log('=== КОЛЛЕКЦИЯ ТЕКСТОВ СТАТЕЙ ===');
    const allArticles = await retrieveArticles();
    const textsCollection = allArticles.map(article => article.content);
    console.log('Все тексты:', textsCollection);
    console.log('---');
    console.log('=== ПОИСК СТАТЬИ ПО ЗАГОЛОВКУ ===');
    const targetArticle = allArticles.find(article => article.title === "qui est esse");
    if (targetArticle) {
        console.log('Обнаружена статья:');
        console.log('Идентификатор:', targetArticle.id);
        console.log('Название:', targetArticle.title);
        console.log('Контент:', targetArticle.content);
    } else {
        console.log('Статья отсутствует в коллекции');
    }
}
startApplication();
//

//
type PublicationRecord = {
    creatorId: number;
    recordId: number;
    headline: string;
    textContent: string;
};

async function retrievePublicationData(): Promise<PublicationRecord[]> {
    try {
        const dataResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const publicationData: PublicationRecord[] = await dataResponse.json();
        return publicationData;
    } catch (exception) {
        console.error('Data retrieval failed:', exception);
        return [];
    }
}

async function processData() {
    const publicationCollection = await retrievePublicationData();

    const creatorIdentifiers = publicationCollection.map(item => item.creatorId);
    
    console.log('Creator IDs extracted from publications:');
    console.log(creatorIdentifiers);
    const uniqueCreators = Array.from(new Set(creatorIdentifiers));
    console.log('Unique creator identifiers:');
    uniqueCreators.forEach(creator => {
        console.log(`Creator #${creator}`);
    });

    console.log('Publication count per creator:');
    uniqueCreators.forEach(creator => {
        const count = creatorIdentifiers.filter(id => id === creator).length;
        console.log(`Creator ${creator}: ${count} publications`);
    });
    console.log('Detailed creator-publication mapping:');
    creatorIdentifiers.forEach((creatorId, index) => {
        console.log(`Publication ${index + 1} → Creator ${creatorId}`);
    });
}
processData();
//