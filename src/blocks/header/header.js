function headerMenuToggle() {
  var headerMenu = document.getElementById("header__menu");
  var headerMenuButton = document.getElementById("header__button-toggle");
  var menuOpen = headerMenuButton.classList.contains("menu-icon");

  headerMenu.classList.toggle("open-menu");

  if(menuOpen == true) {
    headerMenuButton.classList.remove("menu-icon");
    headerMenuButton.classList.add("close-icon");
  } if(menuOpen == false) {
    headerMenuButton.classList.remove("close-icon");
    headerMenuButton.classList.add("menu-icon");
  }

}
