const { musicModel } = require('../models');

module.exports = async function (req, res) {
    req.data.data = await musicModel();
    res.render('components/music/music', {title: 'Hui', data: req.data});
};