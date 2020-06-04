var mouseEl = document.getElementById("mouse");
// mouse id명을 쓰고있는 요소 노드를 반환
mouseEl.addEventListener("mouseenter", onMouseEnter);
mouseEl.addEventListener("mouseleave", onMouseLeave);
function onMouseEnter(e) {
  // mouseover와 기능은 동일하지만
  // mouseover는 해당 영역에서 자식 요소의 영역으로 넘어가면 이벤트가 끝난다
  // mouseenter는 mouseover의 확장된 상태 - 자식요소로 영역이 넘어가면 이벤트가 유지된다
}
function onMouseLeave(e) {
  // mouseout과 기능은 동일하지만
  // mouseout은 해당 영역에서 자식 요소의 영역으로 넘어가면 이벤트가 끝난다
  // mouseout는 mouseleave의 확장된 상태 - 자식요소로 영역이 넘어가면 이벤트가 유지된다
}

mouseEl.addEventListener("mousedown", onMouseDown);
mouseEl.addEventListener("mousemove", onMouseMove);
mouseEl.addEventListener("mouseup", onMouseUp);
// 드래그 기능을 만들 때 사용
var _isDrag = false;
function onMouseDown(e) {
  if (!_isDrag) {
    _isDrag = true;
  }

  console.log(Down);
  //요소의 영역에 마우스 커서가 눌릴 때
}
function onMouseMove(e) {
  if (!_isDrag) return;

  console.log(Move);
  //요소의 영역에 마우스 커서가 움직일 때
}
function onMouseUp(e) {
  if (_isDrag) {
    _isDrag = false;
  }
  console.log(Up);
  //요소의 영역에 마우스 커서가 눌린 후 뗄 때
}

var radioEls = document.querySelectorAll("input[name=select_number]");
// radio input 요소 목록으로 반환
for (var i = 0; i < radioEls.length; i++) {
  radioEls[i].addEventListener("change", function (e) {
    console.log("change");
    console.log(e.currentTarget.value);
    // radio, checkbox에서 사용
    // 같은 name 속성을 가지고 있는 요소에서 value가 변경될 때 발생하는 이벤트
  });
}
