// import React from "react";
// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import Fags from "../src/components/Fags";

// const root = document.getElementsByClassName("faq-content");

// ReactDOM.render(
//   <StrictMode>
//     <Fags />
//     <h1>Salam</h1>
//   </StrictMode>,
//   root
// );

let questionBlock = document.querySelectorAll(".question");
questionBlock.forEach(element => {
    element.addEventListener("click", (e)=>{
        
        if(element.firstElementChild.lastElementChild.style.display == "none" || element.firstElementChild.lastElementChild.style.display == ""){
            
            element.lastElementChild.firstElementChild.style.display = "none";
            element.lastElementChild.lastElementChild.style.display = "initial";
            element.style.background = "#FFF6F3";
            element.style.filter = "drop-shadow(0px 4px 9px rgba(229, 100, 65, 0.13));";
            element.firstElementChild.lastElementChild.style.display = "initial";
        }else{
            
            element.lastElementChild.firstElementChild.style.display = "initial";
            element.lastElementChild.lastElementChild.style.display = "none";
            element.style.background = "#FFF";
            element.style.filter = "drop-shadow(0px 4px 9px rgba(230, 230, 230, 0.25))";
            element.firstElementChild.lastElementChild.style.display = "none";
        }
    })
});