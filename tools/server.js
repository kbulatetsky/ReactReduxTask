import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';

const port = 3000;
const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
  }
});
