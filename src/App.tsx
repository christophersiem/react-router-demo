import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import WelcomePage from "./components/WelcomePage";


function App() {
    return (
        <HashRouter>
            <h1>Super Router Demo Project</h1>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/welcome/:name"} element={<WelcomePage/>}/>
            </Routes>
        </HashRouter>

    );
}

export default App;
