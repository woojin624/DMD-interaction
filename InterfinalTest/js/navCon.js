    // 페이지 요소들을 변수로 지정합니다
var sectionEls = document.querySelectorAll("body > section"),
    main = document.querySelector("section.main"),
    profile = document.querySelector("section.profile"),
    albums = document.querySelector("section.albums"),
    video = document.querySelector("section.video"),
    gallery = document.querySelector("section.gallery");
    // 내비게이션의 버튼 요소들을 변수로 지정합니다
var navBtnEls = document.querySelectorAll("header > ul > li");
    mainBtn = document.querySelector("#home-btn"),
    profileBtn = document.querySelector("#profile-btn"),
    albumsBtn = document.querySelector("#albums-btn"),
    videosBtn = document.querySelector("#videos-btn"),
    galleryBtn = document.querySelector("#gallery-btn");
    // 백그라운드의 백써클을 변수로 지정합니다
var circleOne = document.querySelector('body > div.backCircle > div#circle1 > div.circle'),
    circleTwo = document.querySelector('body > div.backCircle > div#circle2 > div.circle');

// 메인 버튼 눌렀을 때 작동하는 함수입니다.
// 모든 페이지 요소에서 포인터이벤트를 none으로 설정하여 클릭이 되지않게합니다.
// 모든 페이지 요소의 클래스중 active를 제거합니다
function openMain(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.pointerEvents = "none";
        sectionEls[i].classList.remove('active');
    }
    // 메인 버튼을 눌렀으므로 메인페이지의 포인터이벤트를 작동시키고 active클래스를 추가합니다.
    main.style.pointerEvents = "auto";
    main.classList.add('active');

    // 백서클을 작동하기위한 스크립트입니다. 해당 페이지에 해당하는 백서클 클래스를 추가하고 나머지 클래스는 제거해주어 백서클의 인터랙션을 컨트롤합니다
    circleOne.classList.add('circle-main');
    circleTwo.classList.add('circle-main');
    circleOne.classList.remove('circle-profile');
    circleTwo.classList.remove('circle-profile');
    circleOne.classList.remove('circle-albums');
    circleTwo.classList.remove('circle-albums');
    circleOne.classList.remove('circle-videos');
    circleTwo.classList.remove('circle-videos');
    circleOne.classList.remove('circle-gallery');
    circleTwo.classList.remove('circle-gallery');

    // 비디오 페이지에서의 백서클을 조작하기위한 스크립트입니다. 백서클의 요소가 circle-videos클래스를 가지고 있다면 백서클을 z축으로 회전시킵니다
    if(circleOne.classList.contains("circle-videos")){
        circleOne.parentNode.style.transform = "rotateZ(90deg)"
        circleTwo.parentNode.style.transform = "rotateZ(90deg)"
    //circle-videos클래스를 가지고 있지않다면 z축을 0도 상태로 둡니다
    }else{
        circleOne.parentNode.style.transform = "rotateZ(0deg)"
        circleTwo.parentNode.style.transform = "rotateZ(0deg)"
    }
}

