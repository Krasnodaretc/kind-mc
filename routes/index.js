const express = require('express');
const router = express.Router();
const {
  layout,

  mainController,
  musicController,
  bioController,
  blogController,
  textsController,
  contactsController
} = require('../controllers');


module.exports = function (app) {
    // USE layout : head, header, footer
    app.use('/', layout );

    // GET pages
    app.get('/music', musicController);

    app.get('/bio', bioController);

    app.get('/blog', blogController);

    app.get('/texts', textsController);

    app.get('/contacts', contactsController);

    /* GET home page. */
    app.get('/', mainController );
};