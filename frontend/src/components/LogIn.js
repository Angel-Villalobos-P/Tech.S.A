import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from "react-router-dom";
import '../styles/LogIn.css';
import logo from '../img/logoTech.jpg';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const LogIn = () => {

    const { store, actions } = useContext(Context);
    const [redirect, setRedirect] = useState(false);
    const [alert, setAlert] = useState(false);
    // const [cliente, setCliente] = useState([]);
    // const [usuario, setUsuario] = useState([]);
    const cliente = store.clientes;
    const usuario = store.usuarios;
    const [datos, setDatos] = useState({
        correo: '',
        contrasena: '',
        admin: false,
        idlaboral: 0
    });

    // useEffect(() => {
    //     const getUsuario = () => {
    //         clienteAxios.get('/usuario')
    //             .then(respuesta => {
    //                 console.log('=====>> ', respuesta.data);
    //                 setUsuario(respuesta.data);
    //             }).catch(error => {
    //                 console.log(error)
    //             })
    //     }
    //     getUsuario();

    //     const getCliente = () => {
    //         clienteAxios.get('/cliente')
    //             .then(respuesta => {
    //                 console.log('=====>> ', respuesta.data);
    //                 setCliente(respuesta.data);
    //             }).catch(error => {
    //                 console.log(error)
    //             })
    //     }
    //     getCliente();
    // }, [])

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    }
    const handleChangeCheckBox = (e) => {
        setDatos({
            ...datos,
            admin: e.target.checked,
        });
    }

    //Valida que los datos del form no estén vacíos
    const validarDatos = () => {
        if (datos.admin) {
            if (datos.idlaboral === "" || datos.idlaboral === "0" || datos.contrasena === "") {
                return false;
            }
        } else {
            if (datos.correo === '' || datos.contrasena === "") {
                return false;
            }
        }
        return true;
    }

    const validarUsuario = () => {
        if (!validarDatos()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
            return;
        }
        if (datos.admin) {

            usuario.forEach(user => {
                if (user.idLaboral === parseInt(datos.idlaboral) && user.contrasena === datos.contrasena) {
                    setRedirect(true);
                    return;
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Datos erróneos'
                    })
                }
            });
        } else {
            if (cliente.length != 0) {
                cliente.forEach(cliente => {
                    if (cliente.correo === datos.correo && cliente.contrasena === datos.contrasena) {
                        //redirect
                        setRedirect(true);
                        // return true;
                    }
                    else {
                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Oops...',
                        //     text: 'Datos erróneos===>'
                        // })
                        setAlert(true);
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Cliente no existe'
                })
            }
        }

    }

    return (
        <div className="App">
            {/* <NavBar /> */}
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
                            <Link to="/registrarse">
                                <button type="button" className="btn btn-primary">Registrarse</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <form>
                            <h5>Iniciar sesión</h5>
                            {/* <div className="mb-3 email">
                                <label className="form-label">Correo</label>
                                <input type="email" name="correo" className="form-control" onChange={handleChange} value={datos.correo} aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">No compartimos tus datos con nadie.</div>
                            </div> */}
                            {datos.admin ?
                                <div className="mb-3 idLaboral">
                                    <label className="form-label">ID Laboral</label>
                                    <input type="number" name="idlaboral" className="form-control" onChange={handleChange} value={datos.idlaboral} aria-describedby="emailHelp" />
                                </div>
                                :
                                <div className="mb-3 email">
                                    <label className="form-label">Correo</label>
                                    <input type="email" name="correo" className="form-control" onChange={handleChange} value={datos.correo} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">No compartimos tus datos con nadie.</div>
                                </div>
                            }
                            <div className="mb-3 password">
                                <label className="form-label">Contraseña</label>
                                <input type="password" name="contrasena" onChange={handleChange} className="form-control" value={datos.contrasena} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" name="admin" value={datos.admin} onChange={handleChangeCheckBox} className="form-check-input" />
                                <div id="emailHelp" className="form-text d-flex">Administrador/Agente</div>
                            </div>
                            {alert ? <div className="alert alert-danger" role="alert">
                                ¡Datos incorrectos!
                            </div> : ""}
                            <button type="button" className="btn btn-primary" onClick={() => validarUsuario()}>Iniciar sesión</button>
                        </form>
                        {redirect ? <Redirect to="/clientepage" /> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}
