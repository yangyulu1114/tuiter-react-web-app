import {Link}
    from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
function Tuiter() {
    return(
        <div>
            {/*<Link to="/">Lab</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            <Nav/>
            <NavigationSidebar active="home"/>
            <h1>Tuiter</h1>
        </div>
    );
}
export default Tuiter