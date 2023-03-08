import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";
import whoArray from "../data/who.json";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
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