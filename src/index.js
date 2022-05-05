import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header logado={false} ></Header>
    </React.StrictMode>
)