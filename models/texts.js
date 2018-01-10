const _find = require('lodash/find');

module.exports = async function () {
    let texts = await db.collection('texts').find({}).toArray();
    let music = await db.collection('music').find({}).toArray();

    // Оставляем только те треки, у которых в БД есть текст
    music = music.reduce((filtered, track) => {
        const text = _find(texts, {name: track.title});
        if (text) {
            filtered.push({
                ...track,
                text: text.text
            });
        }
        return filtered;
    }, []);

    // Сортировочка по алфавиту
    music = music.sort((a, b) => {
        return b.title < a.title;
    });

    return music;
};