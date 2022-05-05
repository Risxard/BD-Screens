import React from "react";
import "./BackgroundAppOut.css"
import MenuSlider from "./MenuSlider/MenuSlider"



var bgapp = () => {


    return (
        <div className="BackgroundApp-Container">
            <MenuSlider></MenuSlider>
            
            <div className="BackgroundApp-API">

                <div className="Register-Container">

                </div>

                <div className="Img-Api">
                    <span className="Bg-filter"></span>
                    <img src="https://cdn.mos.cms.futurecdn.net/JrC7KA4TUEnCK5U3j5PAJc.jpg" alt="" />
                </div>
            </div>
        </div>
    )


}

export default bgapp
