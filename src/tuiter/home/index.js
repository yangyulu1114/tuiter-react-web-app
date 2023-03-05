import React from "react";
import posts from './posts.json';
import PostItem from './postItem'
import postsArray from "../post-summary-list/posts.json";
import PostSummaryItem from "../post-summary-list/post-summary-item";
const HomeComponent = () => {
    console.log(posts);
    return (
        <div>
            <ul className="list-group">
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