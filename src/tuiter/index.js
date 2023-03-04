import {Link}
    from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";

function Tuiter() {
    return(
        <div className="row mt-2">
            <div className="col-3 col-md-3 col-lg-2 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-9 col-md-9 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter