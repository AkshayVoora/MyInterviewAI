const errorHandler = (err, req, res, next) => {
    // Log the exception to the console for debugging purposes
    console.error(err.stack);

    // You can expand this to log errors to a more persistent logging infrastructure

    // Determine the status code: if the error object has a status code, use it; otherwise use 500
    const statusCode = err.statusCode ? err.statusCode : 500;

    // Send the error response
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler;
