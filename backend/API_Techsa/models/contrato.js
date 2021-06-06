module.exports = (sequelize, type) => {
    return contrato = sequelize.define('contrato', {
        idcontrato: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pago: type.DECIMAL(10, 2)
    })

}