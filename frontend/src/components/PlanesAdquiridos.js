import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { NavBarCliente } from './NavBarCliente';
import Swal from 'sweetalert2'
import '../styles/PlanesAdquiridos.css';

export const PlanesAdquiridos = () => {
    const { store, actions } = useContext(Context);

    const [contratosDeCliente, setContratosDeCliente] = useState([]);
    const [planesCliente, setPlanesCliente] = useState([]);
    const [internet, setInternet] = useState([]);
    const [fija, setFija] = useState([]);
    const [movil, setMovil] = useState([]);
    const [planesAquiridos, setPlanesAquiridos] = useState([]);

    const [pago, setPago] = useState(false);
    const [planes_por_pagar, setPlanes_por_pagar] = useState([]);
    const [planEditar, setPlanEditar] = useState(null);
    const [velocidades, setVelocidades] = useState(['10MB', '20MB', '30MB', '50MB', '100MB', '200MB']);


    //Valida si se encuentra el contrato principal del cliente actual
    const findContrato = (id) => {
        const contrato = store.contratos.find(_contrato => _contrato.idcontrato === id);
        if (contrato != undefined && contrato.clienteIdCliente === store.sesionActual.idCliente) {
            return contrato;
        }
        return undefined;
    }

    const encontrar_planes = () => {
        var planes = [];
        internet.forEach(plan => {
            planes = store.internet.filter(p => p.idInternet === plan.idInternet);
        });
        fija.forEach(f => {
            const encontradas = store.telefonia_fija.filter(p => p.idTelFija === f.idTelFija)
            encontradas.forEach(element => {
                planes.push(element);
            });
        });
        movil.forEach(f => {
            const encontradas = store.telefonia_movil.filter(p => p.idTelMovil === f.idTelMovil)
            encontradas.forEach(element => {
                planes.push(element);
            });
        });

        setPlanesAquiridos(planes);
    }

    useEffect(() => {
        // const planes_actuales = [];
        store.contratosInternet.forEach(contrato => {
            const _internet = [];
            const contrato_encontrado = findContrato(contrato.idContrato);
            if (contrato_encontrado != undefined) {
                // planes_actuales.push(contrato);
                _internet.push(contrato);
            }
            setInternet(_internet);
        });
        store.contratosFija.forEach(contrato => {
            const _fija = [];
            const contrato_encontrado = findContrato(contrato.idContrato);
            if (contrato_encontrado != undefined) {
                _fija.push(contrato);
            }
            setFija(_fija);
        });
        store.contratosMovil.forEach(contrato => {
            const _movil = [];
            const contrato_encontrado = findContrato(contrato.idContrato);
            if (contrato_encontrado != undefined) {
                _movil.push(contrato);
            }
            setMovil(_movil);
        });
        // setContratosDeCliente(planes_actuales);
    }, [])

    useEffect(() => {
        encontrar_planes();
    }, [internet, fija, movil])

    useEffect(() => {
        const plans = [];
        planesAquiridos.forEach(element => {
            plans.push({
                ...element,
                estado: 'Pendiente'
            });
        });
        setPlanes_por_pagar(plans);
    }, [planesAquiridos])

    //Funcion que paga los planes pendientes
    const pagarPlan = (plan, i) => {
        const plans = planes_por_pagar;
        const planPagado = {
            ...plan,
            estado: 'Pagado'
        };
        plans[i] = planPagado;
        Swal.fire({
            title: 'Confirmar',
            text: '¿Realizar pago?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setPlanes_por_pagar(plans);
            }
        })
    }

    const cancelarPlan = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede cancelar. Pendiente de pago.',
            footer: 'Realizar pago'
        })
    }

    return (
        <div className="">
            <NavBarCliente />
            <div className="container-fluid">
                <div className="row header">
                    <div className="col d-flex justify-content-between">
                        <h3>Planes Adquiridos</h3>
                        <button type="button" className="btn btn-success" onClick={() => setPago(!pago)} >Pago en línea</button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!planesAquiridos && planesAquiridos.map((plan_contratado, i) => {
                                    return (
                                        <tr key={i}>
                                            {/* <th scope="row">1</th> */}
                                            <td>{plan_contratado.nombre}</td>
                                            <td>{plan_contratado.descripcion}</td>
                                            <td>{plan_contratado.precio}</td>
                                            <td>
                                                <button type="button" className="btn btn-success" data-bs-toggle="modal"
                                                    data-bs-target="#editarModal" onClick={() => setPlanEditar(plan_contratado)}>Editar</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => cancelarPlan()}>Cancelar</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal fade" id="editarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{planEditar ? planEditar.nombre : ""}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Velocidades disponibles
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {!!velocidades && velocidades.map((v, i) => {
                                            return (<li key={i}>
                                                <a className="dropdown-item" >{v}</a>
                                            </li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {pago ?
                    <>
                        <div className="row">
                            <div className="col d-flex justify-content-start">
                                <h3>Pago en línea - Planes pendientes de pago</h3>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Plan</th>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!!planes_por_pagar && planes_por_pagar.map((plan_contratado, i) => {
                                            return (
                                                <tr key={i}>
                                                    {/* <th scope="row">1</th> */}
                                                    <td>{plan_contratado.nombre}</td>
                                                    <td>{plan_contratado.descripcion}</td>
                                                    <td>{plan_contratado.precio}</td>
                                                    <td>{plan_contratado.estado}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary" onClick={() => pagarPlan(plan_contratado, i)} >Pagar</button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>

                    : ""}
            </div>
        </div>
    )
}
