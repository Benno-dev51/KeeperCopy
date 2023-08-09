import React from "react";
import "../index.css"


function Footer(){
const year =new Date().getFullYear()
    return <footer className="footer"> <p>Hecho con amor por benito lopez {year}</p></footer>
}
export default Footer
