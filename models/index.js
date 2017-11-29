/**
 * Middleware for Models
 *
 * @type {{layoutModel, mainModel, bioModel, blogModel, musicModel, textsModel, contactModel}}
 */

module.exports = {
    layoutModel: require('./layout'),

    mainModel: require('./main'),
    bioModel: require('./bio'),
    blogModel: require('./blog'),
    musicModel: require('./music'),
    textsModel: require('./texts'),
    contactModel: require('./contact')
};