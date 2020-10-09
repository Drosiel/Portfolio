import React from "react"

export class Footer extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="footer">
                    <div className="footer__inner">
                        <div className="footer__title">
                            <span className="footer__text">Сайт сделан с использованием React</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}