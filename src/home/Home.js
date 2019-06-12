import React, { Component } from 'react';
import load from "../img/load1.gif";
import AppHeader from "../common/AppHeader.js";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
            <AppHeader />
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            {/* <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div> */}
                             <img src={load} alt=""></img>
                        </div>
                    </div>
                    <h1 className="home-title"></h1>
                </div>
            </div>
        )
    }
}

export default Home;