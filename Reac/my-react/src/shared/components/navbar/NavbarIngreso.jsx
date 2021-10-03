import React from "react";
import {Link} from "react-router-dom";
import "./NavarStyle.css"

function NavbarIngreso(props){

let title = props.title;
let data = props.data;

return (
    <nav className="navbar navbar-expand-lg bg-primary">
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
        
                <Link to="/login" className="nav-link stylLetra">Administrador</Link>
                <Link to="/login" className="nav-link stylLetra">Vendedor</Link>
                <Link to="/login" className="nav-link stylLetra">Cliente</Link>
            
            </div>
        </div>
    </div>
</nav>
)
} 


export default NavbarIngreso;