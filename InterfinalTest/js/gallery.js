
/* 본 스크립트는 앨범페이지를 컨트롤하기 위한 스크립트입니다 */

// 갤러리 요소들에 들어가는 변수를 지정합니다
var lineWrap = document.querySelector('section.gallery > .gallery-wrap > .line-wrap');
var WrapAni = document.querySelector('.gallery-wrap > .line-wrap');
var gallImgEls = document.querySelectorAll('.line-wrap > .img-wrap > .img-line > .gal-img');
var imgModal = document.querySelectorAll('.img-modal');


// console.log(WrapAni);
// console.log(imgModal);
// 갤러리에 들어가는 이미지들과 뒤에 뜨는 모달창들을 배열형태로 바꾸어줍니다
gallImgEls = Array.prototype.slice.call(gallImgEls);
imgModal = Array.prototype.slice.call(imgModal);
// 이미지를 클릭했을 때 작동하는 함수입니다
function clickImg(e){
    // console.log("click");
    // console.log(gallImgEls);
    // 현재 클릭된 이미지의 인덱스 값을 받아와 id로 지정합니다
    var els = e.currentTarget, id = gallImgEls.indexOf(els);
    // 토글형태로 사용하기 위하여 조건문을 통해 현재 클릭한 이미지가 clickedGallery클래스를 가지고 있는지 확인하여 
    // clickedGallery클래스가 있다면 WrapAni에서 위아래로 움직이는 애니메이션을 running상태로 바꿉니다
    if(e.currentTarget.classList.contains('clickedGallery')){
      WrapAni.style.animationPlayState = "running";
      // 전체 이미지들이 마우스 포인터이벤트가 작동하도록 합니다
      for(var i = 0; i < gallImgEls.length; i++){
        gallImgEls[i].style.pointerEvents = "auto";
      }
      // 모달창을 닫습니다
      imgModal[id].style.display = "none";
    }else{ 
      // clickedGallery클래스가 없다면 WrapAni에서 위아래로 움직이는 애니메이션을 일시정지시킵니다
      WrapAni.style.animationPlayState = "paused";
      // 전체 이미지들이 마우스 포인터이벤트가 작동하지 않도록 합니다
      for(var i = 0; i < gallImgEls.length; i++){
        gallImgEls[i].style.pointerEvents = "none";
      }
      //모달창을 띄웁니다
      imgModal[id].style.display = "block";
    }
    // 이미지를 클릭하여 이미지가 커졌을 때 다른 이미지들이 클릭되지 않도록 위에서 전부 막아준 후 해당 클릭된 이미지만 포인터이벤트를 작동시킵니다
    gallImgEls[id].style.pointerEvents = "auto";
    // 이미지에 토글로 clickedGallery클래스를 add/remove해줍니다
    gallImgEls[id].classList.toggle('clickedGallery');

}

// 갤러리의 모든 이미지에 클릭이벤트리스너를 추가합니다
for(var i = 0; i < gallImgEls.length; i++){
  gallImgEls[i].addEventListener("click", clickImg);
}


