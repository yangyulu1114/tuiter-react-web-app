import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css"
import {updateProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state => state.profile));
    let[newProfile, setNewProfile] = useState(profile);
    let[fullName, setFullName] = useState(`${newProfile.firstName} ${newProfile.lastName}`)

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile`;
        navigate(path);
    }

    const onSave = () => {
        const first = fullName.split(" ")[0].trim();
        const last = fullName.split(" ")[1].trim();
        const upDatedProfile = {
            ...newProfile,
            firstName:first,
            lastName:last,
            handle:`@${first}`
        }
        dispatch(updateProfile(upDatedProfile));
        routeChange();
    }


    return (
        <div className="border border-thin">
            <div>
                <div className="mt-1 mb-2 row">
                    <div className="col-1 ms-3 pointer" onClick={routeChange}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <div className="col-8 ms-2">
                        <span>Edit Profile</span>
                    </div>
                    <div className="col-2">
                        <button className="rounded-pill btn border float-end wd-font-13 btn-dark ps-3 pe-3 pt-1 pb-1" onClick={onSave}>
                              Save
                        </button>
                    </div>

                </div>
                <img width="100%" height="50%" src={`/images/${profile.bannerPicture}`}/>
                <img className="rounded-circle wd-relative" width={100} src={`/images/${profile.profilePicture}`}/>
                <div className="wd-relative-icon1 wd-dimension-50 wd-bg-gray rounded-circle fs-3 d-flex justify-content-center align-items-center">
                    <i className="bi bi-camera"></i>
                </div>
                <div className="wd-relative-icon2 wd-dimension-50 wd-bg-gray rounded-circle fs-3 d-flex justify-content-center align-items-center">
                    <i className="bi bi-camera"></i>
                </div>
                <div className="wd-relative-icon3 wd-dimension-50 wd-bg-gray rounded-circle fs-3 d-flex justify-content-center align-items-center">
                    <i className="bi bi-x"></i>
                </div>
                <div className="ms-3 me-3 wd-relative-top2">
                    <input onChange={(e) => setFullName(e.target.value)}
                           className="form-control" value={fullName}/>
                    <textarea
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            bio : e.target.value,
                        })}
                        value={newProfile.bio} placeholder="Bio"
                              className="form-control mt-4">
                    </textarea>
                    <input
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            location : e.target.value,
                        })}
                        className="form-control mt-4" placeholder="Location" value={newProfile.location}/>
                    <input
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            website : e.target.value,
                        })}
                        className="form-control mt-4" placeholder="Website" value={newProfile.website}/>
                </div>

            </div>
        </div>
    );
};

export default EditProfileComponent;