import "./tuit.css";
import {deleteTuit,updateTuitStats} from "./tuits-reducer";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = ({tuit}) => {
    console.log(tuit);
    const dispatch = useDispatch();
    const onClickLike = (id) => {
        dispatch(updateTuitStats(id));
    }
    return (
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item border-0 ps-0">
                    <i className="bi bi-chat"></i><span className="text-muted"> {tuit.replies}</span>
                </li>
                <li className="list-group-item ms-5 border-0 ps-0">
                    <i className="bi bi-repeat"></i><span className="text-muted"> {tuit.retuits}</span>
                </li>
                <li className="list-group-item ms-5 border-0 ps-0">
                    {tuit.liked ? <i className="bi bi-heart-fill wd-color-red" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes - 1
                    }))}> </i> : <i className="bi bi-heart" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes + 1
                    }))}> </i>} <span className="text-muted">{tuit.likes}</span>
                </li>
                <li className="list-group-item ms-5 border-0 ps-0 bg-transparent">
                    <i className="bi bi-upload me-5"></i>
                </li>

            </ul>
    );
};

export default TuitStats;