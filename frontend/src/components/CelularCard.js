import React, { useContext} from 'react';
import celular from '../img/iphone12.png'
import { Context } from '../store/appContext';

export const CelularCard = (props) => {
    const { store, actions } = useContext(Context);
    // const [precio, descripcion] = [props.precio, props.descripcion];
    const [marca, modelo, color, almacenamiento, ram, descripcion, precio, stock] = [props.marca, props.modelo, props.color, props.almacenamiento,
    props.ram, props.descripcion, props.precio, props.stock];

    return (
        <div>
            <div className="card border-success mb-3" style={{ "maxWidth": "20rem" }}>
                <div className="card-body text-success">
                    <img src={celular} style={{ "maxWidth": "35px", "maxHeight": "28px" }} className="d-inline-block align-text-top" />
                    {/* <h5 className="card-title">{props.descripcion + ' ram: ' + props.ram + ' almacenamiento: ' + props.almacenamiento + ' color: ' + props.color}</h5>
                    <p className="card-text">{props.precio}</p>
                    <p className="card-text">{'==> ' + props.precio}</p> */}
                    <p>{descripcion + ', ram: ' + ram + 'GB, almacenamiento: ' + almacenamiento + 'GB, modelo: '
                        + modelo + ' color: ' + color + ', marca: ' + marca}</p>
                    <h5>Precio ¢{ precio}</h5>
                </div>
                <div className="card-footer bg-transparent border-success">
                    <button type="button" className="btn btn-primary" onClick={() => actions.setCarrito(props.modelo, props)}>Comprar</button>
                </div>
            </div>
        </div>
    )
}
