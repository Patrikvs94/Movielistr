// Getting the required libraries such as Express.js and Mongoose
const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

//Body-parser is now included with Express.js
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
