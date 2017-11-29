const { layoutModel } = require('../models');

module.exports = async function (req, res, next) {
    let url = req.params.url || null;

    req.layout = await layoutModel( url );
    next();
};