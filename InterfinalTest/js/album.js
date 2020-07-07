
/* 본 스크립트는 앨범페이지를 컨트롤하기 위한 스크립트입니다 */

    // 앨범페이지에서 양쪽에 위치한 이전,다음앨범버튼을 변수로 지정합니다
var prevBtn = document.querySelector('section.albums > .prev-btn'),
    nextBtn = document.querySelector('section.albums > .next-btn'),
    
    // 앨범들을 담고있고 이를 회전시킬 변수를 지정합니다
    albumTray = document.querySelector('section.albums > .albums-wrap > .tray-wrap '),

    //앨범 앞면 변수들입니다
    allAlbum = document.querySelectorAll('div.album > div.front');
    firstAlbum = document.querySelector('div.first > div.album > div.front'),
    secondAlbum = document.querySelector('div.second > div.album > div.front'),
    thirdAlbum = document.querySelector('div.third > div.album > div.front'),
    fourthAlbum = document.querySelector('div.fourth > div.album > div.front'),
    fifthAlbum = document.querySelector('div.fifth > div.album > div.front'),

    //앨범 CD변수입니다
    allCD = document.querySelectorAll('.album > .paper > .cd'),

    //씨디 가운데 위치한 플레이버튼과 일시정지버튼입니다
    playBtnEls = document.querySelectorAll('.album > .paper > .playBtn'),
    pauseBtnEls = document.querySelectorAll('.album > .paper > .pauseBtn');

    //재생버튼을 클릭하여 재생시킬 음악을 js를 통해 배열의 형태로 불러옵니다. 
var musicEls = new Array();

    musicEls[0] = new Audio('./media/Album1-FukinProblems.mp3');
    musicEls[1] = new Audio('./media/Album2-WildForTheNight.mp3');
    musicEls[2] = new Audio('./media/Album3-LordPrettyFlackoJodye.mp3');
    musicEls[3] = new Audio('./media/Album4-A$APForever.mp3');
    musicEls[4] = new Audio('./media/Album5-YamborghiniHigh.mp3');

//console.log(musicEls);
//console.log(playBtnEls);

// 앨범을 회전시킬 때 버튼이 몇번 눌렸는지 측정하기 위한 카운트입니다.
var count=0;

// 씨디의 회전을 멈추는 함수입니다. 씨디가 회전하다가 다음버튼이나 다른페이지로 이동할 경우
// 씨디가 멈추지 않고 계속 회전을 하며 노래가 나옵니다. 이러한 경우를 방지하기 위해서 
// 다음버튼을 누르거나 다른 페이지로 이동할 때 모든 앨범의 음악을 멈추고 회전되었던 앨범트레이를 원위치 시킵니다
function stopAllCD(){
    for(var i = 0; i < allAlbum.length; i++){
        allAlbum[i].classList.remove('albumOpen');
        allCD[i].classList.remove('rotateCD');
        pauseBtnEls[i].style.display = "none";
        playBtnEls[i].style.display = "block";
        musicEls[i].pause();
        musicEls[i].currentTime=0;
        if(!albums.classList.contains('active')){
            count = 0;
            albumTray.style.transform = "translate(-50%, -50%) rotateX(90deg) rotateZ(0deg) ";
        }
    }
}
// 다음 버튼을 눌렀을 때 실행되는 함수입니다. 앨범들을 담고있는 앨범트레이를 count변수를 통해 받아온 값의 곱하기 72도만큼 회전시킵니다.
function RotatePrev(){
    // 왼쪽으로 회전할 경우에는 카운트를 깎아줍니다
    count--;
    var rotateAngle = 72 * count;
    albumTray.style.transform = "translate(-50%, -50%) rotateX(90deg) rotateZ(" + rotateAngle + "deg) ";
    // 버튼이 눌리면 stopAllCD() 함수를 작동시킵니다
    stopAllCD();
}
// 다음 버튼을 눌렀을 때 실행되는 함수입니다. 앨범들을 담고있는 앨범트레이를 count변수를 통해 받아온 값의 곱하기 72도만큼 회전시킵니다.
function RotateNext(){
    // 오른쪽으로 회전할 경우에는 카운트를 더해줍니다
    count++;
    var rotateAngle = 72 * count;
    albumTray.style.transform = "translate(-50%, -50%) rotateX(90deg) rotateZ(" + rotateAngle + "deg) ";
    // 버튼이 눌리면 stopAllCD() 함수를 작동시킵니다
    stopAllCD();
}
// 앨범의 뚜껑을 오픈할 때 사용하는 함수입니다 현재 클릭된 앨범의 앞면을 엽니다.
// 이 경우 css에서 미리 작성한 albumOpen클래스를 토글버튼으로 add/remove해주어 컨트롤합니다
function openAlbum(e){
    e.currentTarget.classList.toggle('albumOpen');
}
// 아래의 변수들을 배열형태로 전환해줍니다
playBtnEls = Array.prototype.slice.call(playBtnEls);
pauseBtnEls = Array.prototype.slice.call(pauseBtnEls);
allCD = Array.prototype.slice.call(allCD);
// 플레이버튼 클릭시 실행되는 함수입니다.
// 현재 클릭된 배열 항목의 index값을 id로 지정하여 id번째에 있는 요소들을 컨트롤합니다
function playMusic(e){
    var els = e.currentTarget, id = playBtnEls.indexOf(els);
    console.log(id);
    // 플레이버튼이 클릭되면 씨디를 회전시키는 클래스를 추가합니다
    allCD[id].classList.add('rotateCD');
    playBtnEls[id].style.display = "none";
    pauseBtnEls[id].style.display = "block";
    // 해당 씨디의 음악을 플레이합니다
    musicEls[id].play();
}
// 정지버튼 클릭시 실행되는 함수입니다.
// 현재 클릭된 배열 항목의 index값을 id로 지정하여 id번째에 있는 요소들을 컨트롤합니다
function pauseMusic(e){
    var els = e.currentTarget, id = pauseBtnEls.indexOf(els);
    console.log(id);
    // 플레이버튼이 클릭되면 씨디를 회전시키는 클래스를 추가합니다
    allCD[id].classList.remove('rotateCD');
    pauseBtnEls[id].style.display = "none";
    playBtnEls[id].style.display = "block";
    // 해당 씨디의 음악을 플레이합니다
    musicEls[id].pause();
}
// CD 가운데 플레이 버튼과 정지버튼을 for문으로 클릭 이벤트리스너를 추가합니다.
for(var i = 0; i < playBtnEls.length; i++){
    playBtnEls[i].addEventListener("click", playMusic);
}
for(var i = 0; i < pauseBtnEls.length; i++){
    pauseBtnEls[i].addEventListener("click", pauseMusic);
}
// 각 앨범들에 클릭 이벤트리스너를 추가합니다
firstAlbum.addEventListener("click", openAlbum);
secondAlbum.addEventListener("click", openAlbum);
thirdAlbum.addEventListener("click", openAlbum);
fourthAlbum.addEventListener("click", openAlbum);
fifthAlbum.addEventListener("click", openAlbum);
// 이전버튼과 다음버튼에 클릭 이벤트리스너를 추가합니다
prevBtn.addEventListener('click', RotatePrev);
nextBtn.addEventListener('click', RotateNext);
