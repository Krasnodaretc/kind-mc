

module.exports = async function (urlPart) {
    let menu = await db.collection('main')
        .findOne(
            {
                name: 'menu'
            }
        );

    // set active link
    console.info(menu, urlPart);
    menu.value.forEach(link => {
        link.active = link.url === urlPart;
    });

    return menu.value;
};