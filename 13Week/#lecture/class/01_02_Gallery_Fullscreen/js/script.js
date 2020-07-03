var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
<<<<<<< HEAD
    
    viewItemImgEls = viewContainerEl.querySelectorAll('.view-item img');
    
=======
    viewItemImgEls = viewContainerEl.querySelectorAll(".view-item > img"),
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),

    paddleNavEl = galleryEl.querySelector(".paddle-nav"),
    btnPaddleNavEls = paddleNavEl.querySelectorAll("button.arrow"),
    btnPaddleNavPrevEl = paddleNavEl.querySelector("button.arrow.prev"),
    btnPaddleNavNextEl = paddleNavEl.querySelector("button.arrow.next"),

<<<<<<< HEAD
    
    _duration = 300, // 기본 속도
    _addDuration = 200, // 추가 속도
=======
    _duration = 300,
    _addDuration = 200,
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002

    _isAni = false,

    _imgOW = 1600,
    _imgOH = 1000,

    _galleryW = null,
    _galleryH = null,
    _cuId = 0,
    _exId = null,
    _max = null;

<<<<<<< HEAD
//블럭 단위로 기능 분리.
//이벤트 핸들러 기능.

function onResize(e){
=======

function onResize(e) {
    console.log("resize");
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
    //console.log(window.innerWidth, window.innerHeight);
    _galleryW = window.innerWidth;
    _galleryH = window.innerHeight;
    //console.log(_galleryW);
<<<<<<< HEAD
    // 브라우저의 가로폭, 세로높이 값을 구하여 viewContainerEl의 width, height에 적용.

    // 갤러리의 사이즈가 변경되도록 galleryResize() 호출
    galleryResize();
    gallerySlide(true); //애니메이션이 없는 상태로 고정값 적용 ( translate3D() )
}

function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    // console.log(parentEl) // 부모요소를 찾아옴.
    // console.log(index);
    if(_isAni) return;
    if(!parentEl.classList.contains("selected")) {
        //비활성화 되어있는 리스트만 선별.
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        //parentEl.classList.add("selected");
        listItemEls[_cuId].classList.add("selected"); // 위와 기능이 동일.
        //실제로 이미지 갤러리가 움직이는 기능 호출.
        gallerySlide();
    }
}
function onClickPaddleNav(e){
    e.preventDefault();
    var el = e.currentTarget;
    if(el.classList.contains('prev')){
        console.log("이전");
        // _cuId--;
        _cuId--;
        // -1이 되었을 때 0으로 값을 강제 변경
        if(_cuId < 0){
            _cuId = 0;
        }
    }else if(el.classList.contains('next')){
        console.log("다음");
        // _cuId++
        _cuId++;
        // 4가 되었을 때 3으로 값을 강제 변경
        if(_cuId > _max - 1 ){
=======
    // 브라우저의 가로폭, 세로높이 값을 구하여 viewContainerEl 의 width, height 에 적용.

    // 갤러리의 사이즈가 변경되도록 galleryResize() 호출.
    galleryResize();
    gallerySlide(true); //애니메이션이 없는 상태로 고정값 적용. ( translate3d() )
}
function onClickListItem(e) {
    e.preventDefault();
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    if(_isAni) return;
    if(!parentEl.classList.contains("selected")) {
        _cuId = index;
        listItemEls[_exId].classList.remove("selected");
        listItemEls[_cuId].classList.add("selected");
        gallerySlide();
    }
}
function onClickPaddleNav(e) {
    e.preventDefault();
    var el = e.currentTarget;
    if(el.classList.contains("prev")) {
        console.log("이전");
        // _cuId--; // -1
        _cuId--;
        // -1 이 되었을 때 0 으로 값을 강제 변경.
        if(_cuId < 0) {
            _cuId = 0;
        }
    }else if(el.classList.contains("next")) {
        console.log("다음")
        // _cuId++; // +1 
        _cuId++;
        // 4 가 되었을 때 3 으로 값을 강제 변경.
        if(_cuId > _max - 1) {
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
            _cuId = _max - 1;
        }
    }
    gallerySlide();
}
<<<<<<< HEAD
function onTransitionEnd(e){
    console.log("Transition 완료");
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
    // 애니메이션이 완료 후 버튼이 클릭 가능한 상태.
}

//----------
//이미지 갤러리의 기능들.
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    
    viewEl.style.height = _galleryH + "px";
    //viewEl에 높이 적용

=======

function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition"); 
}

function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewEl.style.height = _galleryH + "px";
    // viewEl 에 높이 적용.
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
<<<<<<< HEAD

    for(var j = 0; j < _max; j++){
        var imgW, imgH, imgT, imgL;
        imgW = _galleryW;
        // galleryW : ? = imgOW : imgOH; (ratio)
        imgH = Math.round(imgW * _imgOH / _imgOW);
        // 브라우저 리사이즈할 때, galleryW 보다 galleryH 가 더 수치가 높아져서 여백이 생기는 구간이 발생됨.
        if(imgH <= _galleryH) {
            imgH = _galleryH;
            // ? : galleryH = imgOW : imgOH; (ratio)
            imgW = imgH * _imgOW / _imgOH;
        }
        
        // 이미지를 중심으로 이동시키기 위한 공식,
        // 프레임의 가로폭의 반 - 이미지의 가로폭의 반
        // 프레임의 세로높이의 반 - 이미지의 세로높이의 반
=======
    for(var j = 0; j < _max; j++) {
        var imgW, imgH, imgT, imgL;

        // 가로폭 부터 적용 후 높이 계산.
        imgW = _galleryW;
        // galleryW : ? = imgOW :imgOH; (ratio)
        imgH = Math.round(imgW * _imgOH / _imgOW);
        // 브라우저 리사이즈할 때, galleryW 보다 galleryH 가 더 수치가 높아져서 여백이 생기는 구간이 발생됨.
        if(imgH <= _galleryH) {
           imgH = _galleryH; 
           // ? : galleryH = imgOW :imgOH; (ratio)
           imgW = imgH * _imgOW / _imgOH;
        }

        // 이미지를 중심으로 이동시키기 위한 공식.
        // 프레임의 가로폭의 반 - 이미지의 가로폭의 반.
        // 프레임의 세로높의 반 - 이미지의 세로높이의 반.
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
        imgT = Math.round(_galleryH / 2 - imgH / 2);
        imgL = Math.round(_galleryW / 2 - imgW / 2);

        viewItemImgEls[j].style.width = imgW + "px";
        viewItemImgEls[j].style.height = imgH + "px";
        viewItemImgEls[j].style.top = imgT + "px";
        viewItemImgEls[j].style.left = imgL + "px";
<<<<<<< HEAD


=======
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
    }
}
function gallerySlide(b) {
    var duration = _duration + Math.abs(_cuId - _exId) * _addDuration,
    bool = (b) ? b : false;
<<<<<<< HEAD

=======
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
    //===
    /*
    if(b) {
        bool = true;
    }else{
        bool = false;
    }
    */
   viewContainerEl.style.transform = "translate3d(" + _galleryW * _cuId * -1 + "px, 0, 0)";
<<<<<<< HEAD
   // 함수안에서 2가지 기능을 사용할 떄 방법 (boolean 타입을 활용);
   if(!bool){
       //애니메이션
       console.log("애니메이션");
        _isAni = true;
        setNavSelected();
        viewContainerEl.style.transition = "transform " + duration + "ms ease-in-out";
        _exId = _cuId;
   }else{
       //정적 값을 적용(애니메이션 제거)
       console.log("리사이즈");
       viewContainerEl.style.removeProperty("transition");
   }

}

=======
   // 함수 안에서 2가지 기능을 사용할 때 방법. (boolean 타입을 활용)
   if(!bool) { //false.
       // 애니메이션.
       console.log("애니메이션");
       _isAni = true;    
       setNavSelected();
       viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.030, 0.515, 0.955)";
       _exId = _cuId;
   }else{
       // 정적 값을 적용.(애니메이션이 없이 고정값으로 적용되도록)
       console.log("리사이즈");
       viewContainerEl.style.removeProperty("transition");
   }
}
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
function setNavSelected() {
    listItemEls[_exId].classList.remove("selected");
    listItemEls[_cuId].classList.add("selected");
}

