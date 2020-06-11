var tabMenuEl = document.querySelector("#tab-menu"),
  btnTabMenuEls = tabMenuEl.querySelectorAll("a"),
  tabContentEls = document.querySelectorAll(".tab-content"),
  cuId = 0,
  exId = null;

function onClickTabMenu(e) {
  e.preventDefault();
  var el = e.currentTarget,
    index = btnTabMenuEls.indexOf(el);
  console.log(index);
  if (!el.classList.contain("selected")) {
    cuId = index;
    el.classList.add("selected");
    tabContentEls[cuId].classList.add("selected");
  }
}
for (var i = 0; i < btnTabMenuEls.length; i++) {
  btnTabMenuEls[i].addEventListener("click", onClickTabMenu);
}
