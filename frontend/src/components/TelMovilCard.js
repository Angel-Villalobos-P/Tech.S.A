import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Redirect } from "react-router-dom";

export const TelMovilCard = (props) => {
    const { store, actions } = useContext(Context);

    const [redirect, setRedirect] = useState(false);

    const itemCarrito = (item) => {
        actions.setCarrito2({
            nombre: item.nombre,
            cantidad: 1,
            precio: item.precio,
            id: item.idTelMovil,
            tipo: 'movil'
        });
    }

    return (
        <div>
            <div className="card border-success mb-3" style={{ "maxWidth": "20rem" }}>
                <div className="card-header bg-transparent border-success">{props.nombre}</div>
                <div className="card-body text-success">
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">{props.tipo}</p>
                    <h5 className="card-text">{'Precio: ' + '¢' + props.precio}</h5>
                </div>
                <div className="card-footer bg-transparent border-success">
                    {/* <button type="button" className="btn btn-primary" onClick={() => itemCarrito(props)}>Adquirir</button> */}
                    {store.sesionActual === null ? <button type="button" className="btn btn-primary" onClick={() => setRedirect(true)}>Adquirir</button> :
                        <button type="button" className="btn btn-primary" onClick={() => itemCarrito(props)}>Adquirir</button>}
                </div>
            </div>
            {redirect ? <Redirect to="/ingresar" /> : ""}
        </div>
    )
}
