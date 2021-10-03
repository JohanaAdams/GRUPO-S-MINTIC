import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import './LoginStyles.css';
import {Link} from "react-router-dom";
function LoginPage() {

    return (
        <Fragment>
           <div class="fondo">
                <h1>Login Page</h1>
                <br class="fondo"/>
           </div>
           <form class="fondo">
               
                <div class="row mb-3 fondo-blanco">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control login-title" id="inputEmail3"/>
                    </div>
                </div>
 
                <fieldset class="row mb-3 fondo-blanco">
                    <legend class="col-form-label col-sm-2 pt-0">Tipo de usuario</legend>
                   
                    <div class="col-sm-10">
                        
                        <div class="form-check login-title">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label class="form-check-label" for="gridRadios1">Administrador
                            </label>
                        </div>
                        
                        <div class="form-check login-title">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label class="form-check-label" for="gridRadios2">Vendedor
                            </label>
                        </div>
                    
                    </div>
                </fieldset>
                    
                   
                
                <Link to="/areaTrabajo" className="nav-link stylLetra"type="submit" class="btn btn-dark">Area de Trabajo</Link>  
            </form>
        </Fragment>

    )
}

export default LoginPage;