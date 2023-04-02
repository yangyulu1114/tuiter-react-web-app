/* eslint-env jquery */
import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    // $('#wd-exploreComponent').append(`
    return(`
            <div class="row">
                <div class="input-group">
                    <input type="search" class="form-control rounded-pill ps-5 fa-stack me-4" placeholder = "Search Tuiter">
                    <i class="fa fa-cog fa-2x align-middle"  style="color:dodgerblue"> </i>
                    <i class="fas fa-search position-absolute ms-2 mt-2"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                 <li class="nav-item">
                     <a class="nav-link active" href="#">For you</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">Trending</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#">News</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="#" tabindex="-1">Sports</a>
                 </li>
                 <li class="nav-item d-none d-md-inline-block">
                     <a class="nav-link" href="#">Entertainment</a>
                 </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="bg-image position-relative">
               <img class="w-100"
                    src="../../images/spaceX.jpg"/>
               <h3 class="position-absolute text-light ms-2 bottom-0">SpaceX's Starship</h3>

           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
// $(ExploreComponent)