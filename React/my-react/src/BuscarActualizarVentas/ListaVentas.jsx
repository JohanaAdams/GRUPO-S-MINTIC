import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import "./VentasStyles.css"

function ListaVentas() {

    return (
        <Fragment>
            <div class="container-fluid fond">
                <div class="card bg-dark text-black">
                    <img src="https://cdn.pixabay.com/photo/2018/01/23/03/39/handshake-3100563_960_720.jpg" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="" />
                            <figcaption class="figure-caption">Equipo S Mision Tic</figcaption>
                        </figure>
                        <table class="table table-success table-striped caption-top ">
                            <caption><h5 className="text-center text-withe btn-light">Lista de Ventas</h5></caption>
                            <thead>
                                <tr>
                                    <th scope="col">ID-Ventas</th>
                                    <th scope="col">Valor-Total</th>
                                    <th scope="col">ID-Producto</th>
                                    <th scope="col">Cantidad-Producto</th>
                                    <th scope="col">Precio-Producto</th>
                                    <th scope="col">ID-Cliente</th>
                                    <th scope="col">Nombre-Cliente</th>
                                    <th scope="col">Vendedor</th>
                                    <th scope="col">Fecha-Venta</th>
                                    <th scope="col">Estado_Venta</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">01</th>
                                    <td>24000</td>
                                    <td>002</td>
                                    <td>2</td>
                                    <td>12000</td>
                                    <td>72347636</td>
                                    <td>Carlos Cordoba</td>
                                    <td>Juan Martinez</td>
                                    <td>09/05/2021</td>
                                    <td>Cancelado</td>
                                </tr>
                                <tr>
                                    <th scope="row">02</th>
                                    <td>15000</td>
                                    <td>001</td>
                                    <td>1</td>
                                    <td>15000</td>
                                    <td>67348901</td>
                                    <td>Jose Avila</td>
                                    <td>cristina Gonzalez</td>
                                    <td>13/05/2021</td>
                                    <td>Cancelado</td>
                                </tr>
                                <tr>
                                    <th scope="row">03</th>
                                    <td>75000</td>
                                    <td>001</td>
                                    <td>5</td>
                                    <td>15000</td>
                                    <td>10428650</td>
                                    <td>Rosa Machado</td>
                                    <td>Luis Arias</td>
                                    <td>17/05/2021</td>
                                    <td>Cancelado</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <Link to="/BuscarActualizarVentas" className="nav-link " type="submit" class="btn btn-light">REGRESAR</Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ListaVentas;