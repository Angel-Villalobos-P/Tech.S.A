import React from 'react';
import Swal from 'sweetalert2'

export const Contrato = (_contrato) => {
    // const contrato = _contrato.location.state.contrato;
    const contrato = _contrato;

    const confirmarCompra = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Confirmado!',
            text: 'Gracias por tu compra.'
        });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="fs-2 text">Nº {contrato.numero}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-11">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cantidad de producto</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Impuestos</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!contrato.productos && contrato.productos.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{contrato.productos.length}</td>
                                        <td>{contrato.total}</td>
                                        <td>{contrato.total * 0.13}</td>
                                        <td>{contrato.total + (contrato.total * 0.13)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="row d-flex justify-content-end">
                        <div className="col-3">
                            {/* <h4>TOTAL: ¢{totalCarrito}</h4> */}
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-3">
                            <button type="button" className="btn btn-success" onClick={() => confirmarCompra()}>Confirmar compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}