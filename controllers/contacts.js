const { contactModel } = require('../models');

module.exports = async function (req, res) {
    req.data.data = await contactModel();
    res.render('components/contact/contact', {title: 'Hui', data: req.data});
};