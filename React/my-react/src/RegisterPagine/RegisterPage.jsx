import React, { Fragment } from "react";
import "./RegisterStyles.css"

function RegisterPage() {

    return (
        <Fragment>
            <div className="fondo-azul">
            <h1>Register Page</h1>
            <br />
            </div>

            <form className="row g-3 needs-validation fondo-azul" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Address Email - Gmail</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="example@gmail.com" required/>
                            <div className="invalid-feedback">
                                Please choose a address email.
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label">Repeat address email - Gmail</label>
                    <input type="text" className="form-control" id="validationCustom03" required/>
                        <div className="invalid-feedback">
                            Address email invalid
                        </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">Select</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected >seller</option>
                        <option>Administrador</option>
                    </select>
                   
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-dark" type="submit">Submit form</button>
                </div>
            </form>
        </Fragment>

    )
}

export default RegisterPage;