// Getting the required libraries such as Express.js and Mongoose
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

//Body-parser is now included with Express.js
app.use(express.json());

//DB config
const db = config.get('mongoURI');

//Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
