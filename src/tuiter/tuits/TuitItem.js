import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row ms-0 me-0">
                <div className="col-1 p-0 ms-3">
                    <img className="rounded-circle"
                         width="50px"
                         src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10 ms-2 pe-0">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <span className="me-xl-2 fw-bold">{tuit.username}</span><i className="bi bi-patch-check-fill wd-color-blue"></i>
                    <span className="text-muted"> {tuit.handle}.{tuit.time}</span>
                    <br/>
                    <div>
                        {tuit.tuit}
                    </div>
                    <div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;