import Header from './src/widgets/header/header.component'
import Feed from './src/widgets/feed/feed.component';
import Status from './src/widgets/status/status.component';

class App {
  constructor() {
    this.init();
  }

  mountComponents() {
    new Header();
    new Status();
    new Feed().showFeed();
  }

  init() {
    this.mountComponents();
  }

}
$(document).ready(function() {
  new App();
});