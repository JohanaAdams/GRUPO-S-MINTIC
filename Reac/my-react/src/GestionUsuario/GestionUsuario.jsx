import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";

function GestionUsuario() {

    return (

        <Fragment>
            <div class="container-fluid ">
                <table class="table table-dark table-striped caption-top container">
                    <caption><h5>Gestion de Usuario</h5></caption>
                    <thead>
                        <tr>
                            <th scope="col">Nombre del usuario</th>
                            <th scope="col">roll del usuario</th>
                            <th scope="col">Estado del usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Jhonatan Rodriguez</th>
                            <td>Administrador</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <th>andres Tapia</th>
                            <td>Administrador</td>
                            <td>No autorizado</td>
                        </tr>
                        <tr>
                            <td>Carlos Asprilla</td>
                            <td>Vendedor</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <th>Alvaro Murillo</th>
                            <td>Vendedor</td>
                            <td>Autorizado</td>
                        </tr>
                        <tr>
                            <th>Miguel Ramos</th>
                            <td>Vendedor</td>
                            <td>No autorizado</td>
                        </tr>
                        <tr>
                            <th>Yessid Avila</th>
                            <td>Vendedor</td>
                            <td>Pendiente</td>

                        </tr>
                        <tr>
                            <th>Rafael Maldonado</th>
                            <td>Vendedor</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </Fragment>
    )
}
export default GestionUsuario;