import React, { useContext, useState, useEffect } from 'react';
import { NavbarAdmin } from './NavbarAdmin';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const GestionPlanes = () => {
    const { store, actions } = useContext(Context);
    const [insertar, setInsertar] = useState(false);
    const [insertarFija, setInsertarFija] = useState(false);
    const [insertarMovil, setInsertarMovil] = useState(false);
    const [planInternet, setPlanInternet] = useState({
        idInternet: 0,
        nombre: '',
        descripcion: '',
        velocidad: 0,
        precio: 0
    });
    const [planFija, setPlanFija] = useState({
        idTelFija: 0,
        nombre: '',
        descripcion: '',
        tarifa: 0,
        minutos: 0,
        costoMinutos: 0
    });
    const [planMovil, setPlanMovil] = useState({
        idTelMovil: 0,
        nombre: '',
        descripcion: '',
        tipo: '',
        precio: 0
    });
    // const [planMovilNuevo, setPlanMovilNuevo] = useState({
    //     idTelMovil: 0,
    //     nombre: '',
    //     descripcion: '',
    //     tipo: '',
    //     precio: 0
    // });

    const handleChange = (e) => {
        setPlanInternet({
            ...planInternet,
            [e.target.name]: e.target.value
        });
    }
    const handleChangeFija = (e) => {
        setPlanFija({
            ...planFija,
            [e.target.name]: e.target.value
        });
    }
    const handleChangeMovil = (e) => {
        setPlanMovil({
            ...planMovil,
            [e.target.name]: e.target.value
        });
    }
    // const handleChangeMovilNuevo = (e) => {
    //     setPlanMovil({
    //         ...planMovilNuevo,
    //         [e.target.name]: e.target.value
    //     });
    // }

    const agregar = () => {
        actions.agregarPlanInternet(planInternet);
    }
    const editar = () => {
        actions.editarPlanInternet(planInternet);
    }

    //Fija
    const agregarFija = () => {
        actions.agregarPlanFija(planFija);
    }
    const editarFija = () => {
        actions.editarPlanFija(planFija);
    }

    //Movil
    const agregarMovil = () => {
        actions.agregarPlanMovil(planMovil);
        // actions.agregarPlanMovil(planMovilNuevo);
    }
    const editarMovil = () => {
        actions.editarPlanMovil(planMovil);
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
    const aceptarFija = () => {
        if (insertarFija) {
            agregarFija();
            setInsertarFija(false);
        } else {
            editarFija();
        }
    }
    const aceptarMovil = () => {
        if (insertarMovil) {
            agregarMovil();
            setInsertarMovil(false);
        } else {
            editarMovil();
        }
    }

    const eliminar = (plan) => {
        Swal.fire({
            title: '¿Está seguro?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: `Sí`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                actions.eliminarInternet(plan);
            }
        })
    }
    const eliminarFija = (plan) => {
        Swal.fire({
            title: '¿Está seguro?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: `Sí`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                actions.eliminarFija(plan);
            }
        })
    }
    const eliminarMovil = (plan) => {
        Swal.fire({
            title: '¿Está seguro?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: `Sí`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                actions.eliminarMovil(plan);
            }
        })
    }

    const cancelarInternet = () => {
        setPlanInternet({
            dInternet: 0,
            nombre: '',
            descripcion: '',
            velocidad: 0,
            precio: 0
        });
    }
    const cancelarFija = () => {
        setPlanFija({
            idTelFija: 0,
            nombre: '',
            descripcion: '',
            tarifa: 0,
            minutos: 0,
            costoMinutos: 0
        });
    }
    const cancelarMovil = () => {
        setPlanMovil({
            idTelMovil: 0,
            nombre: '',
            descripcion: '',
            tipo: '',
            precio: 0
        });
        const cat = localStorage.getItem('myCat');
        console.log(cat);
    }




    return (
        <div>
            <NavbarAdmin />
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h2>Gestión de planes</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Internet</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Velocidad</th>
                                    <th scope="col">Precio</th>
                                    {/* <th scope="col" /> */}
                                    <th scope="col">
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#editarModalInternet" onClick={() => setInsertar(true)}>
                                            {/* Agregar */}
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!store.internet && store.internet.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.nombre}</td>
                                            <td>{item.descripcion}</td>
                                            <td>{item.velocidad}MB</td>
                                            <td>¢{item.precio}</td>
                                            {/* <td>
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#editarModalInternet" onClick={() => setInsertar(true)}>Agregar</button>
                                            </td> */}
                                            <td>
                                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                                    data-bs-target="#editarModalInternet" onClick={() => setPlanInternet(item)}>
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

                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Telefonía fija</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Tarifa</th>
                                    <th scope="col">Minutos</th>
                                    <th scope="col">Costo minutos</th>
                                    {/* <th scope="col"></th> */}
                                    <th scope="col">
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#editarModalFija" onClick={() => setInsertarFija(true)}>
                                            <i className="fas fa-plus"></i>
                                        </button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!store.telefonia_fija && store.telefonia_fija.map((telFija, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{telFija.nombre}</td>
                                            <td>{telFija.descripcion}</td>
                                            <td>¢{telFija.tarifa}</td>
                                            <td>{telFija.minutos}</td>
                                            <td>¢{telFija.costoMinutos}</td>
                                            {/* <td>
                                                <button type="button" className="btn btn-primary">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </td> */}
                                            <td>
                                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                                    data-bs-target="#editarModalFija" onClick={() => setPlanFija(telFija)}>
                                                    <i className="far fa-edit"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => eliminarFija(telFija)}>
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Telefonía móvil</h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Precio</th>
                                    {/* <th scope="col"></th> */}
                                    <th scope="col">
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#editarModalMovil" onClick={() => setInsertarMovil(true)}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!store.telefonia_movil && store.telefonia_movil.map((telMovil, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{telMovil.nombre}</td>
                                            <td>{telMovil.descripcion}</td>
                                            <td>{telMovil.tipo}</td>
                                            <td>¢{telMovil.precio}</td>
                                            {/* <td>
                                                <button type="button" className="btn btn-primary">Agregar</button>
                                            </td> */}
                                            <td>
                                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                                    data-bs-target="#editarModalMovil">
                                                    <i className="far fa-edit" onClick={() => setPlanMovil(telMovil)}></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger">
                                                    <i className="far fa-trash-alt" onClick={() => eliminarMovil(telMovil)}></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal Internet */}
            <div className="modal fade" id="editarModalInternet" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Plan de Internet</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nombre plan:</label>
                                    <input type="text" name="nombre" value={planInternet.nombre} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción:</label>
                                    <input type="text" name="descripcion" value={planInternet.descripcion} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Velocidad:</label>
                                    <input type="number" name="velocidad" value={planInternet.velocidad} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Precio:</label>
                                    <input type="number" name="precio" value={planInternet.precio} onChange={handleChange} className="form-control" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cancelarInternet()}>Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => aceptar()}>Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal fija */}
            <div className="modal fade" id="editarModalFija" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Plan línea fija</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nombre plan:</label>
                                    <input type="text" name="nombre" value={planFija.nombre} onChange={handleChangeFija} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción:</label>
                                    <input type="text" name="descripcion" value={planFija.descripcion} onChange={handleChangeFija} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tarifa:</label>
                                    <input type="number" name="tarifa" value={planFija.tarifa} onChange={handleChangeFija} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Minutos:</label>
                                    <input type="number" name="minutos" value={planFija.minutos} onChange={handleChangeFija} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Costo minutos:</label>
                                    <input type="number" name="costoMinutos" value={planFija.costoMinutos} onChange={handleChangeFija} className="form-control" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cancelarFija()}>Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => aceptarFija()}>Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal movil */}
            <div className="modal fade" id="editarModalMovil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Plan línea móvil</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nombre plan:</label>
                                    <input type="text" name="nombre" value={planMovil.nombre} onChange={handleChangeMovil} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción:</label>
                                    <input type="text" name="descripcion" value={planMovil.descripcion} onChange={handleChangeMovil} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo:</label>
                                    <input type="text" name="tipo" value={planMovil.tipo} onChange={handleChangeMovil} className="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Precio:</label>
                                    <input type="number" name="precio" value={planMovil.precio} onChange={handleChangeMovil} className="form-control" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => cancelarMovil()}>Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => aceptarMovil()}>Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