// 프로필 버튼 눌렀을 때 작동하는 함수입니다.
// 모든 페이지 요소에서 포인터이벤트를 none으로 설정하여 클릭이 되지않게합니다.
// 모든 페이지 요소의 클래스중 active를 제거합니다
function openProfile(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.pointerEvents = "none";
        sectionEls[i].classList.remove('active');
    }
    // 프로필 버튼을 눌렀으므로 프로필페이지의 포인터이벤트를 작동시키고 active클래스를 추가합니다.
    profile.style.pointerEvents = "auto";
    profile.classList.add('active');

    // 백서클을 작동하기위한 스크립트입니다. 해당 페이지에 해당하는 백서클 클래스를 추가하고 나머지 클래스는 제거해주어 백서클의 인터랙션을 컨트롤합니다
    circleOne.classList.add('circle-profile');
    circleTwo.classList.add('circle-profile');
    circleOne.classList.remove('circle-main');
    circleTwo.classList.remove('circle-main');
    circleOne.classList.remove('circle-albums');
    circleTwo.classList.remove('circle-albums');
    circleOne.classList.remove('circle-videos');
    circleTwo.classList.remove('circle-videos');
    circleOne.classList.remove('circle-gallery');
    circleTwo.classList.remove('circle-gallery');

    // 비디오 페이지에서의 백서클을 조작하기위한 스크립트입니다. 백서클의 요소가 circle-videos클래스를 가지고 있다면 백서클을 z축으로 회전시킵니다
    if(circleOne.classList.contains("circle-videos")){
        circleOne.parentNode.style.transform = "rotateZ(90deg)"
        circleTwo.parentNode.style.transform = "rotateZ(90deg)"
    //circle-videos클래스를 가지고 있지않다면 z축을 0도 상태로 둡니다
    }else{
        circleOne.parentNode.style.transform = "rotateZ(0deg)"
        circleTwo.parentNode.style.transform = "rotateZ(0deg)"
    }
}

// 앨범 버튼 눌렀을 때 작동하는 함수입니다.
// 모든 페이지 요소에서 포인터이벤트를 none으로 설정하여 클릭이 되지않게합니다.
// 모든 페이지 요소의 클래스중 active를 제거합니다
function openAlbums(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.pointerEvents = "none";
        sectionEls[i].classList.remove('active');
    }
    // 앨범 버튼을 눌렀으므로 앨범페이지의 포인터이벤트를 작동시키고 active클래스를 추가합니다.
    albums.style.pointerEvents = "auto";
    albums.classList.add('active');

    // 백서클을 작동하기위한 스크립트입니다. 해당 페이지에 해당하는 백서클 클래스를 추가하고 나머지 클래스는 제거해주어 백서클의 인터랙션을 컨트롤합니다
    circleOne.classList.add('circle-albums');
    circleTwo.classList.add('circle-albums');
    circleOne.classList.remove('circle-main');
    circleTwo.classList.remove('circle-main');
    circleOne.classList.remove('circle-profile');
    circleTwo.classList.remove('circle-profile');
    circleOne.classList.remove('circle-videos');
    circleTwo.classList.remove('circle-videos');
    circleOne.classList.remove('circle-gallery');
    circleTwo.classList.remove('circle-gallery');

    // 비디오 페이지에서의 백서클을 조작하기위한 스크립트입니다. 백서클의 요소가 circle-videos클래스를 가지고 있다면 백서클을 z축으로 회전시킵니다
    if(circleOne.classList.contains("circle-videos")){
        circleOne.parentNode.style.transform = "rotateZ(90deg)"
        circleTwo.parentNode.style.transform = "rotateZ(90deg)"
    //circle-videos클래스를 가지고 있지않다면 z축을 0도 상태로 둡니다
    }else{
        circleOne.parentNode.style.transform = "rotateZ(0deg)"
        circleTwo.parentNode.style.transform = "rotateZ(0deg)"
    }
}

// 비디오 버튼 눌렀을 때 작동하는 함수입니다.
// 모든 페이지 요소에서 포인터이벤트를 none으로 설정하여 클릭이 되지않게합니다.
// 모든 페이지 요소의 클래스중 active를 제거합니다
function openVideo(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.pointerEvents = "none";
        sectionEls[i].classList.remove('active');
    }
    // 비디오 버튼을 눌렀으므로 비디오페이지의 포인터이벤트를 작동시키고 active클래스를 추가합니다.
    video.style.pointerEvents = "auto";
    video.classList.add('active');

    // 백서클을 작동하기위한 스크립트입니다. 해당 페이지에 해당하는 백서클 클래스를 추가하고 나머지 클래스는 제거해주어 백서클의 인터랙션을 컨트롤합니다
    circleOne.classList.add('circle-videos');
    circleTwo.classList.add('circle-videos');
    circleOne.classList.remove('circle-albums');
    circleTwo.classList.remove('circle-albums');
    circleOne.classList.remove('circle-main');
    circleTwo.classList.remove('circle-main');
    circleOne.classList.remove('circle-profile');
    circleTwo.classList.remove('circle-profile');
    circleOne.classList.remove('circle-gallery');
    circleTwo.classList.remove('circle-gallery');

    // 비디오 페이지에서의 백서클을 조작하기위한 스크립트입니다. 백서클의 요소가 circle-videos클래스를 가지고 있다면 백서클을 z축으로 회전시킵니다
    if(circleOne.classList.contains("circle-videos")){
        circleOne.parentNode.style.transform = "rotateZ(90deg)"
        circleTwo.parentNode.style.transform = "rotateZ(90deg)"
    //circle-videos클래스를 가지고 있지않다면 z축을 0도 상태로 둡니다
    }else{
        circleOne.parentNode.style.transform = "rotateZ(0deg)"
        circleTwo.parentNode.style.transform = "rotateZ(0deg)"
    }
}

