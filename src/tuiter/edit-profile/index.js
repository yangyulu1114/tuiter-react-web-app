import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css"

const EditProfileComponent = () => {
    const profile = useSelector((state => state.profile));

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile`;
        navigate(path);
    }
    return (
        <div className="border border-thin">
            <div>
                <div className="mt-1 mb-2 row">
                    <div className="col-1 ms-3">
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <div className="col-8 ms-2">
                        <span>Edit Profile</span>
                    </div>
                    <div className="col-2">
                        <button className="rounded-pill btn border float-end wd-font-13 btn-dark ps-3 pe-3 pt-1 pb-1" onClick={routeChange}>
                              Save
                        </button>
                    </div>

                </div>
                <img width="100%" height="50%" src={`/images/${profile.bannerPicture}`}/>
                <img className="rounded-circle wd-relative" width={100} src={`/images/${profile.profilePicture}`}/>
                <div className="ms-3 me-3 wd-relative-top">
                    <input className="form-control" value={`${profile.firstName} ${profile.lastName}`}/>
                    <textarea value={profile.bio} placeholder="Bio"
                              className="form-control mt-4">
                    </textarea>
                    <input className="form-control mt-4" value={profile.location}/>
                    <input className="form-control mt-4" value="Website"/>

                </div>

            </div>
        </div>
    );
};

export default EditProfileComponent;