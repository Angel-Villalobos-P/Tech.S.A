module.exports = (sequelize, type) => {
    return celular = sequelize.define('celular', {
        idCelular: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: type.STRING(30),
        modelo: type.STRING(30),
        color: type.STRING(30),
        almacenamiento: type.INTEGER,
        ram: type.INTEGER,
        descripcion: type.STRING,
        precio: type.DECIMAL(10, 2),
        stock: type.INTEGER,
    })

}