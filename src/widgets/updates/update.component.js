import { constructTemplate } from './template';

class Updates {
    getUpdates({ feeds }) {
        return feeds.map(feed => this.hydrateFeed(feed))
    }

    hydrateFeed(feed) {
        return constructTemplate(feed);
    }
}

export default Updates;