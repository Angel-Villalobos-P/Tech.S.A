module.exports = (sequelize, type) => {
    var contratoInternet = sequelize.define('contratoInternet')
    contratoInternet.removeAttribute('id');
    return contratoInternet;

}