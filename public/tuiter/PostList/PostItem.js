/* eslint-env jquery */

const PostItem = (post) => {
    return(`  
           <li class="list-group-item bg-black">
                <div class="row">
                    <div class="col-1 p-0 ms-3">
                        <img class="rounded-circle"
                        width="50px"
                        src="${post.userIcon}"/>
                    </div>
                    <div class="col-10 ms-2 pe-0">
                        <span class="me-xl-2 fw-bold">${post.userName}</span><i class="fa fa-check-circle"></i>
                        <span class="text-muted">@${post.handle}.${post.time}</span>
                        </br>
                        <span>${post.title}</span>
                        <div class="mt-2 border border-1 border-light rounded-corners-inline">
                            <img class="mt-1 border border-top-0 border-start-0 border-end-0 border-light" width="100%"
                            src="${post.image}">
                            <div class="ms-3 mb-2">
                                <p class="mb-2">${post.subtitle}</p>
                                <span class="text-dark">${post.content}</span></br>
                                 <i class="fa fa-link text-muted"> ${post.source}</i>
                            </div>
                        </div>
                        
                        <div>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item  bg-black border-0">
                                    <i class="fa fa-comment text-muted">  ${post.comment}</i>
                                </li>
                                <li class="list-group-item ms-3 bg-black border-0">
                                    <i class="fa fa-retweet text-muted">  ${post.retweet}</i>
                                </li>
                                <li class="list-group-item ms-3 bg-black border-0">
                                    <i class="fa fa-heart text-muted">  ${post.like}</i>
                                </li>
                                 <li class="list-group-item ms-3 bg-black border-0">
                                    <i class="fa fa-upload text-muted me-5"></i>
                                </li>
                                
                            </ul>
                        </div>
                 
                    </div>
                </div>
            </li>
    `)
}

export default PostItem;