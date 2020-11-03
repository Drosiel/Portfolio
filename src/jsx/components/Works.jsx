import React from "react";
import BDWorks from "../../DataBase/DBWorks.json"
import ShortDisc from "./ShortDisc"

export class Works extends React.Component {
    mouseEnter() {
           
    }
    mouseLeave() {
           
    }

    render() {
        return (
            <React.Fragment>
                <div className="board__wrapper">
                    <h2 className="board__item-title">работы</h2>
                    <div className="board__item works">
                        <div className="board__item-content">
                            <ul className="works__list">
                                {Object.keys(BDWorks).map(ID => (  
                                <li key={ID} className="works__item" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                                    <div className="works__box">
                                        <a href={BDWorks[ID].link} className="works__link">{BDWorks[ID].id}</a>
                                        <div className="works__anim"></div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
