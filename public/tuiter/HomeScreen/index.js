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
                    <div class="col-1">
                        <img class="rounded-circle"
                        width="50px"
                        src="../../images/profile-image.jpg"/>
                    </div>
                    <div class="col-10 ms-3 me-0">
                        <span class="me-xl-2 fw-bold">Elon Musk</span><i class="fa fa-check-circle"></i>
                        <span class="text-muted">@elonmusk.23h</span>
                        </br>
                        <span>Amazing how about @inspiration4x mission!</span>
                        <div class="mt-2">
                            <img width="100%"
                            src="../../images/inspiration4x.jpg">
                            <div>
                                <span">Watch Countdown: Inspiration4 Mission to Space | Netflix Official Site</span>
                                <p>From training to launch to landing, this all-access docuseries rides along with
                                 the Inspiration4 crew on the first all-civilian orbital space mission.</p>
                                 <span>netflix.com</span>
                            </div>
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