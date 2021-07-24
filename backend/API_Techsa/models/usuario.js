module.exports = (sequelize, type) => {
    return usuario = sequelize.define('usuario', {
        idUsuario: type.INTEGER,
        nombre: type.STRING(30),
        apellidos: type.STRING(50),
        idLaboral: {
            type: type.INTEGER,
            primaryKey: true
        },
        puesto: type.STRING(15),
        contrasena: type.STRING
    })

}