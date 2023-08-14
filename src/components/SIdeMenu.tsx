import React from "react";
import "../App.scss";
import {useLocation} from "react-router-dom";
function SideMenu() {
    const location = useLocation();

    let streamerPhoto = location.state.photo;
    console.log(streamerPhoto);
    return(
        <aside className="sidebar">
            <div className="sidebar-avatar">
                <img src={streamerPhoto}   alt=""/>
            </div>

            <div className="sidebar-options">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </aside>
    );
}
export default SideMenu;