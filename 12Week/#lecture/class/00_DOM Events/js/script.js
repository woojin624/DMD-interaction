// load
// event
var divEl = document.querySelector("#div"),
    pEl = document.querySelector("#p");

function onClickDiv(e) {
    e.preventDefault();
    console.log("Div Click");
}
function onClickP(e) {
    e.preventDefault();
    // e.preventDefault(); - 기본 이벤트를 방지하는 메서드
    e.stopPropagation();
    // e.stopPropagation(); - 버블링을 방지하는 메서드
    // Div와 p요소에 모두 click 이벤트가 추가되어 있을 때
    // 하위 요소인 p요소를 클릭할 때 div도 같이 클릭 이벤트가 발생한다 (버블링)
    // 버블링을 방지하고 p요소가 클릭될 때 부모요소인 div요소까지 전파되지 않도록 방지할 수 있다
    // event.stopPropagation();
    console.log("P Click");
}

divEl.addEventListener("click", onClickDiv);
pEl.addEventListener("click", onClickP);


// splash의 랜덤한 이미지 경로를 받을 수 있다.
// https://source.unsplash.com/random

var imgEl = document.querySelector("img"),
    image = new Image(),
    imgPath = "https://source.unsplash.com/random";


function onLoadImage(e) {
    console.log("loaded");
    //로드한 이미지의 해상도
    var el = e.currentTarget;
    //원본 이미지의 width,height
    console.log(el);
    console.log(el.naturalWidth, el.naturalHeight);
    console.log(image.naturalWidth, image.naturalHeight);
    image.style.width = el.naturalWidth + "px";
    image.style.height = el.naturalHeight + "px";

    // 1차 함수를 이용해서 사이즈를 같은 비율로 줄임.
    // x : y = a : b
    // 지정하고자하는 width 값 : 구하고자하는 height = 원본이미지의 width : 원본이미지의 height
    // y = x * b / a;
    // x = y * a / b;
    var width = 1000,
        height = Math.round(width * el.naturalHeight / el.naturalWidth);
    image.style.width = width + "px";
    image.style.height = height + "px";

    document.body.appendChild(image);
}
// 이미지를 로드하는 이벤트
image.src = imgPath;
image.addEventListener("load", onLoadImage);