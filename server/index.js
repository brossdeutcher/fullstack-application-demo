const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello, <em>world!</em></h1>');
});

const PORT = 3005;
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server listening on port ${PORT}`);
  } else {
    console.log('Something went wrong!!');
  }
});