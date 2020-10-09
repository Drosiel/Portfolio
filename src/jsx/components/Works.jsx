import React from "react";
import BDWorks from "../../DataBase/DBWorks.json"

export class Works extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="board__item works">
                    <h2 className="board__item-title">Работы:</h2>
                    <div className="board__item-content">
                        <ul className="works__list">
                            {Object.keys(BDWorks).map(ID => (  
                            <li key={ID} className="works__item">
                                <div className="works__box">
                                    <a href={BDWorks[ID].link} className="works__link">{BDWorks[ID].name}</a>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

