const validateProduct = (req, res, next) => {
  const { name, description, price, category } = req.body;
  
  const errors = [];
  
  if (!name || name.trim().length === 0) {
    errors.push('Product name is required');
  }
  
  if (!description || description.trim().length === 0) {
    errors.push('Product description is required');
  }
  
  if (!price || isNaN(price) || parseFloat(price) <= 0) {
    errors.push('Valid price is required and must be greater than 0');
  }
  
  if (!category || category.trim().length === 0) {
    errors.push('Product category is required');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }
  
  next();
};

module.exports = { validateProduct };