module.exports = (sequelize, type) => {
    var contratoMovil = sequelize.define('contratoMovil')
    contratoMovil.removeAttribute('id');
    return contratoMovil;

}