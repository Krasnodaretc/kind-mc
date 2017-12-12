

module.exports = async function () {
    let contacts = await db.collection('main').findOne({
        name: 'contact'
    });

    return contacts.value;
};