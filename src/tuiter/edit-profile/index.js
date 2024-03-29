import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css"
import {updateProfile} from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state => state.profile));
    let[newProfile, setNewProfile] = useState(profile);
    let[fullName, setFullName] = useState(`${newProfile.firstName} ${newProfile.lastName}`);
    let[editing, setEditing] = useState(false);
    let[birthDate, setBirthDate] = useState(newProfile.dateOfBirth);
    const birth_year = (newProfile.dateOfBirth).split('-')[0];
    let[newBirthYear, setNewBirthYear] = useState(birth_year);


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
            handle:`@${first}`,
            dateOfBirth : birthDate
        }
        dispatch(updateProfile(upDatedProfile));
        routeChange();
    }

    const onDateChange = (value) => {
        setBirthDate(value);
        setEditing(false);
        setNewBirthYear(value.split("-")[0]);
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
                   <label className="text-muted wd-relative-bottom-25" htmlFor="name"> Name </label>
                    <input id = "name" onChange={(e) => setFullName(e.target.value)}
                           className="form-control pt-4" value={fullName}/>

                    <label className="text-muted wd-relative-bottom-25" htmlFor="bio"> Bio </label>
                    <textarea id = "bio"
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            bio : e.target.value,
                        })}
                        value={newProfile.bio}
                              className="form-control pt-4">
                    </textarea>

                    <label className="text-muted wd-relative-bottom-25" htmlFor="location"> Location </label>
                    <input
                        id="location"
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            location : e.target.value,
                        })}
                        className="form-control pt-4" value={newProfile.location}/>

                    <label className="text-muted wd-relative-bottom-25" htmlFor="website"> Website </label>

                    <input
                        id = "website"
                        onChange={(e) => setNewProfile({
                            ...newProfile,
                            website : e.target.value,
                        })}
                        className="form-control pt-4" value={newProfile.website}/>

                    <div className="mt-4">
                    <label className="text-muted" htmlFor="birth"> Birth date </label> . <span className="text-primary" onClick={(e) => setEditing(true)}>Edit</span><br/>
                        {editing ? <input onChange={(e) => onDateChange(e.target.value)} type="date" value={birthDate}/> : <span className="bg-black font-color-black ">{profile.dateOfBirth}</span>}
                        <span> {newBirthYear}</span>
                    </div>

                    <div className="mt-3">
                        <i className="bi bi-arrow-right float-end fs-4"></i>
                        <span>Switch to professional</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditProfileComponent;