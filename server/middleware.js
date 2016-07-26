'use strict';

// Handling errors is achieved by passing a function
// with 4 arguments to `app.use`.
exports.errorHandler = function(err, req, res, next) {
  // If the error has a status code, send it
  // along with any extra information.
  if(err.status) {
    res.status(err.status);
    return err.message ? res.json({ message: err.message }) : res.end();
  }

  // If the error is a Mongoose CastError, and the path
  // is the _id, the client sent an invalid ID when
  // addressing a single resource.
  // Return a 404.
  if(err.name === 'CastError' && err.path === '_id') {
    return res.status(404).json({
      message: 'Not Found'
    });
  }

  // If the error is a Mongoose ValidationError,
  // the client sent invalid data when trying to
  // create or update a document.
  // Return a 400.
  if(err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation failed',
      errors: Object.keys(err.errors).map(function(k) {
        return err.errors[k].message;
      })
    });
  }

  // Otherwise, fallback to an Internal Server Error.
  res.status(500).json({
    message: 'Internal Server Error'
  });
};
