
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const demo1Router = require('./routes/demo1/demo1');
const demo2Router = require('./routes/demo2/demo2');
const demo3Router = require('./routes/demo3/demo3');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'routes'));

//app.use('/demo1', demo1Router);
//app.use('/demo2', demo2Router);
//app.use('/demo3', demo3Router);

app.use([demo1Router, demo2Router, demo3Router]);

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Demo App</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container mt-5">
        <h1>Hello from the Demo App!</h1>
        <ul class="list-group">
          <li class="list-group-item"><a href="/demo1">demo1</a></li>
          <li class="list-group-item"><a href="/demo2">demo2</a></li>
          <li class="list-group-item"><a href="/demo3">demo3</a></li>
        </ul>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
