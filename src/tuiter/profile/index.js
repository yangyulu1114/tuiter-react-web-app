import React from "react";
import "./index.css"
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector((state => state.profile));
    const birth_year = (profile.dateOfBirth).split('/')[2];
    const joind_month = (profile.dateJoined).split('/')[0]
    const joind_year = (profile.dateJoined).split('/')[1];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="border border-thin ps-2 pe-2">
            <div className="border border-light">
                <div className="ms-2 mt-1 row">
                    <div className="col-1">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-10 ms-2">
                        <span>{profile.firstName} {profile.lastName}</span><br/>
                        <span className="text-muted wd-font-13 mt-0">{profile.tuitsCount} tweets</span>
                    </div>
                </div>
                <img width="100%" height="50%" src={`/images/${profile.bannerPicture}`}/>
                <img className="rounded-circle wd-relative" width={100} src={`/images/${profile.profilePicture}`}/>
                <button className="rounded-pill btn border float-end mt-2 me-3 ps-3 pe-3 fw-bold">
                    EditProfile
                </button>
                <div className="wd-relative-top ms-3">
                    <span className="fw-bold">{profile.firstName} {profile.lastName}</span><br/>
                    <span className="text-muted wd-font-13">{profile.handle}</span>
                    <p className="text-muted mt-2 mb-0 wd-font-15">{profile.bio}</p>

                    <ul className="list-group list-group-horizontal wd-font-15">
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-geo-alt"></i><span className="text-muted"> {profile.location}</span>
                        </li>
                        <li className="list-group-item ms-5 border-0 ps-0">
                            <i className="bi bi-balloon"></i><span className="text-muted"> Born</span> <span className="bg-black font-color-black ">{profile.dateOfBirth}</span> <span className="text-muted">{birth_year}</span>
                        </li>
                        <li className="list-group-item ms-5 border-0 ps-0 bg-transparent">
                            <i className="bi bi-calendar3 text-muted"></i> <span className="text-muted"> Joined {months[joind_month - 1]} {joind_year}</span>
                        </li>
                    </ul>

                    <span className="wd-font-13">{profile.followingCount}</span><span className="text-muted wd-font-13"> Following</span>
                    <span className="ms-5 wd-font-13">{profile.followersCount}</span><span className="text-muted wd-font-13"> Followers</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;