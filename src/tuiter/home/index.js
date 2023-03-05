import React from "react";
import posts from './posts.json';
import PostItem from './postItem'
import "./index.css";
import postsArray from "../post-summary-list/posts.json";
import PostSummaryItem from "../post-summary-list/post-summary-item";
const HomeComponent = () => {
    return (
        <div className="wd-font-15">
            <ul className="list-group mb-2">
                {
                    posts.map(post =>
                        <PostItem
                            key={post._id}
                            post={post}/>
                    )
                }
            </ul>
        </div>
    );
};

export default HomeComponent;