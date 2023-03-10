import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";
import WhatsHappening from "../home/whats-happening";
const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <div>
            <h3>Home</h3>
            <WhatsHappening/>
            <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}/>
                )
            }
        </ul>
        </div>
    );
};

export default TuitsList;