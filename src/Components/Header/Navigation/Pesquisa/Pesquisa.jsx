import React from "react";
import "./Pesquisa.css"

var pesquisa = () => {
    var show = () =>{
        const mostrar = document.getElementById("pesquisa-container");
        const esconder = document.getElementById("btn-search");




        mostrar.classList.remove("activeSearch");
        esconder.classList.remove("activeSearch");
    }

    return (
        <div id="pesquisa-container">
            <span id="btn-close" onClick={show}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.046 1C9.91407 1.00212 11.705 1.74514 13.0259 3.06606C14.3469 4.38699 15.0899 6.17793 15.092 8.046C15.0939 9.69034 14.5181 11.2831 13.465 12.546L16.809 15.89C16.931 16.012 16.9995 16.1775 16.9995 16.35C16.9995 16.5225 16.931 16.688 16.809 16.81C16.687 16.932 16.5215 17.0005 16.349 17.0005C16.1765 17.0005 16.011 16.932 15.889 16.81L12.545 13.465C11.2824 14.5178 9.69 15.0937 8.046 15.092C6.17793 15.0899 4.38699 14.3469 3.06606 13.0259C1.74514 11.705 1.00212 9.91407 1 8.046C1.00212 6.17793 1.74514 4.38699 3.06606 3.06606C4.38699 1.74514 6.17793 1.00212 8.046 1ZM8.046 2.3C6.52273 2.30185 5.06239 2.90786 3.98536 3.98507C2.90834 5.06228 2.30259 6.52273 2.301 8.046C2.30285 9.5691 2.90872 11.0293 3.98572 12.1063C5.06271 13.1833 6.5229 13.7891 8.046 13.791C9.5691 13.7891 11.0293 13.1833 12.1063 12.1063C13.1833 11.0293 13.7891 9.5691 13.791 8.046C13.7891 6.5229 13.1833 5.06271 12.1063 3.98572C11.0293 2.90872 9.5691 2.30285 8.046 2.301V2.3Z" fill="white" stroke="white" strokeWidth="0.5"/>
                </svg>
            </span>
        <input type="text" />
        </div>
    )

}



export default pesquisa