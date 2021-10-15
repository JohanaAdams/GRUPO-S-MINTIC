import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import "./ATrabajoStyle.css"

function AreaTrabajo() {

    return (
        <Fragment>
            <div class="work-fondo">
            <h1>AREA DE TRABAJO</h1>
            </div>
            <div class="card-group">
                <div class="card">
                    <div class="card-body work-title">
                        <h5 class="card-title">Register product</h5>
                        <p class="card-text">Para registrar un producto haz clip en el siguiente boton</p>
                        <Link to="" className="nav-link "type="submit" class="btn btn-dark">Go register product</Link>
                    </div>
                    <div class="card-footer work-fondo btn btn-info">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-body work-fondo">
                        <h5 class="card-title">Produc Master</h5>
                        <p class="card-text">Para ir al contenido haz clip en el siguiente boton</p><Link to="" className="nav-link stylLetra"type="submit" class="btn btn-dark"> Produc Master</Link>

                    </div>
                    <div class="card-footer btn btn-info">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
               
                <div class="card">
                    <div class="card-body ">
                        <h5 class="card-title">User Master</h5>
                        <p class="card-text">Para dar permisos a usuarios haz clip en el siguiente boton</p> <Link to="" className="nav-link stylLetra"type="submit" class="btn btn-dark">User Master</Link>
                    </div>
                    <div class="card-footer work-title btn btn-info">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                        <div class="card-body work-title">
                            <h5 class="card-title">Register Sales</h5>
                            <p class="card-text">Para registrar una venta haz clip en el siguiente boton</p> <Link to="/areaTrabajo" className="nav-link stylLetra"type="submit" class="btn btn-dark">Go Register Sales</Link>
                        </div>
                        <div class="card-footer work-fondo btn btn-info">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
                <div class="card">
                        <div class="card-body work-fondo">
                            <h5 class="card-title">Sales Master</h5>
                            <p class="card-text">Para ir al contenido haz clip en el siguiente boton</p> <Link to="/areaTrabajo" className="nav-link stylLetra"type="submit" class="btn btn-dark">Sales Master</Link>
                        </div>
                        <div class="card-footer btn btn-info">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
                
            </div>

        </Fragment>
    )
}

export default AreaTrabajo;