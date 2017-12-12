const author = {
    name: 'Krasnodaretc',
    link: '',
    copyright: '2017',
};
const ContactModel = require('../contact');

module.exports = async function (urlPart) {
    let menu = await db.collection('main')
        .findOne(
            {
                name: 'menu'
            }
        );

    menu.value.forEach(link => {
        link.active = link.url === urlPart;
    });

    return {
        menu: menu.value,
        contact: await ContactModel(),
        author: author
    };
};