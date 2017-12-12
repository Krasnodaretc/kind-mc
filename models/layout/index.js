const menu = require('./menu');
const footer = require('./footer');

module.exports = async function (url) {
    return {
        menu: await menu(url),
        footer: await footer(url),
    };
};