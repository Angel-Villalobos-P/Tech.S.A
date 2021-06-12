import React from 'react'
import { Link } from "react-router-dom";
import logo from '../img/logoTech.jpg';
import '../index.css';

export const NavBar = (props) => {
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
                                <Link to="/zonascoberturas">
                                    <a className="nav-link">Zonas de cobertura</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ingresar">
                                    <button type="button" className="btn btn-success">Ingresar</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}