const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World! Server is finally working!',
    status: 'SUCCESS' 
  });
});

app.listen(PORT, () => {
  console.log('🎉 SERVER RUNNING on http://localhost:' + PORT);
});