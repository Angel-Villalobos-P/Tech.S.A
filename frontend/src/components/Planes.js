import React, { useEffect, useState, useContext } from 'react';
import { NavBar } from './NavBar';
import { PlanCard } from './PlanCard';
import { TelFijaCard } from './TelFijaCard';
import { TelMovilCard } from './TelMovilCard';
import { Context } from '../store/appContext';

export const Planes = (props) => {
    const { store, actions } = useContext(Context);
    // const [planes] = [props.location.state.planes];
    // const [telefonia_fija] = [props.location.state.telefonia_fija];
    // const [internet] = [props.location.state.internet];
    // const [telefonia_movil] = [props.location.state.telefonia_movil];
    const telefonia_fija = store.telefonia_fija;
    const internet = store.internet;
    const telefonia_movil = store.telefonia_movil;

    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Internet</h3>
                    </div>
                </div>
                <div className="row">
                    {!!internet && internet.map((plan, i) => {
                        return (
                            <div className="col-3" key={i}>
                                <PlanCard idInternet={plan.idInternet} nombre={plan.nombre} velocidad={plan.velocidad} precio={plan.precio} />
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Telefonía fija</h3>
                    </div>
                </div>
                <div className="row">
                    {!!telefonia_fija && telefonia_fija.map((plan, i) => {
                        return (
                            <div className="col-3" key={i} >
                                <TelFijaCard nombre={plan.nombre} descripcion={plan.descripcion} minutos={plan.minutos} tarifa={plan.tarifa} costoMinutos={plan.costoMinutos} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-start">
                    <h3>Telefonía móvil</h3>
                </div>
            </div>
            <div className="row">
                {!!telefonia_movil && telefonia_movil.map((plan, i) => {
                    return (
                        <div className="col-3" key={i} >
                            <TelMovilCard nombre={plan.nombre} descripcion={plan.descripcion} tipo={plan.tipo} precio={plan.precio} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
