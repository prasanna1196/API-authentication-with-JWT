const express = require('express');
const app = express();
const mongoose = require('mongoose');


// Use body parser middleware
app.use(express.json());

// Connect to DB
mongoose.connect(
    "mongodb://localhost:27017/auth_jws",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));


// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Route middlewares
app.use('/api/user', authRoute);

app.use('/api/posts', postRoute);


app.listen(3000, () => console.log("Listening on port 3000"));