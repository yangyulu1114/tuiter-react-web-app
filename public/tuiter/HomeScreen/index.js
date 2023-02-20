/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import postSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

$('#wd-home').append(`
   <div class="row mt-2 mb-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--    <h3>NavigationSidebar</h3>-->
        ${NavigationSidebar('Home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
<!--        central part-->
        <ul class="list-group"> 
        ${PostList()}

        </ul>
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
        ${postSummaryList()}
   </div>
  </div>
   `);