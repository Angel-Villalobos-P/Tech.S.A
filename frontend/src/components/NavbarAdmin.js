import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logoTech.jpg';
import { Context } from '../store/appContext';

export const NavbarAdmin = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                        <a className="navbar-brand">
                            <img src={logo} alt="" style={{ "maxWidth": "30px", "marginRight": "5px"  }} className="d-inline-block align-text-top" />
                            TECH S.A
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/gestion_planes">
                                    <a className="nav-link active" aria-current="page" >Gestión de planes</a>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/gestion_agentes">
                                    <a className="nav-link active" aria-current="page" >Gestión de agentes de venta</a>
                                </Link>
                            </li> */}
                            {store.sesionActual.idLaboral != undefined && store.sesionActual.puesto === 'Gerente' ?
                                <li className="nav-item">
                                    <Link to="/gestion_agentes">
                                        <a className="nav-link active" aria-current="page" >Gestión de agentes de venta</a>
                                    </Link>
                                </li>
                                : ""}
                            <li className="nav-item">
                                <Link to="/">
                                    <button type="button" className="btn btn-success">Salir</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
