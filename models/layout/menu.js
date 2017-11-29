

module.exports = async function (urlPart) {
    let menu = await db.collection('main')
        .findOne(
            {
                name: 'menu'
            }
        );

    // set active link

    menu.value.forEach(link => {
        link.active = link.url === urlPart;
    });

    return menu;
};