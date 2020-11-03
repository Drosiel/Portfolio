import React from "react";
import BDWorks from "../../DataBase/DBWorks.json"

export class ShortDisc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {Object.keys(BDWorks).map(ID => (
                    <div key={ID} className="works__disc">{BDWorks[ID].description}</div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
};