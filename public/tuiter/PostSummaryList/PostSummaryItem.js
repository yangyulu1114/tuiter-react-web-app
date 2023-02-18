/* eslint-env jquery */

const PostSummaryItem = (post) => {
    return(`  
           <div class="list-group-item">
                 <div class="row ms-0 me-0">
                       <div class="col-10 mt-2 mb-2">
                            <span class="text-muted">${post.topic}</span></br>
                            <span class="fw-bold">${post.userName}</span>
                            <i class="fa fa-check-circle align-middle"></i>
                            <span class="text-muted">-${post.time}</span>
                            </br>
                            <span class="fw-bold">${post.title}</span>
                            </div>
                            <div class="col-2 float-end align-self-center mt-2 mb-2">
                                <img class="border rounded border-0" width="100%" src="${post.image}">
                            </div>

                 </div>
           </div>
    `)
}

export default PostSummaryItem;