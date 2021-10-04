import React from "react";
import {Link} from "react-router-dom";
import "./NavarStyle.css"

function NavbarComponents(props){

let title = props.title;
let data = props.data;

return (
    <nav className="navbar navbar-expand-lg bg-primario">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">{title}</a>
        <button className="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/" className="nav-link active stylLetra" 
                aria-current="page">My-Negocio</Link>
                <Link to="/login" className="nav-link stylLetra">Login</Link>
                <Link to="/Register" className="nav-link stylLetra">Register</Link>
            
            
            </div>
        </div>
    </div>
</nav>
)
} 


export default NavbarComponents;