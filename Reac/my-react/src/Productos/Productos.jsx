import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";


function Productos() {
    return (
        <Fragment>
            <div className="container">
                

                <div class="clearfix">  </div>

                <section id="content">

                    <article class="article">
                        <h2>Productos</h2>
                        <h5>Lista de Productos</h5>
                        <table>

                            <tr>
                                <br />
                                <th>ID Producto</th>
                                <br />
                                <th>Descripcion del Producto</th>
                                <br />
                                <th>Valor Unit.</th>
                                <br />
                                <th>Estado</th>
                                <br />
                            </tr>
                            <br></br>
                            <tr>
                                <br />
                                <td>001</td>
                                <br />
                                <td>Camiseta Blanca</td>
                                <br />
                                <td>15000</td>
                                <br />
                                <td>Disponible</td>
                                <br />
                            </tr>
                            <br></br>
                            <tr>
                                <br />
                                <td>002</td>
                                <br />
                                <td>Camiseta Negra</td>
                                <br />
                                <td>12000</td>
                                <br />
                                <td>Disponible</td>
                                <br />
                            </tr>
                            <br></br>
                            <tr>
                                <br />
                                <td>003</td>
                                <br />
                                <td>Camiseta Gris</td>
                                <br />
                                <td>10000</td>
                                <br />
                                <td>No Disponible</td>
                                <br />
                            </tr>
                        </table>
                        <Link to="/AreaTrabajo" className="nav-link stylLetra">Regresar</Link>
                    </article>
                </section>
                <aside>
                    <h4>Buscar Producto</h4>
                    <form>
                        <input type="text" />
                        <input type="submit" value="Buscar" />
                    </form>
                </aside>
                <div class="clearfix">  </div>
                <footer>
                    Dora Pulido WEB &copy; 2021
                </footer>

            </div>
        </Fragment>
    )
}
export default Productos;        
