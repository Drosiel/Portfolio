import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <header className="header container">
                    <div className="header__inner">
                        <div className="header__info">
                            <span><span>Статус: </span>в поиске работы</span>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}