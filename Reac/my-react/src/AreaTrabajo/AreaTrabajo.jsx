import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import "./ATrabajoStyle.css"

function AreaTrabajo() {

    return (
        <Fragment>
            <div className="container-fluid work-fondo-azulos">
                <div className="container">

                    <div class="work-fondo-azulos work-letra-blanca text-center">
                        <br />
                        <h3>AREA DE TRABAJO</h3>
                        <br />
                    </div>

                    <div class="card-group">

                        <div className="card">
                        <h5 class="card-title text-center">Maestro de Ventas</h5>
                        <img src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_640.jpg" class="card-img-top" alt=""/>                                 
                            <div class="card-body work-fondo">
                                <p class="card-text">Para ir al contenido haz clip en el siguiente boton</p>
                                <Link to="/BuscarActualizarVentas" className="nav-link " type="submit" class="btn btn-light">Maestro V.</Link>
                            </div>
                            <div class="card-footer work-title">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>

                        <div class="card">
                            <h5 class="card-title text-center">Maestro de Producto</h5>
                            <img src="https://alemdojob.ielusc.br/wp-content/uploads/2018/09/business-planning-1.jpg" class="card-img-top" alt=""/>
                            <div class="card-body work-fondo">
                                <p class="card-text">Para ir al contenido haz clip en el siguiente boton</p><Link to="/MaestroProducto" className="nav-link stylLetra" type="submit" class="btn btn-light">Maestro P.</Link>

                            </div>
                            <div class="card-footer work-title">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>

                        <div class="card">
                            <h5 class="card-title text-center">Maestro de Usuario</h5>
                            <img src="https://cdn.pixabay.com/photo/2017/11/12/22/50/human-2944064_960_720.jpg" class="card-img-top" alt=""/>
                            <div class="card-body work-fondo">
                                <p class="card-text">Para dar permisos a usuarios haz clip en el siguiente boton</p> <Link to="/GestionUsuario" className="nav-link stylLetra" type="submit" class="btn btn-light">Maestro U.</Link>
                            </div>
                            <div class="card-footer work-title">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>

                    <div class="card-group">

                        <div class="card">
                            <h5 class="card-title text-center">Registrar Ventas</h5>
                            <img src="https://th.bing.com/th/id/R.9427d6d79b75384d2a5c4346b73c3bf1?rik=R889QZB%2f3nnUMw&riu=http%3a%2f%2fwww.solucionespm.com%2fwp-content%2fuploads%2f2018%2f01%2fventas.jpg&ehk=NIx9Q53OeoSJ9FJ5cUw1Kz81So4hUN%2fxTXmU%2baTZn0c%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt=""/>
                            <div class="card-body work-fondo">
                                <p class="card-text">Para registrar una venta haz clip en el siguiente boton</p> <Link to="/RegisterVentas" className="nav-link stylLetra" type="submit" class="btn btn-light">Registrar V.</Link>
                            </div>
                            <div class="card-footer work-title">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>

                        <div class="card">
                            <h5 class="card-title text-center">Registrar Productos</h5>
                            <img src="https://th.bing.com/th/id/R.17da3f9fefea66a32430df83d192b565?rik=hDDOphGZxvXfWg&riu=http%3a%2f%2fwww.freejpg.com.ar%2fasset%2f900%2f5e%2f5e11%2fF100010360.jpg&ehk=2cGpjKUDHSOiEFON3Q3%2f7061NvTLnPU3SDcO%2b8YsKWc%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt=""/>
                            <div class="card-body work-fondo">
                                <p class="card-text">Para registrar un producto haz clip en el siguiente boton</p> <Link to="/RegisProduct" className="nav-link stylLetra" type="submit" class="btn btn-light">Registrar P.</Link>
                            </div>
                            <div class="card-footer work-title">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Link to="/" className="btn work-fondo"><button className="btn work-title">REGRESAR</button></Link>

                </div>
                <br />
            </div>
        </Fragment>
    )
}

export default AreaTrabajo;