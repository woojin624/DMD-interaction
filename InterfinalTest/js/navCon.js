var sectionEls = document.querySelectorAll("body > section"),
    main = document.querySelector("section#main"),
    profile = document.querySelector("section#profile"),
    albums = document.querySelector("section#albums"),
    video = document.querySelector("section#video"),
    gallery = document.querySelector("section#gallery");

var navBtnEls = document.querySelectorAll("header > ul > li");
    mainBtn = document.querySelector("#home-btn"),
    profileBtn = document.querySelector("#profile-btn"),
    albumsBtn = document.querySelector("#albums-btn"),
    videosBtn = document.querySelector("#videos-btn"),
    galleryBtn = document.querySelector("#gallery-btn");

function openMain(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.visibility = "hidden";
        sectionEls[i].style.pointerEvents = "none";
        // sectionEls[i].style.transition = "0"
    }
    main.style.visibility = "visible";
    main.style.pointerEvents = "auto";
}
function openProfile(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.visibility = "hidden";
        sectionEls[i].style.pointerEvents = "none";
        // sectionEls[i].style.transition = "0"
    }
    profile.style.visibility = "visible";
    profile.style.pointerEvents = "auto";
}
function openAlbums(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.visibility = "hidden";
        sectionEls[i].style.pointerEvents = "none";
        // sectionEls[i].style.transition = "0"
    }
    albums.style.visibility = "visible";
    albums.style.pointerEvents = "auto";
}
function openVideo(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.visibility = "hidden";
        sectionEls[i].style.pointerEvents = "none";
        // sectionEls[i].style.transition = "0"
    }
    video.style.visibility = "visible";
    video.style.pointerEvents = "auto";
}
function openGallery(){
    for(var i = 0; i < sectionEls.length; i++){
        sectionEls[i].style.visibility = "hidden";
        sectionEls[i].style.pointerEvents = "none";
        // sectionEls[i].style.transition = "0"
    }
    gallery.style.visibility = "visible";
    gallery.style.pointerEvents = "auto";
}

mainBtn.addEventListener("click", openMain);
profileBtn.addEventListener("click", openProfile);
albumsBtn.addEventListener("click", openAlbums);
videosBtn.addEventListener("click", openVideo);
galleryBtn.addEventListener("click", openGallery);

// console.log(sectionEls);
// console.log(navBtnEls);