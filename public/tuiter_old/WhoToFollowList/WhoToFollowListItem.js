/* eslint-env jquery */

const WhoToFollowListItem = (whoItem) => {
    return(`  
           <div class="list-group-item">
           <div class="row align-content-center">
                <div class="col-2 ps-2">
                     <img class="border rounded-circle border-0"
                          width="50px"
                          src= "../../images/${whoItem.avatarIcon}"/>
                </div>
                <div class="col-7">
                     <span class="me-xl-2 fw-bold">${whoItem.userName}</span><i class="fa fa-check-circle"></i></br>
                     <span class="me-2">@${whoItem.handle}</span>
                </div>
                <div class="col-3 align-self-center p-0">
                     <button class="btn btn-primary rounded-pill float-end me-2">Follow</button>
                </div>
           </div>
           </div>
    `)
}

export default WhoToFollowListItem;