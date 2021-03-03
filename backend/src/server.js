const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { isValidFeedUrl } = require('./utils');
const Cache = require('./cache');

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
  const feedUrl = decodeURIComponent(req.body.feed);

  if (!isValidFeedUrl(feedUrl)) {
    return res.status(400).send({
      message: 'Url not allowed',
    });
  }

  res.setHeader('content-type', 'application/rss+xml');

  if (Cache.get(feedUrl)) {
    return res.send(Cache.get(feedUrl));
  }

  axios
    .get(decodeURIComponent(req.body.feed))
    .then((response) => {
      Cache.set(feedUrl, response.data);
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
  res.status(301).redirect('https://newsify.augusts.dev');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
