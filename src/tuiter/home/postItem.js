import React from "react";
import "./index.css";

const PostItem = (
    {post}
) => {
    console.log(post);
    let emptyTitleAfter = (post.titleAfter == null);
    let emptySubtitle = (post.subtitle == null);
    let emptyContent = (post.content == null);
    let emptySource = (post.source == null);
    let emptyDiv = (emptySubtitle && emptyContent && emptySource);
  return (
      <div>
          <li className="list-group-item">
            <div className="row">
                <div className="col-1 p-0 ms-3">
                    <img className="rounded-circle"
                         width="50px"
                         src={`/images/${post.userIcon}`}/>
                </div>
                <div className="col-10 ms-2 pe-0">
                    <span className="me-xl-2 fw-bold">{post.userName}</span><i className="bi bi-patch-check-fill wd-color-blue"></i>
                    <span className="text-muted"> @{post.handle}.{post.time}</span>
                    <br/>
                    <span>{post.titleBefore}</span><span className="text-primary"> {post.titleHighlight}</span>{emptyTitleAfter ? '' : <span>{post.titleAfter}</span>}
                    <div className="mt-2 mb-0 border border-1 border-thin rounded-corners-inline">
                        <img
                            className="border border-top-0 border-start-0 border-end-0 border-thin rounded-corners-inline"
                            width="100%"
                            src={`/images/${post.image}`}/>
                            <div className="ms-3">
                                {emptySubtitle ? '' : <p className="mb-2">{post.subtitle}</p>}
                                {emptyContent ? '' : <div class="text-dark">{post.content}</div>}
                            </div>
                            {emptySource ? '' : <i class="bi bi-link text-muted mb-2 ms-3"> {post.source}</i>}
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0">
                                <i className="bi bi-chat text-muted"> {post.comment}</i>
                            </li>
                            <li className="list-group-item ms-3 border-0">
                                <i className="bi bi-repeat text-muted"> {post.retweet}</i>
                            </li>
                            <li className="list-group-item ms-3 border-0">
                                <i className="bi bi-suit-heart text-muted"> {post.like}</i>
                            </li>
                            <li className="list-group-item ms-3 border-0">
                                <i className="bi bi-upload text-muted me-5"></i>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
          </li>
      </div>
  );
};

export default PostItem;