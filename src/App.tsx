import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Feature from "./components/Feature";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <HashRouter>
            <h1>Super Router Demo Project</h1>
            <NavigationBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/feature"} element={<Feature/>}/>
            </Routes>
        </HashRouter>

    );
}

export default App;
