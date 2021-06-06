module.exports = (sequelize, type) => {
    return telefoniaFija = sequelize.define('telefoniaFija', {
        idTelFija: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING(50),
        descripcion: type.STRING,
        tarifa: type.DECIMAL(10, 2),
        minutos: type.INTEGER,
        costoMinutos: type.DECIMAL(10, 2)
    })

}