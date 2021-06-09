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
            carritoObj: []
        },
        actions: {
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
            deleteItem: index => {
                const carrito = getStore().carrito;
                const carritoObj = getStore().carritoObj;
                carrito.splice(index, 1);
                carritoObj.splice(index, 1);
                setStore({ carrito: [...carrito] });
                setStore({ carritoObj: [...carritoObj] });
            }
        }
    };
};

export default getState;