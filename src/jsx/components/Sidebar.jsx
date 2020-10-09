import React from "react"

export class Sidebar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="board__item sidebar">
                    <div className="board__item-content">
                        <div className="sidebar__item sidebar__avatar">
                            <div className="sidebar__avatar-photo"></div>
                        </div>
                        <div className="sidebar__item sidebar__info">
                            <ul className="sidebar__info-list">
                                <li className="sidebar__info-item">
                                    <span className="sidebar__info-row sidebar__info-title">Город:</span>
                                    <span className="sidebar__info-row sidebar__info-text">Челябинск</span>
                                </li>
                                <li className="sidebar__info-item">
                                    <span className="sidebar__info-row sidebar__info-title">Специальность:</span>
                                    <span className="sidebar__info-row sidebar__info-text">Frontend-разработчик</span>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-item sidebar__contacts">
                            <ul className="sidebar__contacts-list">
                                <li className="sidebar__contacts-item">
                                    <a href="hh.ru/resume/d5cc3e7cff03ab38c60039ed1f416e4a6e6462" className="sidebar__contacts-link" target="_blank">Резюме на hh</a>
                                </li>
                                {/* <li className="sidebar__contacts-item">
                                    <a href="" className="sidebar__contacts-link" target="_blank">Резюме на LinkedIn</a> 
                                </li> */}
                                <li className="sidebar__contacts-item">
                                    <a href="https://github.com/Drosiel" className="sidebar__contacts-link" target="_blank">GitHub</a>
                                </li>
                                <li className="sidebar__contacts-item">
                                    <a href="https://www.codewars.com/users/Grimm" className="sidebar__contacts-link" target="_blank">Codewars</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}