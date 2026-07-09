require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://ecommerece-frontend-gamma.vercel.app/'],// Add your frontend domain here
    credentials: true
}));
app.use(express.json());

// Database connection
connectDB();

// Routes
app.get('/', (req, res) => res.send('<h1>Welcome to the server!</h1>'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes')); 
app.use("/api/contact", require("./routes/contactRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
module.exports = app;
