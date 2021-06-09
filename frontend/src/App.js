import react, { useEffect, useState, useContext } from 'react';
import './App.css';
import { Prueba } from './Prueba';
import { NavBar } from './components/NavBar';
import signal_tower from './img/tower2.svg';
import { PlanCard } from './components/PlanCard';
import { Planes } from './components/Planes';
import { Celulares } from './components/Celulares';
import clienteAxios from './config/axios';
import { TelFijaCard } from './components/TelFijaCard';
import { TelMovilCard } from './components/TelMovilCard';
import { CelularCard } from './components/CelularCard';
import { Context } from '../src/store/appContext';

function App() {

  // const [telefonia_fija, setTelefonia_fija] = useState([]);
  // const [internet, setInternet] = useState([]);
  // const [telefonia_movil, setTelefonia_movil] = useState([]);
  // const [celulares, setCelulares] = useState([]);

  const { store, actions } = useContext(Context);

  const telefonia_fija = store.telefonia_fija;
  const internet = store.internet;
  const telefonia_movil = store.telefonia_movil;
  const celulares = store.celulares;

  // useEffect(() => {
  //   const getInternet = () => {
  //     clienteAxios.get('/internet')
  //       .then(respuesta => {
  //         console.log('=====>> ', respuesta.data);
  //         setInternet(respuesta.data);
  //       }).catch(error => {
  //         console.log(error)
  //       })
  //   }
  //   getInternet();

  //   const getTelefonia_fija = () => {
  //     clienteAxios.get('/telfija')
  //       .then(respuesta => {
  //         setTelefonia_fija(respuesta.data);
  //       }).catch(error => {
  //         console.log(error)
  //       })
  //   }
  //   getTelefonia_fija();

  //   const getTelefonia_movil = () => {
  //     clienteAxios.get('/telmovil')
  //       .then(respuesta => {
  //         setTelefonia_movil(respuesta.data);
  //       }).catch(error => {
  //         console.log(error)
  //       })
  //   }
  //   getTelefonia_movil();

  //   const getCelulares = () => {
  //     clienteAxios.get('/celular')
  //       .then(respuesta => {
  //         setCelulares(respuesta.data);
  //       }).catch(error => {
  //         console.log(error)
  //       })
  //   }
  //   getCelulares();
  // }, [])

  return (
    <div className="App">
      <NavBar celulares={celulares} telefonia_fija={telefonia_fija} internet={internet} telefonia_movil={telefonia_movil} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img src={signal_tower} width="450" height="380" className="d-inline-block align-text-top" />
          </div>
          <div className="col-8">
            <h1 className="text-lg-start">Acerca de</h1>
            <h3 className="text-lg-start">
              La compañía de telecomunicaciones Tech S.A. es un emprendimiento nacional,
              el cual inició en 2015. Esta empresa ofrece servicios de internet y telefonía tanto fija como móvil.
            </h3>
          </div>
          {/* <Planes internet={ internet}/> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col d-flex justify-content-start">
                <h3>Internet</h3>
              </div>
            </div>
            <div className="row">
              {!!internet && internet.map((plan, i) => {
                return (
                  <div className="col" key={i}>
                    <PlanCard nombre={plan.nombre} velocidad={plan.velocidad} precio={plan.precio} />
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
                  <div className="col" key={i} >
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
                <div className="col" key={i} >
                  <TelMovilCard nombre={plan.nombre} descripcion={plan.descripcion} tipo={plan.tipo} precio={plan.precio} />
                </div>
              );
            })}
          </div>
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
      </div>
    </div>
  );
}

export default App;
