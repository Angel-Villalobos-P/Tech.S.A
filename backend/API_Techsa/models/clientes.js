module.exports = (sequelize, type) => {
    return cliente = sequelize.define('cliente', {
        idCliente: {
            type: type.INTEGER,
            primaryKey: true
        },
        nombre: type.STRING(30),
        apellidos: type.STRING(50),
        correo: type.STRING(50),
        direccion: type.STRING(100),
        usuario: type.STRING(30),
        contrasena: type.STRING
    })

}