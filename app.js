const express = require('express');
const app = express();
const route = require('./route');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', route);

app.listen(3000, () => 'Listening on port 3000');
