import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";
import whoArray from "../who-to-follow-list/who.json";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";

const PostSummaryList = () => {
    console.log(postsArray);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Posts</h3>
            </li>
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
};
export default PostSummaryList;