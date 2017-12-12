const { layoutModel } = require('../models');

module.exports = async function (req, res, next) {
    let url = req.params.url || null;

    req.data = {
        layout: await layoutModel( url ),
    };
    next();
};