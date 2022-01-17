
// Скрипт определяет какая страница в данный момент открыта,
// и подчеркивает нужную ссылку в хедере
function addActiveToHeaderLink() {
  var bodyElement = document.getElementById("body");
  var bodyClass = bodyElement.classList.item(0);
  if (bodyClass === "index-page") {
    var index = document.getElementById("indexLink");
    index.classList.add("active-link");
  }
  if (bodyClass === "catalog-page") {
    var index = document.getElementById("catalogLink");
    index.classList.add("active-link");
  }
}

addActiveToHeaderLink();

function headerButtonToggle() {
  var button = document.getElementById("headerButtonToggle");
  var currentClass = button.classList.item(0);
  if(currentClass == "toggle-close") {
    button.classList.remove("toggle-close");
    button.classList.add("toggle-open")
  }
  if(currentClass == "toggle-open") {
    button.classList.remove("toggle-open");
    button.classList.add("toggle-close")
  }
}
