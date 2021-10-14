import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import{Link} from "react-router-dom";

function RegisProduct(){
    return(

         <Fragment>
            <section class="contenedorSeccion">
            
                <form>

                    <label>
                        <h2>Register Producto:</h2>
                    </label>

                </form>

            </section>

            <section class="contenedorSeccion">
            
                <form>

                    <label for="codigo">
                        <h4>Register Product</h4>
                        <input type="number" id="codigo" placeholder=" Id Producto" required />
                    </label>

                </form>

            </section>

            <section class="contenedorSeccion">
                
                <form>
                    <label>
                        <h4>Descripcion Del Producto</h4>
                        <input type="text" placeholder="Escribe una breve descripcion del producto" require/>
                    </label>
                </form>
            </section>
             
            <section class="contenedorSeccion">
            
                <form>
                    <label>
                        <h4>Valor Del Producto</h4>
                        <input type="Inventario" placeholder="Escribe el valor unitario"/>
                    </label>
                </form>
           
            </section>

           <section class="contenedor">
            <fieldset class="row mb-3 fondo-blanco">
                    <legend class="col-form-label col-sm-2 pt-0">Estado del Producto</legend>
                   
                    <div class="col-sm-10">
                        
                        <div class="form-check login-title">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label class="form-check-label" for="gridRadios1">Disponible
                            </label>
                        </div>
                        
                        <div class="form-check login-title">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label class="form-check-label" for="gridRadios2">No Disponible
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
            </section>

            <input class="submitButton" type="submit" value="Agregar Producto" />
    
            <Link to="/AreaTrabajo" className="nav-link stylLetra">Regresar</Link>
         </Fragment>
         )
}
export default RegisProduct;