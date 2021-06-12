import React, { useContext, useState, useEffect } from 'react';
import { NavBarCliente } from './NavBarCliente';
import { Context } from '../store/appContext';
import '../styles/Carrito.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Redirect } from "react-router-dom";
import emailjs from "emailjs-com";

const popUp = withReactContent(Swal);

export const Carrito = () => {
    const { store, actions } = useContext(Context);

    const [carrito, setCarrito] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0.00);
    const [flag, setFlag] = useState(false);

    const [redirect, setRedirect] = useState(false);
    // const [contrato, setContrato] = useState(null);
    const [contrato, setContrato] = useState({
        titulo: "TECH S.A - Resumen de Contrato",
        numero: "2021" + store.sesionActual.idCliente,
        cliente: store.sesionActual.nombre + ' ' + store.sesionActual.apellidos,
        clienteID: store.sesionActual.idCliente,
        productos: store.carrito,
        total: totalCarrito
    });

    const validarStock = (itemCarrito) => {
        const celulares = store.celulares;
        celulares.forEach(celular => {
            if (itemCarrito.modelo === celular.modelo) {
                return celular.stock <= 0;
            }
        });
    }

    const productoStockActualizado = (itemCarrito) => {
        const celulares = store.celulares;
        celulares.forEach(celular => {
            if (itemCarrito.modelo === celular.modelo) {
                return celular;
            }
        });
    }

    const actualizarCantidad = (item, signo, indx) => {
        const productos = store.carrito;// productos del carrito
        let producto = item;// del carrito
        // let product_to_update = productoStockActualizado(item);// del stock
        let product_to_update = store.celulares.find(cel => item.nombre === cel.marca);// del stock
        // console.log(item);
        if (!validarStock(item)) {
            if (signo === '-') {
                producto = {
                    ...producto,
                    cantidad: item.cantidad - 1,
                };
            } else {
                producto = {
                    ...producto,
                    cantidad: item.cantidad + 1,
                };
            };
            productos[indx] = producto;// en el carrito
            actions.updateCarrito(productos);
            setCarrito(productos);
            setFlag(!flag);// para disparar el render del total
            if (product_to_update != undefined) {
                product_to_update = {
                    ...product_to_update,
                    stock: product_to_update.stock - producto.cantidad
                };
                // console.log('==>>', product_to_update);
                actions.updateCelulares(product_to_update, indx);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Stock insuficiente'
            });
        }
    }

    const quitarProducto = (index) => {
        // actions.deleteItem(index);
        const productos = store.carrito;
        productos.splice(index, 1);
        actions.updateCarrito(productos);
        setFlag(!flag);
    }

    //Actualiza la cantidad total del carrito
    useEffect(() => {
        let total = 0;
        store.carrito.forEach(item => {
            total += (item.cantidad * item.precio)
        });
        // console.log(total);
        setTotalCarrito(total);
        setContrato({
            ...contrato,
            productos: store.carrito,
            total: total
        });
    }, [flag])

    useEffect(() => {
        let total = 0;
        store.carrito.forEach(item => {
            total += (item.cantidad * item.precio)
        });
        // console.log(total);
        setTotalCarrito(total);
        setContrato({
            ...contrato,
            total: total
        })
    }, []);

    // const validarStock = () => {
    //     store.carrito.forEach(producto => {
    //         contrato.forEach(element => {

    //         });
    //     });
    // }

    const procesarCompra = () => {
        const contrato = {
            titulo: "TECH S.A - Resumen de Contrato",
            numero: "2021" + store.sesionActual.idCliente,
            cliente: store.sesionActual.nombre + ' ' + store.sesionActual.apellidos,
            clienteID: store.sesionActual.idCliente,
            productos: store.carrito,
            total: totalCarrito
        };
        setContrato(contrato);
    }

    const enviarMail = () => {
        let items = '--';
        contrato.productos.forEach(item => {
            items += item.nombre + ' cantidad: ' + item.cantidad + ' precio: ' + item.precio + ' total: ' + (item.cantidad * item.precio) +' -- '
        });
        var params = {
            from_name: 'TECH S.A',
            to_name: store.sesionActual.nombre,
            message: contrato.titulo + ' Nº ' + contrato.numero + '\n Cliente: ' + contrato.cliente + ' Cédula: ' + contrato.clienteID +
                '\n Items: ' + items + '\n Total contrato: ' + contrato.total
        };

        emailjs.send("service_huvhase", "template_viarqk5", params, 'user_Eb1MeTLzatK2LVg5KSeNi')
            .then(response => {
                console.log(response);
            });
    }

    const confirmarCompra = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Confirmado!',
            text: 'Gracias por tu compra.'
        });

        //crear contrato
        const _contrato = {
            pago: contrato.total + (contrato.total * 0.13),
            clienteIdCliente: contrato.clienteID
        };
        console.log(_contrato);
        actions.crearContrato(_contrato);
        // actions.updateCarrito([]);
        setTotalCarrito(0);
        enviarMail();
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
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {!!store.carrito && store.carrito.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{item.nombre != undefined ? item.nombre : item.modelo}</td>
                                        <td>
                                            <button className="btn btn-outline-secondary btn-disminuir" onClick={() => actualizarCantidad(item, '-', i)}>-</button>
                                            {item.cantidad}
                                            <button className="btn btn-outline-secondary btn-aumentar" onClick={() => actualizarCantidad(item, '+', i)}>+</button>
                                        </td>
                                        <td>¢{item.precio}</td>
                                        <td>¢{item.precio * item.cantidad}</td>
                                        <td>
                                            {/* <i className="fas fa-trash"></i> */}
                                            <button type="button" className="btn btn-danger" onClick={() => quitarProducto(i)}>X</button>
                                        </td>
                                    </tr>

                                );
                            })}
                        </tbody>
                    </table>
                    <div className="row d-flex justify-content-end">
                        <div className="col-3">
                            <h4>TOTAL: ¢{totalCarrito}</h4>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-3">
                            {/* <button type="button" className="btn btn-success" onClick={() => procesarCompra()}>Procesar compra</button> */}
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#contratoModal">Procesar compra</button>
                        </div>
                    </div>
                </div>
                {redirect ? <Redirect to={{ pathname: "/contrato", state: { contrato: contrato } }} /> : ""}
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="contratoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{contrato.titulo}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <Contrato contrato={contrato} /> */}
                            <p>Contrato Nº {contrato.numero}</p>
                            <p>Cliente: {contrato.cliente}, Cédula: {contrato.clienteID}</p>
                            <hr></hr>
                            <table className="table">
                                {/* <thead>
                                    <tr>
                                        <th scope="col">Productos</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col">Impuestos</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{contrato.productos.length}</td>
                                        <td>¢{contrato.total}</td>
                                        <td>¢{contrato.total * 0.13}</td>
                                        <td>¢{contrato.total + (contrato.total * 0.13)}</td>
                                    </tr>
                                </tbody> */}
                                <thead>
                                    <tr>
                                        <th scope="col">Productos</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                        {/* <th scope="col">Subtotal</th> */}
                                        {/* <th scope="col">IVA</th> */}
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!!contrato.productos && contrato.productos.map((prod, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    {prod.nombre}
                                                </td>
                                                <td>
                                                    {prod.cantidad}
                                                </td>
                                                <td>
                                                    {prod.precio}
                                                </td>
                                                <td>
                                                    {prod.precio * prod.cantidad}
                                                </td>
                                                {/* <td>
                                                    {prod.precio * prod.cantidad * 0.13}
                                                </td> */}
                                                {/* <td>
                                                    {prod.precio * prod.cantidad + (prod.precio * prod.cantidad * 0.13)}
                                                </td> */}
                                                {/* <td>
                                                    {prod.precio * prod.cantidad}
                                                </td> */}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <span>TOTAL: {totalCarrito}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => confirmarCompra()}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
