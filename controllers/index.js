/**
 * Middleware for controllers
 *
 * @type {{
    * layout: func,
    * mainController: func,
    * musicController: func,
    * bioController: func,
    * blogController: func,
    * textsController: func,
    * contactsController: func
* }}
 */

module.exports = {
    layout: require('./layout'),

    mainController: require('./main'),
    musicController: require('./music'),
    bioController: require('./bio'),
    blogController: require('./blog'),
    textsController: require('./texts'),
    contactsController: require('./contacts')
};