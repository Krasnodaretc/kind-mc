

module.exports = async function () {
    let texts = await db.collection('texts').find({}).toArray();

    return texts;
};