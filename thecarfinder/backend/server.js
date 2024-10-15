require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Serve static files from the public directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Serve static files from the public directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api', carRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
