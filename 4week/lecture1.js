// console.log("외부 JavaScript 로드");

/*
for - 반복문.
*/

/*
for (사용할 변수(i); 변수와의 조건(i < 5); 변수의 증감(i++, i--)){
  console.log(i);
}
*/

// 1)
// var i = 0;
// for (i; i < 5; i++) {
//   console.log(i);
// }

// var i = 0;
// for (i; i < 5; ++i) {
//   console.log(i);
// }

// 2)
// var i = 4;
// for (i; i >= 0; i--) {
//   console.log(i);
// }

// var i = 4;
// for (i; i >= 0; --i) {
//   console.log(i);
// }

/*
var _arr = ["a", "b", "c", "d", "e"];
for (var i = 0; i < ' '; i++) {
  console.log('      ');
}
*/

// 1)
// var _arr = ["a", "b", "c", "d", "e"];
// for (var i = 0; i < 5; i++) {
//   console.log(i + " : " + _arr[i]);
// }

// 2)
// var _say = ["Hello", "My", "Name", "is", "rh"];
// var result = "";
// for (var i = 0; i < _say.length; i++) {
//   if (i !== 0) {
//     result += " ";
//   }
//   result += _say[i];
//   if (i === _say.length - 1) {
//     result += ".";
//   }
// }
// console.log(result);

/*
function - 함수.
재사용을 위해 코드 블록을 감싸는 방법.

작업을 수행하거나 값을 계산하는 등의 역할을 수행하는 코드를 포함.
호출을 통해 내부의 코드를 동작시킨다.
유효범위를 가지고 있으며, 실행 시 값을 반환하도록 되어 있다.
*/

/*
// 함수의 생성.
function name() {
  // 코드 작성.
}
// 함수의 호출.
name();
*/

/*
function name(param) {
  // 내부에서 변수의 사용이 가능하다.
}
name();
*/

/*
var a = 20,
  b = 30,
  c = 10;
console.log(c);
function addNumbers() {
  c = b + a;
}
console.log(c); // 함수 미호출.
addNumbers();
console.log(c); // 함수 호출이 되어야만 변형이 가능하다.
*/

/*
scope - 유효범위.
코드의 참조 범위.
변수와 매개변수의 접근성과 생존 기간을 의미.

전역변수(범위) / 지역변수(범위)로 구분.
전역범위는 스크립트 내의 모든 곳이 참조 가능.
지역범위는 지정된 함수 내부에서만 참조 가능.
*/

/*
var global = "global"; // 전역 변수
var a = "My";
var b = "Name";
function local() {
  var local = "local"; // 지역 변수.
  var a = "Hello";
  var b = "World";
  console.log(a + " " + b);
}
local();
console.log(a + " " + b);
*/

/*
method - 메서드.
작업을 수행하거나 값을 연산하는 등의 역할을 수행하는 코드를 포함하고 있는 브럭단위의 뭉치.

함수와 의미적으로 동일하나, 객체에 의존되어 있는 함수를 칭함.
*/

/*
// function 함수.
function sayHello() {
  console.log("Hello~");
}
sayHello();

// method 메서드.
var _obj = {
  sayHello: function() {
    console.log("Hello!");
  }
};
_obj.sayHello();
*/

/*
함수의 종류.

1. 명시적 함수.
2. 익명 함수(함수 생성자).
3. 함수 리터럴(함수식).
*/

/*
// 명시적 함수.
function sayHello(name) {
  return "Hello " + name;
}
var say1 = sayHello("World");
var say2 = sayHello("Everyone");
console.log(say1);
console.log(say2);
*/

/*
// 익명 함수(함수 생성자).
var sayHello = new Function("name", "return 'Hello ' + name");
var say1 = sayHello("World");
console.log(say1);
*/

/*
// 함수 리터럴(함수식).
var sayHello = function(name) {
  return "Hello " + name;
};
var say1 = sayHello("World");
console.log(say1);
*/

/*
함수 작성법.

일반적 함수는 선언식.
메서드 함수는 표현식.
*/

/*
// 선언식.
function sayHello() {
  console.log("Hello~");
}
sayHello();

// 표현식.
var sayHello = function() {
  console.log("Hello!");
};
sayHello();
*/

/*
함수 호출(실행).

함수, 메서드 모두 동일하게 () 를 이용하여 호출(실행)함으로써 내부의 코드를 동작시킴.
*/

/*
parameter - 매개변수.

변수의 한 종류로, 함수에 전달되는 여러 데이터 중 하나를 의미함.
매개변수의 목록은 함수를 정의하는 부분에 포함되며, 매 함수 호출시 함수에 주입된다.
*/

/*
function sendMessage(msg) {
  // 정의하는 부분에 매개변수를 포함
  console.log(msg);
}
sendMessage();
*/

/*
argument - 전달인자.

함수에 정의된 매개변수를 통해 전달되는 실제 값.
*/

/*
function sendMessage(msg) {
  console.log(msg);
}
sendMessage("Hello"); // 매개변수 msg 의 전달인자(값) 으로 Hello 를 할당.
*/

/*
매개변수 유효성.

함수에 전달 시 사용되는 매개변수는 실행시점에 유효할 수도 유효하지 않을 수도 있다.
코드 실행 시 유효성을 검증할 필요가 있다.
*/

/*
function sendMessage(msg) {
  if (typeof msg === "undefined") {
    console.log("No Message");
  } else {
    console.log(msg);
  }
}
sendMessage();
*/

/*
매개변수의 활용.

매개변수는 어떤 값도 전달인자로 대입될 수 있으며, 전달할 수 있는 매개변수는 다수로 사용이 가능하다.

정의된 매개변수의 수보다 많은 수의 값을 전달할 경우도 문제없이 실행 가능.
정의된 수보다 전달인자가 적을 경우 값이 없는 매개변수는 undefined 가 할당된다.
*/

/*
function sum(number1, number2) {
  console.log(number1 + number2);
}
sum(1, 2); // 3
sum(1, 2, 3, 4, 5, 6); // 3
sum(1);
// NaN - number1 의 인자가 1이고 number2 의 인자가 없기 때문에 undefined 가 할당.
// 1 + undefined 이므로 수식이 성립되지 않음(NaN).
*/

/*
함수 반환.

함수는 실행시 반드시 결과를 반환한다.

return 문을 이용하여 반환할 값을 반환하며,
return 문이 없을 경우, undefined 를 반환한다.
*/

/*
function sumPrices(price1, price2) {
  var sum = price1 + price2;
}
var price = sumPrices(10, 20);
console.log(price); // undefined
*/

/*
function sumPrices(price1, price2) {
  var sum = price1 + price2;
  return sum;
}
var price = sumPrices(10, 20);
console.log(price); // 30
*/

/*
function getSize(a) {
  if (a > 30) {
    return "large";
  } else {
    return "medium";
  }
}
var size = getSize(30, 32);
console.log(size);
*/
