

module.exports = async function () {
    let music = await db.collection('music').find({}).toArray();

    return music;
};