// 갤러리 버튼 눌렀을 때 작동하는 함수입니다.
// 모든 페이지 요소에서 포인터이벤트를 none으로 설정하여 클릭이 되지않게합니다.
// 모든 페이지 요소의 클래스중 active를 제거합니다
function openGallery(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.pointerEvents = "none";
        sectionEls[i].classList.remove('active');
    }
    // 갤러리 버튼을 눌렀으므로 갤러리페이지의 포인터이벤트를 작동시키고 active클래스를 추가합니다.
    gallery.style.pointerEvents = "auto";
    gallery.classList.add('active');

    // 백서클을 작동하기위한 스크립트입니다. 해당 페이지에 해당하는 백서클 클래스를 추가하고 나머지 클래스는 제거해주어 백서클의 인터랙션을 컨트롤합니다
    circleOne.classList.add('circle-gallery');
    circleTwo.classList.add('circle-gallery');
    circleOne.classList.remove('circle-videos');
    circleTwo.classList.remove('circle-videos');
    circleOne.classList.remove('circle-albums');
    circleTwo.classList.remove('circle-albums');
    circleOne.classList.remove('circle-main');
    circleTwo.classList.remove('circle-main');
    circleOne.classList.remove('circle-profile');
    circleTwo.classList.remove('circle-profile');

    // 비디오 페이지에서의 백서클을 조작하기위한 스크립트입니다. 백서클의 요소가 circle-videos클래스를 가지고 있다면 백서클을 z축으로 회전시킵니다
    if(circleOne.classList.contains("circle-videos")){
        circleOne.parentNode.style.transform = "rotateZ(90deg)"
        circleTwo.parentNode.style.transform = "rotateZ(90deg)"
    //circle-videos클래스를 가지고 있지않다면 z축을 0도 상태로 둡니다
    }else{
        circleOne.parentNode.style.transform = "rotateZ(0deg)"
        circleTwo.parentNode.style.transform = "rotateZ(0deg)"
    }
}

// 앨범페이지에서 음악이 재생중일때 다른페이지로 옮기면 앨범일 열린상태로, 음악이 재생된 상태로 이동합니다
// 이를 방지하기 위하여 for문을 통해 아무 내비게이션 버튼을 클릭하면 앨범을 열리게하는 클래스를 제거하고 cd의 재생을 멈추는 stopAllCD함수를 실행합니다
for(var i = 0; i < navBtnEls.length; i++){
    navBtnEls[i].addEventListener("click", function(){
        for(var i = 0; i < allAlbum.length; i++){
            allAlbum[i].classList.remove('albumOpen');
        }
        stopAllCD();
    })
}

// 내비게이션 버튼들에 클릭이벤트리스너를 추가합니다
mainBtn.addEventListener("click", openMain);
profileBtn.addEventListener("click", openProfile);
albumsBtn.addEventListener("click", openAlbums);
videosBtn.addEventListener("click", openVideo);
galleryBtn.addEventListener("click", openGallery);

// console.log(sectionEls);
// console.log(navBtnEls);