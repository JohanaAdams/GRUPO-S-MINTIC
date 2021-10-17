import React, { Fragment, useState } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";


function RegisProduct() {
    const [counter, setCounter] = useState(0);
    const [cod, setCod] = useState("");
    const [desc, setDesc] = useState("");
    const [valor, setValor] = useState(0)
    const [estad, setEstad]=useState("")
    return (
        <Fragment>
            <div className="App container">
                <div className="formulario container">
                    <form className="container">
                        <br />
                        <h4>Codigo del producto</h4><input type="text" placeholder="Ingrese Codigo de producto" name="codigo" onChange={(id) => setCod(id.target.value)} /><br /><br />
                        <h4>Descripcion del producto</h4><input type="text" placeholder="Ingrese Nombre de producto" name="nombre" onChange={(nombreP) => setDesc(nombreP.target.value)} /><br /><br />
                        <h4>Valor unitario del producto</h4><input type="number" placeholder="Precio" name="precio" onChange={(costo) => setValor(costo.target.value)} /><br /><br />
                        Disponible<input type="checkbox" name="disponible" onChange={(dispo)=>setEstad(dispo.target.checked)} /><br /><br />
                        <h4>Registrar</h4><button type="button" className="btn btn-primary" onClick={() => setCounter(counter + 1)}>guardar</button>
                        <br /><br />
                        <h4># Ventas agregadas</h4><h5>{counter}</h5>
                    </form>
                </div>

                <div className="container">
                    <table>

                        <tr>
                            <br />
                            <th>ID-Producto</th>
                            <br />
                            <th>Descripcion del Producto</th>
                            <br />
                            <th>Valor Unit.</th>
                            <br />
                            <th>Estado</th>
                            <br />
                        </tr>

                            <tr>
                                <br />
                                <th>{cod}</th>
                                <br />
                                <th>{desc}</th>
                                <br />
                                <th>{valor}</th>
                                <br />
                                <th>{estad}</th>
                                <br />
                            </tr>
                    </table>
                </div>

            </div>
        </Fragment>);
}
export default RegisProduct;