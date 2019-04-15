/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));


app.use(cors());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 4000, () => {
  console.log('listening at 4000');
});
