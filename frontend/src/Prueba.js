import React from 'react';

export const Prueba = (props) => {
    return (
        <div className="prueba">
            <h3>Probando props nombre: {props.nombre}</h3>
            <br></br>
            <p>Testing apellido.... {props.apellido}</p>
            <p>Testing edad.... {props.edad}</p>
        </div>
    );
};