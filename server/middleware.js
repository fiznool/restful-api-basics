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

  // Otherwise, fallback to an Internal Server Error.
  res.status(500).json({
    message: 'Internal Server Error'
  });
};
