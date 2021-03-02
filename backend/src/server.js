const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;
const allowedOrigins = ['http://localhost:3000', 'https://newsify.augusts.dev'];

app.use(express.json());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.post('/fetch', (req, res) => {
  res.setHeader('content-type', 'application/rss+xml');
  axios
    .get(decodeURIComponent(req.body.feed))
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Fetch failed: ', error);
      res.status(500).send({
        message: error,
      });
    });
});

app.get('/', (req, res) => {
  res.redirect('https://newsify.augusts.dev');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
