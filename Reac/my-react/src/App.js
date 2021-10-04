import React, {Fragment} from 'react';
import LoginPage from './Login/LoginPage';
import RegisterPage from './RegisterPagine/RegisterPage';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import NavbarComponents from './shared/components/navbar/NavbarComponents';
import AreaTrabajo from './Bienvenido/AreaTrabajo';



function App() {
  return (
    <Router>
      <Switch>
         
        <Route path ="/" exact>
          <NavbarComponents />
        </Route>
      
        <Route path ="/Login" exact>
          <LoginPage></LoginPage> 
        </Route>

        <Route path ="/AreaTrabajo" exact>
          <AreaTrabajo></AreaTrabajo>
        </Route> 
        
        <Route path="/Register" exact>
          <RegisterPage></RegisterPage>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
