const author = {
    name: 'Krasnodaretc',
    link: '',
    copyright: '2017',
};

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
        author: author
    };
};