<<<<<<< HEAD
//----------
//이벤트가 바인딩되는 기능들.
function addEvent() {
    window.addEventListener("resize", onResize);
    

    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    for(var j = 0; j < btnPaddleNavEls.length; j++){
        btnPaddleNavEls[j].addEventListener("click", onClickPaddleNav);
    }
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    viewContainerEl.addEventListener("webkitTransitionend", onTransitionEnd);
}
//초기화 기능.
=======
function addEvent() {
    window.addEventListener("resize", onResize);
    for(var i = 0; i < _max; i++) {
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    for(var j = 0; j < btnPaddleNavEls.length; j++) {
        btnPaddleNavEls[j].addEventListener("click", onClickPaddleNav);
    }
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
}
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
function init() {
    _exId = _cuId;
    _max = viewItemEls.length;
    btnListItemEls = Array.prototype.slice.call(btnListItemEls);
    addEvent();
<<<<<<< HEAD
    // window에 적용된 resize 이벤트를 사용자의 조작없이 강제 실행
    window.dispatchEvent(new Event("resize"));
}
// 초기화 함수 호출.
=======
    // window 에 적용된 resize 이벤트를 사용자의 조작없이 강제 실행.
    window.dispatchEvent(new Event("resize"));
}
>>>>>>> 0bb17b50f0879e61d98ede68ab522cbad0c0e002
init();