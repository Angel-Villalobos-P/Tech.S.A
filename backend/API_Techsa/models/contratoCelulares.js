module.exports = (sequelize, type) => {
    var contratoCelulares = sequelize.define('contratoCelular')
    contratoCelulares.removeAttribute('id');
    return contratoCelulares;
}