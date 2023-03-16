import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css"

const EditProfileComponent = () => {
    const profile = useSelector((state => state.profile));
    const[newProfile, setNewProfile] = useState(profile);

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile`;
        navigate(path);
    }

    const onNameChange = (text) => {
        const names = text.split(" ")
        console.log(names.length)
        const first = names.length > 0 ? text.split(" ")[0] : ""
        const last = names.length > 1 ? text.split(" ")[1] : ""
        console.log(first)
        console.log(last)
        setNewProfile({
                ...newProfile,
                firstName:first,
                lastName:` ${last}`,
            }
        )
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
                    <input onChange={(e) => onNameChange(e.target.value)}
                           className="form-control" value={`${newProfile.firstName}${newProfile.lastName}`}/>
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
                        className="form-control mt-4" placeholder="Website"/>
                </div>

            </div>
        </div>
    );
};

export default EditProfileComponent;