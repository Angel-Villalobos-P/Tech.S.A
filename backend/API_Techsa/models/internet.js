module.exports = (sequelize, type) => {
    return internet = sequelize.define('internet', {
        idInternet: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING(50),
        descripcion: type.STRING,
        velocidad: type.INTEGER,
        precio: type.DECIMAL(10, 2)
    })

}