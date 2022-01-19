function headerMenuToggle() {
  var headerMenu = document.getElementById("header__menu");
  var headerMenuButton = document.getElementById("header__button-toggle");
  var menuOpen = headerMenuButton.classList.item(1);


  headerMenu.classList.toggle("open-menu");

  if(menuOpen === "menu-icon") {
    headerMenuButton.classList.remove("menu-icon");
    headerMenuButton.classList.add("close-icon");
  } if(menuOpen === "close-icon") {
    headerMenuButton.classList.remove("close-icon");
    headerMenuButton.classList.add("menu-icon");
  }

}
