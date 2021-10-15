import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import "./RegisterStyles.css"

function RegisterPage() {

    return (
        <Fragment>
            <div class="fondo-azul">
            <h1>Register Page</h1>
            <br />
            </div>

            <form class="row g-3 needs-validation fondo-azul" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Address Email - Gmail</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="example@gmail.com" required/>
                            <div class="invalid-feedback">
                                Please choose a address email.
                            </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Repeat address email - Gmail</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                        <div class="invalid-feedback">
                            Address email invalid
                        </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Select</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected >seller</option>
                        <option>Administrador</option>
                    </select>
                   
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-dark" type="submit">Submit form</button>
                </div>
            </form>
        </Fragment>

    )
}

export default RegisterPage;