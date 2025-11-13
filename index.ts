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