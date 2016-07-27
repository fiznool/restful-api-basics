// Using Rails-like standard naming convention for endpoints.
// http://edgeguides.rubyonrails.org/routing.html#crud-verbs-and-actions
// GET     /workflows              ->  index
// POST    /workflows              ->  create
// GET     /workflows/:id          ->  show
// PUT     /workflows/:id          ->  update
// DELETE  /workflows/:id          ->  destroy

'use strict';

const Dog = require('./model');
const ResponseError = require('./error');

const DogsController = {};

DogsController.index = function(req, res, next) {
  next(new ResponseError(501, 'Not Implemented'));
};

DogsController.show = function(req, res, next) {
  next(new ResponseError(501, 'Not Implemented'));
};

DogsController.create = function(req, res, next) {
  next(new ResponseError(501, 'Not Implemented'));
};

DogsController.update = function(req, res, next) {
  next(new ResponseError(501, 'Not Implemented'));
};

DogsController.destroy = function(req, res, next) {
  next(new ResponseError(501, 'Not Implemented'));
};

module.exports = DogsController;
