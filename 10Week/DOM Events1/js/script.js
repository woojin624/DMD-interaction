// DOM Event

// Click Event
// 요소에 클릭이 발생될 떄
// 요소 노도를 찾고, 이벤트를 추가하고, 핸들로 콜백함수를 정의
var divEl = document.getElementById("div");
var _isClick = false; // 클릭이 된 상태인지 체크하는 Boolean변수
function onClickDiv(evt) {
  evt.preventDefault();

  divEl.classList.remove("red", "black", "blue");

  if (!_isClick) {
    divEl.classList.add("red", "blue");
    // _isClick = true;
  } else {
    divEl.classList.add("black");
    // _isClick = false;
  }
  _isClick = !_isClick;
}
divEl.addEventListener("click", onClickDiv);

// Double Click Event
// dblclick

function onDblClickDiv(e) {
  e.preventDefault();
  console.log("dblclick");
  divEl.classList.toggle("style2");
  divEl.removeEventListener("dblclick", onDblClickDiv);
  // 요소노드에 이벤트를 제거하는 방법
  // 더블클릭이 한번만 발생
}
divEl.addEventListener("dblclick", onDblClickDiv);

var divEls = getElemensByTagName("div");
//console.log(divEls);
// HTMLCollection [요소1,요소2,...]을 배열로 처리해주는 컨버팅 과정
//console.log(Array.prototype.slice.call(divEls));
// [요소1,요소2,...]

divEls = Array.prototype.slice.call(divEls);

for (var i = 0; i < divEl.length; i++) {
  divEls[i].addEventListener("mouseover", onMouseOverDiv);
  divEls[i].addEventListener("mouseout", onMouseOutDiv);
}
function onMouseOverDiv(e) {
  console.log("mouse over");
}
function onMouseOutDiv(e) {
  console.log("mouse out");
}

var mouseEls = document.getElementsByClassName("mouse");
mouseEls = Array.prototype.slice.call(mouseEls);
for (var i = 0; i < divEl.length; i++) {
  mouseEls[i].addEventListener("mouseover", onMouse);
  mouseEls[i].addEventListener("mouseout", onMouse);
}
function onMouse(e) {
  console.log(e.type);
}
