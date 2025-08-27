const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Successful");
}).catch((err) => {
    console.log("DB Connection Error:", err.message);
});

// Export the app for Vercel
module.exports = app;