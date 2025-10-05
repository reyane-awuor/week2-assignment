const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  
  const validApiKey = 'secret-key-123';
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid or missing API key'
    });
  }
  
  next();
};

module.exports = authenticate;