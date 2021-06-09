import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const PlanCard = (props) => {

    const { store, actions } = useContext(Context);

    const itemCarrito = (item) => {
        actions.setCarrito2({
            nombre: item.nombre,
            cantidad: 1,
            precio: item.precio
        });
    }

    return (
        <div>
            <div className="card border-success mb-3" style={{ "maxWidth": "20rem" }}>
                <div className="card-header bg-transparent border-success">{props.nombre}</div>
                <div className="card-body text-success">
                    <h5 className="card-title">{props.velocidad + 'MB'}</h5>
                    <p className="card-text">{props.precio}</p>
                </div>
                <div className="card-footer bg-transparent border-success">
                    {/* <button type="button" className="btn btn-primary" onClick={() => actions.setCarrito(props.nombre, props)}>Adqurir</button> */}
                    <button type="button" className="btn btn-primary" onClick={() => itemCarrito(props)}>Adqurir</button>
                </div>
            </div>
        </div>
    )
}
