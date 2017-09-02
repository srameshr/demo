import { get } from '../../core/data.service';

export const getFeed = () => {
    return get({ url: '/data/feed.json'});
}
