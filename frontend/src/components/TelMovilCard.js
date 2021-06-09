import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const TelMovilCard = (props) => {
    const { store, actions } = useContext(Context);

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
                    <button type="button" className="btn btn-primary" onClick={() => actions.setCarrito(props.nombre, props)}>Adquirir</button>
                </div>
            </div>
        </div>
    )
}
