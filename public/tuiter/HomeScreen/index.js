/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import postSummaryList from "../PostSummaryList/index.js";

$('#wd-home').append(`
   <div class="row mt-2 mb-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
        ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
<!--        central part-->
        <ul class="list-group"> 
            <li class="list-group-item">
                <div class="row">
                    <div class="col-1 p-0 ms-3">
                        <img class="rounded-circle"
                        width="50px"
                        src="../../images/profile-image.jpg"/>
                    </div>
                    <div class="col-10 ms-2 pe-0">
                        <span class="me-xl-2 fw-bold">Elon Musk</span><i class="fa fa-check-circle"></i>
                        <span class="text-muted">@elonmusk.23h</span>
                        </br>
                        <span>Amazing how about @inspiration4x mission!</span>
                        <div class="mt-2">
                            <img width="100%"
                            src="../../images/inspiration4x.jpg">
                            <div class="ms-2">
                                <p class="mb-2">Watch Countdown: Inspiration4 Mission to Space | Netflix Official Site</p>
                                <span class="text-dark">From training to launch to landing, this all-access docuseries rides along with
                                 the Inspiration4 crew on the first all-civilian orbital space mission.</span></br>
                                 <i class="fa fa-link text-muted"> netflix.com</i>
                            </div>
                        </div>
                        
                        <div>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item me-5">
                                    <i class="fa fa-comment text-muted">  4.2K</i>
                                </li>
                                <li class="list-group-item me-5">
                                    <i class="fa fa-retweet text-muted">  3.5K</i>
                                </li>
                                <li class="list-group-item me-5">
                                    <i class="fa fa-heart text-muted">  35K</i>
                                </li>
                                 <li class="list-group-item me-5">
                                    <i class="fa fa-upload text-muted me-5"></i>
                                </li>
                                
                            </ul>
                        </div>
                 
                    </div>
                </div>
            </li>
             <li class="list-group-item">
                <div class="row">
                    <div class="col-1 p-0 ms-3">
                        <img class="rounded-circle"
                        width="50px"
                        src="../../images/profile-image.jpg"/>
                    </div>
                    <div class="col-10 ms-2 pe-0">
                        <span class="me-xl-2 fw-bold">Elon Musk</span><i class="fa fa-check-circle"></i>
                        <span class="text-muted">@elonmusk.23h</span>
                        </br>
                        <span>Amazing how about @inspiration4x mission!</span>
                        <div class="mt-2">
                            <img width="100%"
                            src="../../images/inspiration4x.jpg">
                            <div class="ms-2">
                                <p class="mb-2">Watch Countdown: Inspiration4 Mission to Space | Netflix Official Site</p>
                                <span class="text-dark">From training to launch to landing, this all-access docuseries rides along with
                                 the Inspiration4 crew on the first all-civilian orbital space mission.</span></br>
                                 <i class="fa fa-link text-muted"> netflix.com</i>
                            </div>
                        </div>
                        
                        <div>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item me-5">
                                    <i class="fa fa-comment text-muted">  4.2K</i>
                                </li>
                                <li class="list-group-item me-5">
                                    <i class="fa fa-retweet text-muted">  3.5K</i>
                                </li>
                                <li class="list-group-item me-5">
                                    <i class="fa fa-heart text-muted">  35K</i>
                                </li>
                                 <li class="list-group-item me-5">
                                    <i class="fa fa-upload text-muted me-5"></i>
                                </li>
                                
                            </ul>
                        </div>
                 
                    </div>
                </div>
            </li>
        </ul>
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
        ${postSummaryList()}
   </div>
  </div>
   `);