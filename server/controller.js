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
  Dog.find()
    .exec()
    .then(doc => res.status(200).json(doc))
    .catch(next);
};

DogsController.show = function(req, res, next) {
  Dog.findById(req.params.id)
    .exec()
    .then(doc => {
      if(!doc) {
        throw new ResponseError(404, 'Not Found');
      }
      res.status(200).json(doc);
    })
    .catch(next);
};

DogsController.create = function(req, res, next) {
  Dog.create(req.body)
    .then(doc => res.status(200).json(doc))
    .catch(next);
};

DogsController.update = function(req, res, next) {
  Dog.findById(req.params.id)
    .exec()
    .then(doc => {
      if(!doc) {
        throw new ResponseError(404, 'Not Found');
      }
      doc.set(req.body);
      return doc.save();
    })
    .then(doc => res.status(200).json(doc))
    .catch(next);
};

DogsController.destroy = function(req, res, next) {
  Dog.findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
      if(!doc) {
        throw new ResponseError(404, 'Not Found');
      }
      res.status(200).json({ message: 'ok' });
    })
    .catch(next);
};

module.exports = DogsController;
