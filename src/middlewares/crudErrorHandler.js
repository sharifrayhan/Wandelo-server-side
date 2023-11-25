const crudErrorHandler = (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
  };
  
  module.exports = crudErrorHandler;