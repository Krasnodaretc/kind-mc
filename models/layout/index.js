const menu = require('./menu');

module.exports = function (url) {
    let res = {
        menu: menu(url)
    };

    res.header = false;

    res.footer = {
        author: {
            name: 'Krasnodaretc',
            link: ''
        },
        copyright: '2017'
    };

    return res;
};