

module.exports = async function () {
    let bio = await db.collection('main').findOne({
        name: 'bio'
    });

    return bio.value;
};