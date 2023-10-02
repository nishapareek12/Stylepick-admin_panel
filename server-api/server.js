const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// ... Rest of your server code ...

app.listen(3006, () => {
  console.log('Server is running on http://localhost:3006');
});
