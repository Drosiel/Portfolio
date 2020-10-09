import React from "react";
import BDSkills from "../../DataBase/DBSkills.json"

export class Skills extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="board__item skills">
                    <h2 className="board__item-title">Навыки:</h2>
                    <div className="board__item-content">
                        <ul className="skills__list">
                            {Object.keys(BDSkills).map(ID => (
                            <li key={ID} className="skills__item">
                                <div className="skills__box">{BDSkills[ID].skill}</div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}