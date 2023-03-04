import {Link}
    from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/who-to-follow-list-item";

function Tuiter() {
    return(
        <div>
            {/*<Link to="/">Lab</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem who={{
                userName: 'NASA', handle: 'NASA',
                avatarIcon: 'NASA.JPG',
            }}/>
            <WhoToFollowListItem who={{
                userName: 'Tesla', handle: 'tesla',
                avatarIcon: 'TESLA.JPG',
            }}/>
            <WhoToFollowListItem who={{
                userName: 'SpaceX', handle: 'SpaceX',
                avatarIcon: 'spaceX_logo.jpg',
            }}/>
            <h1>Tuiter</h1>
        </div>
    );
}
export default Tuiter