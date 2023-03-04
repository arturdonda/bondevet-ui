const express = require('express');
const { join } = require('path');

const app = express();
const port = 4000;

app.use(express.static(join(__dirname, './build')));

app.get('*', (req, res) => res.sendFile(join(__dirname, './build/index.html')));

app.listen(port, () => console.log(`Server running on ${port}`));
