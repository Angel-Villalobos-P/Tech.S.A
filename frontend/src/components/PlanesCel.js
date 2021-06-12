import React, { useEffect, useState, useContext } from 'react';
import { CelularCard } from './CelularCard';
import { NavBar } from './NavBar';
import { Context } from '../store/appContext';

export const PlanesCel = (props) => {
    const { store, actions } = useContext(Context);
    // const [celulares] = [props.location.state.celulares];
    const celulares = store.celulares;

    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Celulares</h3>
                    </div>
                </div>
                <div className="row">
                    {!!celulares && celulares.map((celular, i) => {
                        return (
                            <div className="col-3" key={i} >
                                <CelularCard marca={celular.marca} modelo={celular.modelo} color={celular.color} almacenamiento={celular.almacenamiento} ram={celular.ram}
                                    descripcion={celular.descripcion} precio={celular.precio} stock={celular.stock} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
