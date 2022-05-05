import React from "react";
import NavLogOut from "./Navigation/NavLogOut"
import BackgroundAppOut from "./BackGroundApp/BackgroundAppOut"



import "./Header.css"



var header = (props) => {
    const logged = props.logado

    return (
        <header>

            {logged === true ? <h2>ESTÁ LOGADO!</h2> : <NavLogOut></NavLogOut>}
            <BackgroundAppOut></BackgroundAppOut>
        </header>
    )
}



export default header