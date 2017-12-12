

module.exports = async function () {
    let posts = await db.collection('blog').find({}).toArray();

    return posts;
};