import React, { useContext, useState } from 'react';
import logo from '../img/logoTech.jpg';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const NavBarCliente = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                                <Link to="/carrito">
                                                    <a className="dropdown-item" >{item.nombre}</a>
                                                </Link>
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
            </nav>
        </div>
    )
}
