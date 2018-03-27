const express = require('express');
const router = express.Router();
const {
  // layout controller
  layout,

  // pages controllers
  mainController,
  musicController,
  bioController,
  blogController,
  textsController,
  contactsController,
  staticController,
} = require('../controllers');


module.exports = function (app) {
    // USE layout : head, header, footer
    app.use(['/', '/:url'], layout );

    // GET pages
    app.get('/music', musicController);

    app.get('/bio', bioController);

    app.get('/blog', blogController);

    app.get('/texts', textsController);

    app.get('/contacts', contactsController);

    /* GET home page. */
    app.get('/', mainController );

    /* GET files */
    app.get(['/public/:filename', '/public/:pathname/:filename'], staticController)
};