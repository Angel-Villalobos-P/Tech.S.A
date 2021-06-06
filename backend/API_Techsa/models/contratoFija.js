module.exports = (sequelize, type) => {
    var contratoFija = sequelize.define('contratoFija')
    contratoFija.removeAttribute('id');
    return contratoFija;

}