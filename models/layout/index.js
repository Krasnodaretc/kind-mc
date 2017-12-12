const menu = require('./menu');
const footer = require('./footer');

module.exports = async function (url) {
    let res = {
        menu: await menu(url),
        footer: await footer(url),
    };

    return res;
};