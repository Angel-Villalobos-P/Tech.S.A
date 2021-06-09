import React, { useContext } from 'react';
import { NavBarCliente } from './NavBarCliente';
import { Context } from '../store/appContext';

export const Carrito = () => {
    const { store, actions } = useContext(Context);

    const upDateCantidad = (signo) => {
        return 1 ? signo === "+" : -1;
    }

    const calcularTotal = () => {
        store.carrito.forEach(item => {
            return item.cantidad * item.precio;
        });
    }

    return (
        <div>
            <NavBarCliente />
            <div className="row d-flex justify-content-center">
                <div className="col-11">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producti</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!store.carrito && store.carrito.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.nombre != undefined ? item.nombre : item.modelo}</td>
                                        <td>
                                            <button className="btn btn-outline-secondary">-</button>
                                            {item.cantidad}
                                            <button className="btn btn-outline-secondary">+</button>
                                        </td>
                                        <td>{item.precio}</td>
                                        <td>{item.precio * item.cantidad}</td>
                                    </tr>
                                );
                            })}
                            {/* {!!store.carritoObj && store.carritoObj.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.nombre != undefined ? item.nombre : item.modelo}</td>
                                    </tr>
                                );
                            })} */}
                        </tbody>
                    </table>
                    <div className="row d-flex justify-content-end">
                        <div className="col-3">
                            <h4>TOTAL A PAGAR: </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
