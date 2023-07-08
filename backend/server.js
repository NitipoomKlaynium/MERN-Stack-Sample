require('dotenv').config()
const posts = require('./routes/posts');

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/posts', posts);

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('listening to port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });


