var prevBtn = document.querySelector('section#albums > .prev-btn'),
    nextBtn = document.querySelector('section#albums > .next-btn'),
    
    albumTray = document.querySelector('section#albums > .albums-wrap > .tray-wrap '),

    //앨범 앞면 변수들
    allAlbum = document.querySelectorAll('div.album > div.front');
    firstAlbum = document.querySelector('div.first > div.album > div.front'),
    secondAlbum = document.querySelector('div.second > div.album > div.front'),
    thirdAlbum = document.querySelector('div.third > div.album > div.front'),
    fourthAlbum = document.querySelector('div.fourth > div.album > div.front'),
    fifthAlbum = document.querySelector('div.fifth > div.album > div.front'),

    //앨범 CD변수들
    allCD = document.querySelectorAll('.album > .paper > .cd'),
    firstCD = document.querySelector('div.first > .album > .paper > .cd'),
    secondCD = document.querySelector('div.second > .album > .paper  > .cd'),
    thirdCD = document.querySelector('div.third > .album > .paper > .cd'),
    fourthCD = document.querySelector('div.fourth > .album > .paper > .cd'),
    fifthCD = document.querySelector('div.fifth > .album > .paper > .cd'),

    //앨범 버튼들
    playBtnEls = document.querySelectorAll('.album > .paper > .playBtn'),
    pauseBtnEls = document.querySelectorAll('.album > .paper > .pauseBtn'),
    firstPlayBtn = document.querySelector('div.first > .album > .paper > .playBtn'),
    firstPauseBtn = document.querySelector('div.first > .album > .paper > .pauseBtn'),
    secontPlayBtn = document.querySelector('div.second > .album > .paper > .playBtn'),
    secontPauseBtn = document.querySelector('div.second > .album > .paper > .pauseBtn'),
    thirdPlayBtn = document.querySelector('div.third > .album > .paper > .playBtn'),
    thirdPauseBtn = document.querySelector('div.third > .album > .paper > .pauseBtn'),
    fourthPlayBtn = document.querySelector('div.fourth > .album > .paper > .playBtn'),
    fourthPauseBtn = document.querySelector('div.fourth > .album > .paper > .pauseBtn'),
    fifthPlayBtn = document.querySelector('div.fifth > .album > .paper > .playBtn'),
    fifthPauseBtn = document.querySelector('div.fifth > .album > .paper > .pauseBtn');
console.log(playBtnEls);
var count=0;
function RotatePrev(){
    count++;
    var rotateAngle = 72 * count;
    albumTray.style.transform = "translate(-50%, -14%) rotateX(102deg) rotateZ(" + rotateAngle + "deg) translateZ(0px)";
    for(var i = 0; i < allAlbum.length; i++){
        allAlbum[i].classList.remove('albumOpen');
        allCD[i].classList.remove('rotateCD');
        pauseBtnEls[i].style.display = "none";
        playBtnEls[i].style.display = "block";
    }
}
function RotateNext(){
    count--;
    var rotateAngle = 72 * count;
    albumTray.style.transform = "translate(-50%, -14%) rotateX(102deg) rotateZ(" + rotateAngle + "deg) translateZ(0px)";
    for(var i = 0; i < allAlbum.length; i++){
        allAlbum[i].classList.remove('albumOpen');
        allCD[i].classList.remove('rotateCD');
        pauseBtnEls[i].style.display = "none";
        playBtnEls[i].style.display = "block";
    }
}
function openAlbum(e){
    e.currentTarget.classList.toggle('albumOpen');
}


playBtnEls = Array.prototype.slice.call(playBtnEls);
pauseBtnEls = Array.prototype.slice.call(pauseBtnEls);
allCD = Array.prototype.slice.call(allCD);
// 플레이버튼 클릭시 실행함수
function playMusic(e){
    var els = e.currentTarget, id = playBtnEls.indexOf(els);
    console.log(id);
    allCD[id].classList.add('rotateCD');
    playBtnEls[id].style.display = "none";
    pauseBtnEls[id].style.display = "block";
}
// 정지버튼 클릭시 실행함수
function pauseMusic(e){
    var els = e.currentTarget, id = pauseBtnEls.indexOf(els);
    console.log(id);
    allCD[id].classList.remove('rotateCD');
    pauseBtnEls[id].style.display = "none";
    playBtnEls[id].style.display = "block";
}
// CD 가운데 플레이 버튼과 정지버튼을 for문으로 이벤트리스너 추가
for(var i = 0; i < playBtnEls.length; i++){
    playBtnEls[i].addEventListener("click", playMusic);
}
for(var i = 0; i < pauseBtnEls.length; i++){
    pauseBtnEls[i].addEventListener("click", pauseMusic);
}







// function firstPlayMusic(e){
//     firstCD.classList.add('rotateCD');
//     e.currentTarget.style.display = "none";
//     firstPauseBtn.style.display = "block";
// }
// function firstPauseMusic(e){
//     firstCD.classList.remove('rotateCD');
//     e.currentTarget.style.display = "none";
//     firstPlayBtn.style.display = "block";
// }

firstAlbum.addEventListener("click", openAlbum);
secondAlbum.addEventListener("click", openAlbum);
thirdAlbum.addEventListener("click", openAlbum);
fourthAlbum.addEventListener("click", openAlbum);
fifthAlbum.addEventListener("click", openAlbum);

prevBtn.addEventListener('click', RotatePrev);
nextBtn.addEventListener('click', RotateNext);

// firstPlayBtn.addEventListener("click", firstPlayMusic);
// firstPauseBtn.addEventListener("click", firstPauseMusic);
// secondPlayBtn.addEventListener("click",secondPlayMusic);
// secondPauseBtn.addEventListener("click",secondPauseMusic);
// thirdPlayBtn.addEventListener("click", thirdPlayMusic);
// thirdPauseBtn.addEventListener("click", thirdPauseMusic);
// fourthPlayBtn.addEventListener("click", fourthPlayMusic);
// fourthPauseBtn.addEventListener("click", fourthPauseMusic);
// fifthPlayBtn.addEventListener("click", fifthPlayMusic);
// fifthPauseBtn.addEventListener("click", fifthPauseMusic);