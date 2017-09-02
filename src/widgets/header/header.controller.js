class HeaderCtrl {
  constructor() {
    
  }

  init() {
    this.$notificationsWrapper = $(".notifications-wrapper");
  }

  toggleSideBar(event) {
    event.preventDefault();
    //this.$sideMenuWrapper.toggleClass("toggled");
  }

  setNotification(count) {
    this.$notificationsWrapper.append(`<span class="notifications">${count}</span>`);
  }

  clearNotification() {
    $(".notifications-wrapper .notifications").remove();
  }

}

export default HeaderCtrl;
