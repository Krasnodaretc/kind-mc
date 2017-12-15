const { layoutModel } = require('../models');

module.exports = async function (req, res, next) {
    let url = req.path.split('/')[1];

    req.data = {
        layout: await layoutModel( url ),
    };
    next();
};