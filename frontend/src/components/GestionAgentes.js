import React, { useContext, useState } from 'react';
import { NavbarAdmin } from './NavbarAdmin';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const GestionAgentes = () => {
    const { store, actions } = useContext(Context);

    const [insertar, setInsertar] = useState(false);
    const [agenteVentas, setAgenteVentas] = useState({
        idUsuario: 0,
        nombre: '',
        apellidos: '',
        idLaboral: 0,
        puesto: '',
        contrasena: ''
    });

    const agregar = () => {
        actions.agregarUsuario(agenteVentas);
        cancelar();//evita que el form quede lleno
    }
    const editar = () => {
        actions.editarUsuario(agenteVentas);
        cancelar();
    }

    //Si el parametro insertar = true, encontes inserta uno nuevo
    //sino, lo edita
    const aceptar = () => {
        if (insertar) {
            agregar();
            setInsertar(false);
        } else {
            editar();
        }
    }

    const handleChange = (e) => {
        setAgenteVentas({
            ...agenteVentas,
            [e.target.name]: e.target.value
        });
    }

    const eliminar = (agente) => {
        Swal.fire({
            title: '¿Está seguro?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: `Sí`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                actions.eliminarUsuario(agente);
            }
        })
    }

    const cancelar = () => {
        setAgenteVentas({
            idUsuario: 0,
            nombre: '',
            apellidos: '',
            idLaboral: 0,
            puesto: '',
            contrasena: ''
        });
    }

    return (
        <div>
            <NavbarAdmin />
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h2>Gestión Agentes de ventas</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Agente de ventas</th>
                                    <th scope="col">ID Laboral</th>
                                    <th scope="col">Puesto</th>
                                    {/* <th scope="col" /> */}
                                    <th scope="col">
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#editarModalAgente" onClick={() => setInsertar(true)}>
                                            {/* Agregar */}
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!store.usuarios && store.usuarios.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.nombre + ' ' + item.apellidos}</td>
                                            {/* <td>{item.apellidos}</td> */}
                                            <td>{item.idLaboral}</td>
                                            <td>{item.puesto}</td>
                                            {/* <td>{item.contrasena}</td> */}
                                            <td>
                                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                                    data-bs-target="#editarModalAgente" onClick={() => setAgenteVentas(item)}>
                                                    {/* Editar */}
                                                    <i className="far fa-edit"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => eliminar(item)}>
                                                    {/* Eliminar */}
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="editarModalAgente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Cédula:</h5>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Nombre:</label>
                                            <input type="text" name="nombre" value={agenteVentas.nombre} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Apellidos:</label>
                                            <input type="text" name="apellidos" value={agenteVentas.apellidos} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">ID Laboral:</label>
                                            <input type="number" name="idLaboral" value={agenteVentas.idLaboral} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Puesto:</label>
                                            <input type="text" name="puesto" value={agenteVentas.puesto} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Contraseña:</label>
                                            <input type="password" name="contrasena" value={agenteVentas.contrasena} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cancelar()}>Cancelar</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => aceptar()}>Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
