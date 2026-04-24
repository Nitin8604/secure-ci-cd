const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Secure CI/CD Demo hai ye 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});