import Header from './src/widgets/header/header.component'
import Feed from './src/widgets/feed/feed.component';
import Status from './src/widgets/status/status.component';


$(document).ready(function() {
  new Header();
  new Status();
  new Feed().showFeed();
});