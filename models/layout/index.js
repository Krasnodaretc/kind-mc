const menu = require('./menu');
const footer = require('./footer');

module.exports = async function (url) {
    let res = {
        menu: await menu(url)
    };

    res.footer = {
        author: ,
        copyright: '2017'
    };

    return res;
};