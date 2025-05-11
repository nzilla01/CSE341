const express = require('express');
const connectDB = require('./server/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (optional: add body parser if needed)
app.use(express.json()); // Important if you're accepting JSON input
// Routes
app.use('/', require('./server/router/index.js'));


  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`); });
