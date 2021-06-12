import React, { useContext } from 'react';
import { Maps } from './Maps';
import { NavBarCliente } from './NavBarCliente';
import { Context } from '../store/appContext';
import { NavBar } from './NavBar';

export const ZonasCobertura = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            {/* <NavBarCliente /> */}
            {store.sesionActual === null ? <NavBar /> : <NavBarCliente />}
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <h3>Zonas de cobertura</h3>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62895.25186517829!2d-83.96020892771591!3d9.854290111269147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0df1021af2921%3A0xb5e5548558a39c52!2sProvincia%20de%20Cartago%2C%20Cartago!5e0!3m2!1ses-419!2scr!4v1623410939836!5m2!1ses-419!2scr"
                            width="600" height="450" style={{ "border": "0" }} allowfullscreen="" loading="lazy"></iframe> */}
                    </div>
                </div>
                <div className="row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251519.94760762554!2d-84.2374284878017!3d9.934025249271576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb550af2a5ad%3A0x7cf648b7d06dd78f!2sSan%20Jos%C3%A9%20Metropolitan%20Area!5e0!3m2!1ses-419!2scr!4v1623411077431!5m2!1ses-419!2scr"
                        width="600" height="600" style={{ "border": "0" }} allowfullscreen="" loading="lazy"></iframe>
                    {/* <Maps /> */}
                </div>
            </div>
        </div>
    )
}
