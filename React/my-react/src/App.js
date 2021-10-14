import React, {Fragment} from 'react';
import LoginPage from './Login/LoginPage';
import RegisterPage from './RegisterPagine/RegisterPage';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import NavbarComponents from './shared/components/navbar/NavbarComponents';
import AreaTrabajo from './AreaTrabajo/AreaTrabajo';
import Productos from './Productos/Productos';
import RegisProduct from './Registro de producto/RegisProduct';
import RegisterVentas from './RegisterVentas/RegisterVentas';
import BuscarActualizarVentas from './BuscarActualizarVentas/BuascarActualizarVentas';
import GestionUsuario from './GestionUsuario/GestionUsuario';
import ListaVentas from './BuscarActualizarVentas/ListaVentas';
import MaestroProducto from './Productos/MaestroProducto';



function App() {
  return (
    <Router>
      <Switch>
         
        <Route path ="/" exact>
          <NavbarComponents />
          
        </Route>

        <Route path="/Register" exact>
          <RegisterPage></RegisterPage>
        </Route>
      
        <Route path ="/Login" exact>
          <LoginPage></LoginPage> 
        </Route>

        <Route path ="/AreaTrabajo" exact>
          <AreaTrabajo></AreaTrabajo>
        </Route> 

        <Route path="/MaestroProducto" exact>
          <MaestroProducto></MaestroProducto>
        </Route>

        <Route path="/Productos" exact>
          <Productos></Productos>
        </Route>
        
        <Route path="/RegisProduct" exact>
          <RegisProduct></RegisProduct>
        </Route>
        
        <Route path="/RegisterVentas" exact>
          <RegisterVentas></RegisterVentas>
        </Route>
        
        <Route path="/BuscarActualizarVentas" exact>
          <BuscarActualizarVentas></BuscarActualizarVentas>
        </Route>

        <Route path="/ListaVentas" exact>
          <ListaVentas/>
        </Route>

        <Route path="/GestionUsuario" exact>
          <GestionUsuario></GestionUsuario>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
