import React from "react";
import PostSummaryItem
    from "./post-summary-item";
import {useSelector} from "react-redux";
import whoArray from "../data/who.json";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
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