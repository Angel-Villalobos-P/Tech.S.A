import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logoTech.jpg';
import { Context } from '../store/appContext';
import { CelularCard } from './CelularCard';
import { NavBarCliente } from './NavBarCliente';
import { PlanCard } from './PlanCard';
import { TelFijaCard } from './TelFijaCard';
import { TelMovilCard } from './TelMovilCard';

export const ClientePage = () => {
    const { store, actions } = useContext(Context);
    const telefonia_fija = store.telefonia_fija;
    const internet = store.internet;
    const telefonia_movil = store.telefonia_movil;
    const celulares = store.celulares;

    // const [carrito, setCarrito] = useState([]);
    const carrito = store.carrito;


    return (
        <div>
            <NavBarCliente />
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                        <a className="navbar-brand">
                            <img src={logo} alt="" style={{ "maxWidth": "30px" }} className="d-inline-block align-text-top" />
                            TECH S.A
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/clientepage">
                                    <a className="nav-link active" aria-current="page" >Información y adquisición</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/planesadquiridos">
                                    <a className="nav-link active" aria-current="page" >Planes adquiridos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/zonas">
                                    <a className="nav-link active" aria-current="page" >Zonas de cobertura</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-shopping-cart" style={{ "marginRight": "5px" }}></i>
                                    Mi carrito
                                 </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    {!!store.carrito && store.carrito.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                <a className="dropdown-item" >{item}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/">
                                    <button type="button" className="btn btn-primary">Salir</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Internet</h3>
                    </div>
                </div>
                <div className="row">
                    {!!internet && internet.map((plan, i) => {
                        return (
                            <div className="col-3" key={i}>
                                <PlanCard idInternet={plan.idInternet} nombre={plan.nombre} velocidad={plan.velocidad} precio={plan.precio} />
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Telefonía fija</h3>
                    </div>
                </div>
                <div className="row">
                    {!!telefonia_fija && telefonia_fija.map((plan, i) => {
                        return (
                            <div className="col-3" key={i} >
                                <TelFijaCard idTelFija={plan.idTelFija} nombre={plan.nombre} descripcion={plan.descripcion} minutos={plan.minutos} tarifa={plan.tarifa} costoMinutos={plan.costoMinutos} />
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Telefonía móvil</h3>
                    </div>
                </div>
                <div className="row">
                    {!!telefonia_movil && telefonia_movil.map((plan, i) => {
                        return (
                            <div className="col-3" key={i} >
                                <TelMovilCard idTelMovil={plan.idTelMovil} nombre={plan.nombre} descripcion={plan.descripcion} tipo={plan.tipo} precio={plan.precio} />
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Celulares</h3>
                    </div>
                </div>
                <div className="row">
                    {!!celulares && celulares.map((celular, i) => {
                        return (
                            <div className="col-3" key={i} >
                                <CelularCard idCelular={celular.idCelular} marca={celular.marca} modelo={celular.modelo} color={celular.color} almacenamiento={celular.almacenamiento} ram={celular.ram}
                                    descripcion={celular.descripcion} precio={celular.precio} stock={celular.stock} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
