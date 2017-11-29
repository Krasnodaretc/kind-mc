

module.exports = function (req, res) {
    res.render('index', {title: 'Hui', data: req.layout });
};