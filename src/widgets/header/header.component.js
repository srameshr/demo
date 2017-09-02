import HeaderCtrl from './header.controller';
import { template } from './header.templates';
import notificationsService from '../../notifications/notifications.service';

class Header extends HeaderCtrl {

  constructor() {
    super(); // Will cache side menu toggling DOM elements
    this.contructHeader();
    this.init();
  }

  contructHeader() {
    $("#header").append(template);
  }

  listenForToggleEvents() {
    const $togglerIcon = $(".toggler-icon");
    //$togglerIcon.on('click', (event) => super.toggleSideBar(event));
  }

  getNotifications() {
    const notificationsCount = notificationsService.getNotifications(); 
    super.setNotification(notificationsCount);
  }
  
  listenToclearNotifications() {
    const $notificationsWrapper = $(".notifications-wrapper");
    $notificationsWrapper.on('click', event => super.clearNotification(event));
  }

  init() {
    super.init();
    this.getNotifications();
    this.listenForToggleEvents();
    this.listenToclearNotifications();
  }
}

export default Header;
