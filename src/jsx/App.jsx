import React from "react";

import { Header } from "./components/Header"
import { Works } from "./components/Works"
import { Skills } from "./components/Skills"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import { ShortDisc } from "./components/ShortDisc"

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="board container">
                    <div className="board__inner">
                        <div className="board__content">
                            <div className="board__box">
                                <Sidebar />
                                <Skills />
                                <Works />
                                <ShortDisc />
                            </div>
                        </div>
                    </div>
                </main>
                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}