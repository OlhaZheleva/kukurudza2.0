// filter bar

const selectNames = document.querySelectorAll(".select-name");
const selectBlocks = document.querySelectorAll(".select-block");

for (i = 0; i < selectNames.length; i++) {
  selectNames[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < selectBlocks.length; i++) {
    selectBlocks[i].className = "select-block close";
  }
  if (itemClass == "select-block close") {
    this.parentNode.className = "select-block open";
  }
}

//search form

const searchForm = document.querySelector('.search');
const searchBtn = document.querySelector('.search-button');

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("open-search");
});