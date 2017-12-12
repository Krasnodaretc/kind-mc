const { bioModel } = require('../models');

module.exports = async function (req, res) {
    req.data.data = await bioModel();
    res.render('components/bio/bio', {title: 'Hui', data: req.data});
};