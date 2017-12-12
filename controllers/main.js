const { mainModel } = require('../models');

module.exports = async function (req, res) {
    req.data.data = await mainModel();
    res.render('index', {title: 'Hui', data: req.data});
};