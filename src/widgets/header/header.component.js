import HeaderCtrl from './header.controller';
import { template } from './header.templates';

class Header extends HeaderCtrl {

  constructor() {
    super(); // Will cache side menu toggling DOM elements
    this.contructHeader();
  }

  contructHeader() {
    $("#header").append(template);
  }

  listenForToggleEvents() {
    const $togglerIcon = $(".toggler-icon");
    //$togglerIcon.on('click', (event) => super.toggleSideBar(event));
  }

  listenForNotificationEvent() {
    const $logoutIcon = $("#logout");
  }

  init() {
    this.listenForToggleEvents();
    this.listenForNotificationEvent();
  }
}

export default Header;
