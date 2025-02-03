const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const middlewares = require('./middlewares/middlewares');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Apply middlewares
middlewares(app);

// Routes
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

