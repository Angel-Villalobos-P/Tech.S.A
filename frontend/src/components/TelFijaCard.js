import Reat, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Redirect } from "react-router-dom";

export const TelFijaCard = (props) => {
    const { store, actions } = useContext(Context);
    const [redirect, setRedirect] = useState(false);

    const itemCarrito = (item) => {
        actions.setCarrito2({
            nombre: item.nombre,
            cantidad: 1,
            precio: item.tarifa,
            id: item.idTelFija,
            tipo: 'fija'
        });
    }

    return (
        <div>
            <div className="card border-success mb-3" style={{ "maxWidth": "20rem" }}>
                <div className="card-header bg-transparent border-success">{props.nombre}</div>
                <div className="card-body text-success">
                    {/* <h5 className="card-title">{'MB'}</h5> */}
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">{'Tarifa: ' + '¢' + props.tarifa}</p>
                    <h5 className="card-text">{props.minutos + ' minutos'}</h5>
                    <p className="card-text">{'Costo por minuto: ' + '¢' + props.costoMinutos}</p>
                </div>
                <div className="card-footer bg-transparent border-success">
                    {/* <button type="button" className="btn btn-primary" onClick={() => itemCarrito(props)}>Adqurir</button> */}
                    {store.sesionActual === null ? <button type="button" className="btn btn-primary" onClick={() => setRedirect(true)}>Adqurir</button> :
                        <button type="button" className="btn btn-primary" onClick={() => itemCarrito(props)}>Adqurir</button>}
                </div>
            </div>
            {redirect ? <Redirect to="/ingresar" /> : ""}
        </div>
    )
}
