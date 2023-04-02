/* eslint-env jquery */

const PostItem = (post) => {
    let emptyTitleAfter = (post.titleAfter == null)
    let emptySubtitle = (post.subtitle == null);
    let emptyContent = (post.content == null);
    let emptySource = (post.source == null);
    let emptyDiv = (emptySubtitle && emptyContent && emptySource)
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
                        <span>${post.titleBefore}</span><span class="text-primary"> ${post.titleHighlight}</span>${emptyTitleAfter ? '' : `<span>${post.titleAfter}</span>`}
                        <div class="mt-2 border border-1 border-light rounded-corners-inline">
                            <img class="border border-top-0 border-start-0 border-end-0 border-light rounded-corners-inline" width="100%"
                            src="${post.image}"
                            >
                            <div class="ms-3">
                               ${emptySubtitle ? '' : `<p className="mb-2">${post.subtitle}</p>`}  
                               ${emptyContent ? '' : `<span class="text-dark">${post.content}</span></br>`}
                            </div>
                               ${emptySource ? '' : `<i class="fa fa-link text-muted mb-2 ms-3"> ${post.source}</i>`}  
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