import React from "react";

const PostSummaryItem = (
    {post}
) => {
    return(
           <div className="list-group-item">
                 <div className="row ms-0 me-0">
                       <div className="col-10">
                           <div className="text-muted">{post.userName} .{post.time}</div>
                           <div className="fw-bold">{post.topic}</div>
                           <div className="text-muted">{post.title}</div>
                       </div>
                            <div className="col-2 float-end align-self-center">
                                <img className="border rounded border-0 me-5" width="100%" src={`/images/${post.image}`}/>
                            </div>

                 </div>
           </div>
    );
};

export default PostSummaryItem;