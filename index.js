const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const globalErrorHandler = require('./src/middlewares/globalErrorHandler');
const crudErrorHandler = require('./src/middlewares/crudErrorHandler');
const packageController = require('./src/controllers/packageController'); 
const authController = require('./src/controllers/authController');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors({
    origin: [
      "http://localhost:5173"
    ],
    credentials: true
  }))
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
const connectDB = require('./src/config/mongoose');
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Get Operations

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get('/packages', packageController.getAllPackages);


// Post Operations

app.post('/jwt', authController.login);
app.post('/logout', authController.logout);

// Global Error Handler
app.use(globalErrorHandler);

// Crud Error Handler
app.all('*', crudErrorHandler);


