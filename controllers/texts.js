const { textsModel } = require('../models');

module.exports = async function (req, res) {
    req.data.data = await textsModel();
    res.render('components/texts/texts', {title: 'Hui', data: req.data});
};