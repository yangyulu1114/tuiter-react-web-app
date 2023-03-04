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
        <div>
            {/*<Link to="/">Lab</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <ExploreComponent/>
            <h1>Tuiter</h1>
        </div>
    );
}
export default Tuiter