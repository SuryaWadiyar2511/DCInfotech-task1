const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.static(Path2D.join(--__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/feedbackDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => console.log('Connected to MongoDB!'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));