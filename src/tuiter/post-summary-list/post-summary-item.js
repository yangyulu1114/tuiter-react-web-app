import React from "react";

const PostSummaryItem = (
    {post}
) => {
    console.log(post)
    return(
           <li className="list-group-item">
                 <div className="row ms-0 me-0">
                       <div className="col-10">
                           <div className="text-muted">{post.username} .{post.time}</div>
                           <div className="fw-bold">{post.topic}</div>
                           <div className="text-muted">{post.title}</div>
                       </div>
                            <div className="col-2 float-end align-self-center">
                                <img className="border rounded border-0 me-5" width="100%" src={`/images/${post.image}`}/>
                            </div>
                 </div>
           </li>
    );
};

export default PostSummaryItem;