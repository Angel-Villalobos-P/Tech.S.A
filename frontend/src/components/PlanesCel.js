import React, { useEffect, useState } from 'react';
import { CelularCard } from './CelularCard';
import { NavBar } from './NavBar';

export const PlanesCel = (props) => {
    const [celulares] = [props.location.state.celulares];
    
    return (
        <div>
            <NavBar/>
            <div className="row">
                <div className="col d-flex justify-content-start">
                    <h3>Celulares</h3>
                </div>
            </div>
            <div className="row">
                {!!celulares && celulares.map((celular, i) => {
                    return (
                        <div className="col" key={i} >
                            <CelularCard marca={celular.marca} modelo={celular.modelo} color={celular.color} almacenamiento={celular.almacenamiento} ram={celular.ram}
                                descripcion={celular.descripcion} precio={celular.precio} stock={celular.stock} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
