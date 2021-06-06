module.exports = (sequelize, type) => {
    return telefoniaMovil = sequelize.define('telefoniaMovil', {
        idTelMovil: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING(50),
        descripcion: type.STRING,
        tipo: type.STRING(15),
        precio: type.DECIMAL(10, 2)
    })

}