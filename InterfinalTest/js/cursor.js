//커서의 꾸미는 요소들을 변수로 지정합니다
var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEl = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress');

    // 마우스가 움직일 때 작동하는 함수입니다
function onMouseMove(e) {
    // 현재 커서의 위치값으로 posX, posY의 값을 저장합니다
    var posX = e.clientX,
        posY = e.clientY;

    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);
    gsap.to(cursorDotEl, {
        top: posY,
        left: posX,
        duration: 0.5, //
        ease: 'sine.out', //
    });
    gsap.to(cursorBGEl, { top: posY, left: posX, duration: 0.1, ease: 'sine.out' });
    gsap.to(progressEl, { top: posY, left: posX, duration: 0.4, ease: 'sine.out' });
}

// 윈도우에 마우스무브 이벤트리스너를 추가합니다 마우스가 움직일 때 onMouseMove함수를 실행합니다
window.addEventListener('mousemove', onMouseMove);
