import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";


function MaestroProducto() {

    return (

        <Fragment>
            <div class="container-fluid fond">
                <div class="card bg-dark text-primary">
                    <img src="https://st3.depositphotos.com/1017986/19359/i/1600/depositphotos_193593502-stock-photo-warehouse-worker-carrying-loader-with.jpg" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="" />
                            <figcaption class="figure-caption">Equipo S Mision Tic</figcaption>
                        </figure>
                        <h3 class="card-title">Maestro de Productos</h3>
                        <br/>
                        <p class="card-text">Para buscar un producto, ingresa el ID del producto y haz click en BUSCAR</p>
                        <form class="d-flex">
                            <input class="form me-3" type="search" placeholder="ID VENTAS" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">BUSCAR</button>
                        </form>
                        <br /><br/>
                        <p class="card-text">Para ver la lista de productos haz click en el siguiente boton</p>
                        <Link to="/Productos" className="btn btn-outline-success" type="submit">Productos</Link>
                        <br/><br/><br/>
                        <p class="card-text">Para actualizar un producto, ingresa el ID del producto y haz click en actualizar</p>
                        <form class="d-flex">
                            <input class="form me-3" type="search" placeholder="ID VENTAS" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Actualizar</button>
                        </form>
                        <br /><br />
                        <Link to="/AreaTrabajo" className="nav-link " type="submit" class="btn btn-info">REGRESAR</Link>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default MaestroProducto;