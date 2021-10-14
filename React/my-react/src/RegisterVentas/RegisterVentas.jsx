import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./StilosRegVen.css";

function RegisterVentas() {

    return (

        <Fragment>
            <div class="container-fluid user-1">
                <div class="container user">
                    <br />
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <h2>Registrar Venta</h2>
                        </blockquote>
                    </figure>


                    <div class="container">
                        <form class="row g-3 user-2">
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Identificador de Ventas</label>
                                <input type="text" class="form-control" id="inputZip" placeholder="ID Venta - unico" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Total a Pagar</label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Total $" />
                                <br />
                            </div>

                        </form>
                        <br />
                        <div class="container user">
                            <br />
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <h4>Datos del Producto</h4>
                                </blockquote>
                            </figure>
                        </div>
                        <form class="row g-3 user-2">
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Identificador Producto</label>
                                <input type="text" class="form-control" id="inputZip" placeholder="ID Producto - unico" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">cantidad del producto</label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Cantidad" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Valor del producto</label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Precio Unitario" />
                            </div>
                        </form>
                        <form class="row g-3 user-2">
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label"></label>
                                <input type="text" class="form-control" id="inputZip" placeholder="ID Producto - unico" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label"></label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Cantidad" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label"></label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Precio Unitario" />
                            </div>
                        </form>
                        <form class="row g-3 user-2">
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label"></label>
                                <input type="text" class="form-control" id="inputZip" placeholder="ID Producto - unico" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label"></label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Cantidad" />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label"></label>
                                <input type="text" class="form-control" id="inputZip" placeholder="Precio Unitario" />
                                <br />
                            </div>
                        </form>
                        <br />
                        <div class="container user">
                            <br />
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <h4>Datos del Cliente</h4>
                                </blockquote>
                            </figure>
                        </div>
                        <br />
                        <form class="row g-3 user-2">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Documento del Cliente</label>
                                <input type="number" class="form-control" placeholder="ID Cliente" ></input>
                            </div>
                            <div class="col-md-6">
                                <label for="inputText" class="form-label">Nombre del Cliente</label>
                                <input type="text" class="form-control" id="inputText" placeholder="Nombre Completo" />
                                <br />
                            </div>
                        </form>
                        <br />
                        <div class="container user">
                            <br />
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <h4>Vendedor</h4>
                                </blockquote>
                            </figure>
                        </div>
                        <form class="user-2">
                            <div class="col-md-6 mx-auto">
                                <label for="inputText" class="form-label">Encargado de la Venta</label>
                                <input type="text" class="form-control" id="inputText" placeholder="Nombre del Vendedor" />
                            </div>
                            <br />
                            <div class="col-md-6 mx-auto">
                                <label>
                                    <h4 class="fuenteTitulo"> Fecha de venta </h4>
                                    <div class="User">
                                        <input type="date" />
                                    </div>
                                </label>
                            </div>
                        </form>
                        <br />
                        <div class="vstack gap-2 col-md-5 mx-auto">
                            <button type="button" class="btn btn-secondary user-1">Guardar Venta</button>
                            <button type="button" class="btn btn-secondary user-1">Cancel</button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>    
        </Fragment >
    )
}
export default RegisterVentas;