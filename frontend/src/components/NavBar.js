import React from 'react'
import { Link } from "react-router-dom";
import logo from '../img/logoTech.jpg';
import '../index.css';

export const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">TECH S.A</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                    <Link to="/">
                        <a className="navbar-brand">
                            <img src={logo} alt="" style={{ "maxWidth": "30px" }} className="d-inline-block align-text-top" />
                            TECH S.A
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <Link to="/Planes">
                                    <a className="nav-link active" aria-current="page" >Planes</a>
                                </Link> */}
                                <Link className="nav-link" to={{
                                    pathname: "/Planes", state: {
                                        telefonia_movil: props.telefonia_movil,
                                        internet: props.internet,
                                        telefonia_fija: props.telefonia_fija
                                    }
                                }}>Planes</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link to="/Celulares">
                                    <a className="nav-link">Celulares</a>
                                </Link> */}
                                <Link className="nav-link" to={{ pathname: "/Celulares", state: { celulares: props.celulares } }}>Celulares</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Zonas de coberturas">
                                    <a className="nav-link">Zonas de cobertura</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ingresar">
                                    <button type="button" className="btn btn-primary">Ingresar</button>
                                </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-shopping-cart" style={{ "marginRight": "5px" }}></i>
                                    Mi carrito
                                 </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}