const express = require('express');
const randomEmoji = require('random-unicode-emoji');

const app = express();

app.get('/', (req, res) => {
    const emojis = randomEmoji.random({ count: 10 });

    res.send(emojis.join(""));
});

app.get('/hi', (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Node API listening on port', port);
});
