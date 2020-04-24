// console.log("외부 JavaScript 로드");

/*
논리 연산자.
*/

/*
var a = 0;
var b = 1;
var c = 2;
var d = 2;

// && - and
if (a !== b && c === d) {
  console.log("두 조건 중 모두 일치합니다.");
}

// || - or
if (a === b || c === d) {
  console.log("두 조건 중 하나는 일치합니다.");
}
*/

/*
switch 조건문.
*/

/*
var greeting = 0;
switch (greeting) {
  case 0:
    console.log("Hello");
    break;
  case 1:
    console.log("World");
    break;
  case 2:
    console.log(":^)");
    break;
  default:
    console.log("X(");
    break;
}
*/

/*
while 반복문.
*/

/*
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var i = 9;
while (i >= 0) {
  console.log(i);
  i--;
}
*/

/*
Array - 배열 객체.

한 번에 두가지 이상의 값을 포함할 수 있는 객체.
사용빈도가 아주 높다.
*/

/*
var a = 10;
var b = "apple";
var c = null;
var d = a;
var _array = [a, b, c, d];
console.log(_array[3]);

function getMembers() {
  return ["rh", "june", "mind"];
}
var members = getMembers();
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);
*/

/*
배열의 추가 / 제거 / 정렬.

.unshift(); .push(); .shift() .pop();
.concat() .splice(); .sort(); .reverse();
*/

/*
var _heros = ["Iron Man", "Hulk", "Thor", "Doctor Strange"];
_heros.unshift("Captain America"); // 배열의 첫 부분에 추가.
_heros.push("Spider-Man"); // 배열의 마지막 부분에 추가.
_heros.concat(["Black Panther", "Ant-Man"]); // 배열의 마지막 부분에 배열 추가.
_heros = _heros.concat(["Black Panther", "Ant-Man"]); // 단, 새로운 배열 값으로 할당해야 함.
_heros.splice(2, 0, "Vision");
_heros.splice(2, 1, "Loki");
// .splice(a(start), b(delete count), [value(string)]);
// 배열의 a 번째에 b 의 수만큼 제거 후 value 추가.
_heros.shift(); // 배열의 첫 부분의 값 제거.
_heros.pop(); // 배열의 마지막 부분의 값 제거.
console.log(_heros);
*/

/*
var _heros = ["Iron Man", "Hulk", "Thor", "Doctor Strange"];
_heros.sort(); // 알파벳 순서로 정렬.
_heros.reverse(); // 배열의 값을 반대로 정렬.
console.log(_heros);
*/

/*
배열의 반복문.
for
for _ in
*/

/*
function getMembers() {
  return ["rh", "june", "mind"];
}
var members = getMembers();
for (var i = 0; i < members.length; i++) {
  console.log(members[i]);
}

var _heros = ["Iron Man", "Hulk", "Thor", "Doctor Strange"];
for (var name in _heros) {
  console.log(name + " : " + _heros[name]);
}

var _person = {
  name: "김용원",
  job: "교수"
};
for (var key in _person) {
  console.log(key + " : " + _person[key]);
}
*/

/*
Math - 수학.
*/
/*
Math
Math.pow - 제곱
Math.round - 반올림
Math.ceil - 올림
Math.floor - 내림
Math.sqrt - 제곱근
Math.random - 랜덤
Math.abs - 절대값
Math.max - 최대값
Math.min - 최소값
*/

/*
console.log(Math.pow(3, 2)); // 3의 2 제곱
console.log(Math.round(1.4)); // 1.4의 반올림
console.log(Math.ceil(1.2)); // 1.2의 올림
console.log(Math.floor(1.2)); // 1.2의 내림
console.log(Math.sqrt(9)); // 9의 제곱근
console.log(Math.random()); // 0 ~ 1.0 사이의 랜덤한 숫자
console.log(100 * Math.random());
console.log(Math.round(100 * Math.random()));
console.log(Math.abs(-100 + 50));
console.log(Math.max(0, 10));
console.log(Math.min(0, -10));
console.log(Math.max.apply(null, [0, 2, 3, 4, 5]));
console.log(Math.min.apply(null, [-5, -4, -3, -2, -1, 0]));
*/

/*
apply

함수가 호출될 때, this 객체에 값을 할당.
*/

// var fruit = { apple: 1000, orange: 2000, lemon: 3000, mango: 4000 };

/*
// 매개변수 사용 시.
function sum(fruit) {
  var result = 0;
  for (var key in fruit) {
    result += fruit[key];
  }
  return result;
}
console.log(sum(fruit));
*/

/*
// apply 적용 시.
function sum() {
  var result = 0;
  for (var key in this) {
    result += this[key];
  }
  return result;
}
console.log(sum.apply(fruit));
*/
