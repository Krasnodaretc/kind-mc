const { blogModel } = require('../models');

module.exports = async function (req, res) {
    req.data.data = await blogModel();
    res.render('components/blog/blog', {title: 'Hui', data: req.data});
};