import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function NavbarComponents() {

   

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-primario">
                <div className="container">

                    <div className="container collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/login" className="nav-link btn btn-light ">INICIAR SESION</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to="/Register" className="nav-link btn btn-dark">REGISTRARSE</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="container carousel-inner">
                        <div class="carousel-item">
                            <img src="http://4.bp.blogspot.com/-Nies-LnMz1w/UT9I6OhvewI/AAAAAAAALaw/uhk7aPZ7L_c/s1600/ejemplos-planes-empresa-gratis.jpg" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item active">
                            <img src="https://img.lovepik.com/photo/40017/1135.jpg_wh860.jpg" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://media.istockphoto.com/photos/creative-business-people-working-on-business-project-in-office-picture-id1164704303" class="d-block w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}


export default NavbarComponents;