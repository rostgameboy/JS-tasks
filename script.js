function for12(){
let N, a = 1.1, b = 1
N = +prompt("введите число")
for(let i = 1; i <= N; ++i){
    b = b * a;
    a = a + 0.1;
}
alert(b)
}

function if12(){
a = Number(prompt("введите a"))
b = Number(prompt("введите b"))
c = Number(prompt("введите с"))
if ((a > b) && (b > c)) {
    alert(c)
}
if ((b > c) && (c > a)) {
    alert(a)
}
if ((c > a) && (a > b)) {
    alert(b)
}
if ((c > b) && (b > a)) {
    alert(a)
}
if ((a > c) && (c > b)) {
    alert(b)
}
if ((b > a) && (a > c)) {
    alert(c)
}
}

function if13(){
a = Number(prompt("введите a"))
b = Number(prompt("введите b"))
c = Number(prompt("введите c"))

if ((a > b) && (b > c)) {
    alert(b)
}
if ((b > c) && (c > a)) {
    alert(c)
}
if ((c > a) && (a > b)) {
    alert(a)
}
if ((c > b) && (b > a)) {
    alert(b)
}
if ((a > c) && (c > b)) {
    alert(c)
}
if ((b > a) && (a > c)) {
    alert(a)
}
}

function if14(){
a = Number(prompt("введите a"))
b = Number(prompt("введите b"))
c = Number(prompt("введите с"))

if ((a > b) && (b > c)) {
    alert(c)
    alert(a)
}
if ((b > c) && (c > a)) {
    alert(a)
    alert(b)
}
if ((c > a) && (a > b)) {
    alert(b)
    alert(c)
}
if ((c > b) && (b > a)) {
    alert(a)
    alert(c)
}
if ((a > c) && (c > b)) {
    alert(b)
    alert(a)
}
if ((b > a) && (a > c)) {
    alert(c)
    alert(b)
}
}

function for13(){
let N, y, i, s
s = 1.1
y = 1.1
N = +prompt("введите число которое >0")

for(i = 1; i < N; i++){
    y = y + 0.1
    s = s + y
}
alert(s)
}

function series1(){
    let a = 0
    let l = []
    for (let i = 0; i < 10; i++){
        l [i] = Math.random() * 10
        console.log(l[i])
        a = a + l
    }
    alert(a)
}

function series3(){
    let a = 0
    let l = []
    for (let i = 0; i < 10; i++){
        l [i] = Math.random() * 10
        console.log(l[i])
        a = a + l / 10
    }
    alert(a)
}

function proc7(){
    let p, i, k, S

    p = prompt("введите число")
    S = p
    while (p>0){
        S = p
        S = S%10
        p = p/10
        p = Math.trunc(p)
        alert(S)
    }
}

function proc8(){
    let k, d, z="", a
    k = prompt("введите k")
    d = prompt("введите первое число от 0 до 9")
    d1 = prompt("введите второе число от 0 до 9")
    let addRightDigits = (k, d)=>{
        z = k + d
        return z
    };
    a = addRightDigits(k, d)
    alert(a)
    alert(addRightDigits(a, d1))
}

function proc9(){
    let k, d, z="", a
    k = prompt("введите k")
    d = prompt("введите первое число от 0 до 9")
    d1 = prompt("введите второе число от 0 до 9")
    let AddLeftDigits = (k, d)=>{
        z = d + k
        return z
    };
    a = AddLeftDigits(k, d)
    alert(a)
    alert(AddRighyDigits(a, d1))
}