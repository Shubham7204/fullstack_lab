const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Notes app backend running on port ${port}`);
});
