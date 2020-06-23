const express = require('express');
const app = express();
const cors = require('cors');
const config = require("./config");
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');

app.use('/api/users', users);
app.use('/api/profiles', profiles);

mongoose.connect(config.mongoURI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true 
    },  () => console.log('connected to database'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on port ${port}`));