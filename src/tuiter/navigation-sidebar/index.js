import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                ${(active === 'home' || active == '')?'active':''}`}>
                <i className="bi bi-house-fill align-middle mt-1"></i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore' ? 'active':''}`}>
                <i className="bi bi-hash align-middle"></i>
                <span className="align-middle d-none ms-2 d-none d-xl-inline-block">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-tags-fill align-middle"></i>
                <span className="align-middle d-none ms-2 d-none d-xl-inline-block">Labs</span>
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill align-middle mt-1"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Notifications</span>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill align-middle mt-1"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${(active === 'profile' || active === 'edit-profile')?'active':''}`}>
                <i className="bi bi-person-fill align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Profile</span>
            </Link>
            <Link to="/tuiter/more" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;
