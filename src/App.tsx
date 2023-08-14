import React from "react";
import "./App.scss";
import SideMenu from "./components/SIdeMenu";
import Main from "./components/Main";


function App() {

    return (
        <div className={'flex'}>
        <SideMenu />
        <Main />
        </div>
    );
}

export default App;