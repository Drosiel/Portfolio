import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <header className="header container">
                    <div className="header__inner">
                        <div className="header__item header__info">
                            <div className="header__info-item level">
                                <div className="level__box">
                                    <span> возраст: 31</span> 
                                </div>
                            </div>

                            <div className="header__info-item prace">
                                <div className="prace__box">
                                    <span>40 000 ₽</span>
                                </div>
                            </div>
                        </div>

                        <div className="header__item theme"></div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}