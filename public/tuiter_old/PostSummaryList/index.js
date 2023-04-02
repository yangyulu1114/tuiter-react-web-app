/* eslint-env jquery */

import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
     // $('#wd-postSummaryList').append(`
    return(`
    <ul class="list-group">
           <!-- continue here -->
            ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
           </ul>
`);
}
// $(PostSummaryList);
export default PostSummaryList;