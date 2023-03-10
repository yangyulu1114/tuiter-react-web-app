import React from "react";
import posts from './posts.json';
import PostItem from './postItem'
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";
const HomeComponent = () => {
    return (
        <div className="wd-font-15">
            {/*<ul className="list-group mb-2">*/}
            {/*    {*/}
            {/*        posts.map(post =>*/}
            {/*            <PostItem*/}
            {/*                key={post._id}*/}
            {/*                post={post}/>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</ul>*/}
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
};

export default HomeComponent;