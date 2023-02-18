/* eslint-env jquery */

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    // $('#wd-whoToFollow').append(`
    return (`
    <ul class="list-group">
           <!-- continue here -->
            ${
        who.map(whoItem => {
            return(WhoToFollowListItem(whoItem));
        }).join('')
    }
           </ul>
`);
}
// $(WhoToFollowList);
export default WhoToFollowList;