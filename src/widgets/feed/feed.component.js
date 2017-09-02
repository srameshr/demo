import { getFeed } from './feed.service';
import Updates from '../updates/update.component';

class Feed {
    constructor() {
        this.updates = new Updates();
    }
    async getFeed() {
        try {
            const data = await getFeed();
            return data;
        } catch (e) {
            throw Error(e);
        }
    }
    
    async showFeed() {
        try {
            const feeds = await this.getFeed(); 
            const updates = this.updates.getUpdates(feeds);
            $("#feeds").append(updates);
        } catch (e) {
            throw e;
        }
    }
}

export default Feed;