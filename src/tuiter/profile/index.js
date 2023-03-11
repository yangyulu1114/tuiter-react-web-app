import React from "react";
import profile from "./profile.json"
import "./index.css"

const ProfileComponent = () => {
    return (
        <div className="border border-thin ps-2 pe-2">
            <div className="border border-light">
                <img width="100%" height="50%" src={`/images/${profile.bannerPicture}`}/>
                <img className="rounded-circle wd-relative" width={100} src={`/images/${profile.profilePicture}`}/>
                <button className="rounded-pill btn border float-end mt-2 me-3 ps-3 pe-3 fw-bold">
                    EditProfile
                </button>
                <div className="wd-relative-top ms-3">
                    <span className="fw-bold">{profile.firstName} {profile.lastName}</span><br/>
                    <span className="text-muted">{profile.handle}</span>
                    <p className="text-muted mt-2">{profile.bio}</p>

                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;