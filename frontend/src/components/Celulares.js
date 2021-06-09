import Reac, { useState, useEffect } from 'react';
import { CelularCard } from './CelularCard';
import { NavBar } from './NavBar';

export const Celulares = () => {
    const [celulares, setCelulares] = useState([]);

    useEffect(() => {
        let cels = [];
        for (let index = 0; index < 10; index++) {
            cels.push({ descripcion: "iPhone 12 2021", precio: "¢750.000" });
        };
        setCelulares(cels);
    }, [])


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
                    {!!celulares && celulares.map((cel, i) => {
                        return (
                            <div className="col" key={i}>
                                <CelularCard descripcion={cel.descripcion} precio={cel.precio} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
