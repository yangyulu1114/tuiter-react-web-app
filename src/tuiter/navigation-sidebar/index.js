import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>
            <a className={`list-group-item
                ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill align-middle mt-1"></i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash align-middle"></i>
                <span className="align-middle d-none ms-2 d-none d-xl-inline-block">Explore</span>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill align-middle mt-1"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill align-middle mt-1"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots align-middle mt-0"> </i>
                <span className="align-middle ms-2 d-none d-xl-inline-block">More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;
