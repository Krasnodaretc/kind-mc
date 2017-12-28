const menu = require('./menu');
const footer = require('./footer');

module.exports = async function (url) {
    const staticData = await db.collection('main')
        .findOne(
            {
                name: 'seo'
            }
        );
    return {
        menu: await menu(url),
        footer: await footer(url),
        staticData: staticData.value,
    };
};