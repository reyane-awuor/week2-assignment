class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(message = 'Validation failed') {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  let error = {
    success: false,
    message: 'Internal Server Error',
    statusCode: 500
  };

  if (err.name === 'NotFoundError') {
    error = {
      success: false,
      message: err.message,
      statusCode: err.statusCode || 404
    };
  } else if (err.name === 'ValidationError') {
    error = {
      success: false,
      message: err.message,
      statusCode: err.statusCode || 400
    };
  }

  res.status(error.statusCode).json(error);
};

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = {
  NotFoundError,
  ValidationError,
  errorHandler,
  asyncHandler
};