
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
