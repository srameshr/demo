class HeaderCtrl {
  constructor() {
    // Cache UI elements
    this.$sideMenuWrapper = $(".side-menu-wrapper");
  }

  toggleSideBar(event) {
    event.preventDefault();
    this.$sideMenuWrapper.toggleClass("toggled");
  }

}

export default HeaderCtrl;
