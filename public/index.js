const express = require('express');
const twitter = require('./twitter');

const app = express();

app.use("/twitter", twitter);

app.listen(5002, () => {
    console.log('Server running on port 5002');
});
