
/* 본 스크립트는 비디오페이지를 컨트롤하기 위한 스크립트입니다 */

// 비디오페이지 좌우측에 있는 이전,다음버튼의 변수를 지정합니다
var prevBtn = document.querySelector('section.video > .prev-btn'),
    nextBtn = document.querySelector('section.video > .next-btn');
   
// 비디오들을 묶고있는 wrap을 변수로 지정합니다
var boxWrap = document.querySelector('section.video > .video-wrap > .video-mask > .box-wrap');
// 슬라이드를 움직이기 위하여 카운트 변수를 지정하여 초기값 0을 저장합니다.
var count=0; 

// 다음버튼을 눌렀을 때 작동하는 함수입니다
function MoveNext(){
    // 다음버튼을 누르면 카운트가 1씩 증가합니다
    count++;
    // 조건문을 통해 각 카운트값에 따른 boxWrap변수의 left값을 조절하여 위치를 이동시켰으며 카운트가 3이되어 더 이상 갈 곳이 없을 때 처음으로 되돌아가도록했습니다.
    if(count == 0){
        boxWrap.style.left = "50%";
    }
    if(count == 1){
        boxWrap.style.left = "19%";
    }
    if(count == 2){
        boxWrap.style.left = "-12%";
    }
    if(count == 3){
        count = 0;
        boxWrap.style.left = "50%";
    }
}
// 이전버튼을 눌렀을 때 작동하는 함수입니다
function MovePrev(){
    // 이전버튼을 누르면 카운트가 1씩 감소합니다
    count--;
    // 조건문을 통해 각 카운트값에 따른 boxWrap변수의 left값을 조절하여 위치를 이동시켰으며 카운트가 -1이되어 더 이상 갈 곳이 없을 때 마지막으로 가도록했습니다.
    if(count == 0){
        boxWrap.style.left = "50%";
    }
    if(count == 1){
        boxWrap.style.left = "19%";
    }
    if(count == 2){
        boxWrap.style.left = "-12%";
    }
    if(count == -1){
        boxWrap.style.left = "-12%";
        count = 2;
    }
}

// 이전, 다음버튼에 클릭 이벤트리스너를 추가합니다
prevBtn.addEventListener('click', MovePrev);
nextBtn.addEventListener('click', MoveNext);
