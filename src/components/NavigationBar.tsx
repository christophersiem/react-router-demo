import {NavLink} from "react-router-dom";
import React from "react";

export default function NavigationBar() {

    return (
        <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/feature"}>Feature</NavLink>
        </>
    )
}