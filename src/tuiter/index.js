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
import HomeComponent from "./home";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Labs from "../labs";

function Tuiter() {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                {/*<NavigationSidebar active="explore"/>*/}
                <Routes>
                    <Route index element={<NavigationSidebar active="explore"/>}/>
                    <Route path="/home"    element={<NavigationSidebar active="home"/>}/>
                    <Route path="/explore" element={<NavigationSidebar active="explore"/>}/>
                </Routes>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                <Routes>
                    <Route index element={<ExploreComponent/>}/>
                    <Route path="/home"    element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter