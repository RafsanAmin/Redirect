const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running');
  console.log(__dirname, process.cwd());
});
