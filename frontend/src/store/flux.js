import clienteAxios from '../config/axios';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            clientes: [],
            usuarios: [],
            internet: [],
            telefonia_fija: [],
            telefonia_movil: [],
            celulares: [],
            carrito: [],
            contratos: [],
            sesionActual: null,
            contratosInternet: [],
            contratosCelular: [],
            contratosFija: [],
            contratosMovil: []
        },
        actions: {
            setSesionActual: (param) => {
                setStore({ sesionActual: param });
            },

            getUsuarios: () => {
                clienteAxios.get('/usuario')
                    .then(respuesta => {
                        setStore({ usuarios: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    })
            },
            getClientes: () => {
                clienteAxios.get('/cliente')
                    .then(respuesta => {
                        setStore({ clientes: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getInternet: () => {
                clienteAxios.get('/internet')
                    .then(respuesta => {
                        setStore({ internet: respuesta.data })
                    }).catch(error => {
                        console.log(error)
                    })
            },
            getTelFija: () => {
                clienteAxios.get('/telfija')
                    .then(respuesta => {
                        setStore({ telefonia_fija: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    })
            },
            getTelMovil: () => {
                clienteAxios.get('/telmovil')
                    .then(respuesta => {
                        setStore({ telefonia_movil: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            getCelulares: () => {
                clienteAxios.get('/celular')
                    .then(respuesta => {
                        setStore({ celulares: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    })
            },

            //Actualiza la cantidad del cel
            updateCelulares: (_celular, i) => {
                //Terminar este metodo
                const _store = getStore();
                //hacer el update en la db con el id
                // const c = _store.celulares.find(cel => cel === celulares);
                const celulares = _store.celulares;
                celulares[_store.celulares.findIndex(c => c.modelo === _celular.modelo)] = _celular;
                setStore({ celulares: celulares });
                //falta hacer el update en la bd
            },

            setCliente: (cliente) => {
                const _store = getStore();
                clienteAxios.post('/cliente', cliente)
                    .then(response => {
                        // setStore();
                        _store.clientes.push(cliente);
                    })
                setStore({ clientes: _store.clientes })
            },

            setCarrito: (item, obj) => {
                const _store = getStore();
                _store.carrito.push(item);
                _store.carritoObj.push(obj);
                setStore({ carrito: _store.carrito });
                setStore({ carritoObj: _store.carritoObj });
            },

            setCarrito2: (item) => {
                const _store = getStore();
                _store.carrito.push(item);
                setStore({ carrito: _store.carrito });
            },

            updateCarrito: (_carrito) => {
                setStore({ carrito: _carrito })
            },

            deleteItem: index => {
                // const carrito = getStore().carrito;
                // carrito.splice(index, 1);
                const _store = getStore();
                _store.carrito.splice(index, 1);
                setStore({ carrito: [..._store.carrito] });
            },

            addContrato: (contrato) => {
                const _store = getStore();
                _store.contratos.push(contrato);
                setStore({ contratos: _store.contratos });
            },
            crearContrato: (contrato) => {
                const _store = getStore();
                _store.contratos.push(contrato);

                clienteAxios.post('/contrato', contrato)
                    .then(respuesta => {
                        //crea el contrato con el producto específico
                        console.log(respuesta);
                        console.log(respuesta.data);
                        console.log(respuesta.data.idcontrato);
                        console.log(_store.carrito);
                        _store.carrito.forEach(prod => {
                            console.log('produc ', prod);
                            if (prod.tipo === 'celular') {
                                const contratoCelular = {
                                    idContrato: respuesta.data.idcontrato,
                                    idCelular: prod.id
                                };
                                console.log(contratoCelular);
                                clienteAxios.post('/ccelular', contratoCelular)
                                    .then(res => {
                                        console.log(res);
                                        getActions().updateCarrito([]);
                                    });
                            } else if (prod.tipo === 'internet') {
                                const contratoInternet = {
                                    idContrato: respuesta.data.idcontrato,
                                    idInternet: prod.id
                                };
                                clienteAxios.post('/cinternet', contratoInternet)
                                    .then(res => {
                                        console.log(res);
                                        getActions().updateCarrito([]);
                                    })
                            } else if (prod.tipo === 'fija') {
                                const contratoFija = {
                                    idContrato: respuesta.data.idcontrato,
                                    idTelFija: prod.id
                                };
                                clienteAxios.post('/ctelfija', contratoFija)
                                    .then(res => {
                                        console.log(res);
                                        getActions().updateCarrito([]);
                                    })
                            } else if (prod.tipo === 'movil') {
                                const contratoMovil = {
                                    idContrato: respuesta.data.idcontrato,
                                    idTelMovil: prod.id
                                };
                                clienteAxios.post('/ctelmovil', contratoMovil)
                                    .then(res => {
                                        console.log(res);
                                        getActions().updateCarrito([]);
                                    })
                            }
                        });
                        setStore({ contratos: _store.contratos });
                    }).catch(error => {
                        console.log(error)
                    })
            },
            getContratosPlanes: () => {
                clienteAxios.get('/ccelular')
                    .then(respuesta => {
                        setStore({ contratosCelular: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    });
                clienteAxios.get('/cinternet')
                    .then(respuesta => {
                        setStore({ contratosInternet: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    });
                clienteAxios.get('/ctelfija')
                    .then(respuesta => {
                        setStore({ contratosFija: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    });
                clienteAxios.get('/ctelmovil')
                    .then(respuesta => {
                        setStore({ contratosMovil: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    });

            },
            getContratos: () => {
                clienteAxios.get('/contrato')
                    .then(respuesta => {
                        setStore({ contratos: respuesta.data });
                    }).catch(error => {
                        console.log(error)
                    });
            },
            agregarPlanInternet: (planInternet) => {
                clienteAxios.post('/internet', planInternet)
                    .then(respuesta => {
                        getActions().getInternet();
                    })
            },
            editarPlanInternet: (planInternet) => {
                clienteAxios.put(`/internet/${planInternet.idInternet}`, planInternet)
                    .then(res => {
                        getActions().getInternet();
                    })
            },
            eliminarInternet: (planInternet) => {
                clienteAxios.delete(`/internet/${planInternet.idInternet}`)
                    .then(res => {
                        getActions().getInternet();
                    })
            },
            agregarPlanFija: (planFija) => {
                // const _store = getStore();
                clienteAxios.post('/telfija', planFija)
                    .then(respuesta => {
                        getActions().getTelFija();
                    })
            },
            editarPlanFija: (planFija) => {
                clienteAxios.put(`/telfija/${planFija.idTelFija}`, planFija)
                    .then(res => {
                        getActions().getTelFija();
                    })
            },
            eliminarFija: (planFija) => {
                clienteAxios.delete(`/telfija/${planFija.idTelFija}`)
                    .then(res => {
                        getActions().getTelFija();
                    })
            },
            agregarPlanMovil: (planMovil) => {
                clienteAxios.post('/telmovil', planMovil)
                    .then(respuesta => {
                        getActions().getTelMovil();
                    })
            },
            editarPlanMovil: (planMovil) => {
                clienteAxios.put(`/telmovil/${planMovil.idTelMovil}`, planMovil)
                    .then(res => {
                        getActions().getTelMovil();
                    })
            },
            eliminarMovil: (planMovil) => {
                clienteAxios.delete(`/telmovil/${planMovil.idTelMovil}`)
                    .then(res => {
                        getActions().getTelMovil();
                    })
            },
            eliminarUsuario: (user) => {
                clienteAxios.delete(`/usuario/${user.idLaboral}`)
                    .then(res => {
                        getActions().getUsuarios();
                    })
            },
            editarUsuario: (user) => {
                clienteAxios.put(`/usuario/${user.idLaboral}`, user)
                    .then(res => {
                        getActions().getUsuarios();
                    })
            },
            agregarUsuario: (user) => {
                clienteAxios.post('/usuario', user)
                    .then(respuesta => {
                        getActions().getUsuarios();
                    })
            },
        }
    };
};

export default getState;