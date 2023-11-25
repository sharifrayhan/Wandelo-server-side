const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    res.status(500).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  };
  
  module.exports = globalErrorHandler;
  
  