import React from "react";
import profile from "./profile.json"
import "./index.css"

const ProfileComponent = () => {
    const birth_year = (profile.dateOfBirth).split('/')[2];
    const joind_year = (profile.dateJoined).split('/')[1];

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

                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-geo-alt"></i><span className="text-muted"> {profile.location}</span>
                        </li>
                        <li className="list-group-item ms-5 border-0 ps-0">
                            <i className="bi bi-balloon"></i><span className="text-muted"> Born</span> <span className="bg-black font-color-black ">{profile.dateOfBirth}</span> <span className="text-muted">{birth_year}</span>
                        </li>
                        <li className="list-group-item ms-5 border-0 ps-0 bg-transparent">
                            <i className="bi bi-calendar3 text-muted"></i> <span className="text-muted"> Joined {joind_year}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;