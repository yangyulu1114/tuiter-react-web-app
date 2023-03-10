import tuitsArray from "./tuits.json";
import React from "react";
import TuitItem from "./TuitItem";
const TuitsList = () => {
    return (
        <div>
            <h3>Home</h3>
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