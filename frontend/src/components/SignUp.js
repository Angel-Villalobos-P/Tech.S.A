import React, { useEffect, useState, useContext } from 'react';
import logo from '../img/logoTech.jpg';
import clienteAxios from '../config/axios';
import { Redirect } from "react-router-dom";
import '../styles/SignUp.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Context } from '../store/appContext';

export const SignUp = () => {
    const { store, actions } = useContext(Context);

    const [redirect, setRedirect] = useState(false);
    const [datos, setDatos] = useState({
        idCliente: 0,
        nombre: '',
        apellidos: '',
        correo: '',
        direccion: '',
        usuario: '',
        contrasena: ''
    });

    const validarForm = () => {
        // if (datos.nombre === '' || datos.apellidos === '' || datos.correo === '' || datos.direccion === '' || datos.usuario === '' || datos.contrasena === '') {
        //     return false;
        // } return true;
        return (datos.nombre === '' || datos.apellidos === '' || datos.correo === '' || datos.direccion === '' || datos.usuario === '' || datos.contrasena === '');
    }

    const agregarCliente = () => {
        // console.log(datos);
        if (validarForm()) {
            // clienteAxios.post('/cliente', datos)
            //     .then(response => {
            //         setRedirect(true);
            //     })
            actions.setCliente(datos);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe ingresar los datos'
            });
        }
    }

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="App">
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
                                <Link to="/ingresar">
                                    <button type="button" className="btn btn-primary">Iniciar sesión</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <form>
                            <h5>Registrarse</h5>
                            <div className="mb-3 email">
                                <label className="form-label">Correo</label>
                                <input type="email" name="correo" className="form-control" onChange={handleChange} value={datos.correo} aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">No compartimos tus datos con nadie.</div>
                            </div>
                            <div className="mb-3 password">
                                <label className="form-label">Contraseña</label>
                                <input type="password" name="contrasena" onChange={handleChange} className="form-control" value={datos.contrasena} />
                            </div>
                            <div className="mb-3 apellido">
                                <label className="form-label">Apellidos</label>
                                <input type="text" name="apellidos" onChange={handleChange} className="form-control" value={datos.apellidos} />
                            </div>
                            <div className="mb-3 nombre">
                                <label className="form-label">Nombre</label>
                                <input type="text" name="nombre" onChange={handleChange} className="form-control" value={datos.nombre} />
                            </div>
                            <div className="mb-3 cedula">
                                <label className="form-label">Cédula</label>
                                <input type="text" name="idCliente" onChange={handleChange} className="form-control" value={datos.idCliente} />
                            </div>
                            <div className="mb-3 direccion">
                                <label className="form-label">Dirección</label>
                                <input type="text" name="direccion" onChange={handleChange} className="form-control" value={datos.direccion} />
                            </div>
                            <div className="mb-3 usuario">
                                <label className="form-label">Usuario</label>
                                <input type="text" name="usuario" onChange={handleChange} className="form-control" value={datos.usuario} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => agregarCliente()}>Registrarse</button>
                        </form>
                        {redirect ? <Redirect to="/clientepage" /> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}
