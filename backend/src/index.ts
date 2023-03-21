import bodyParser from 'body-parser';
import express, { NextFunction, type Request, type Response } from 'express';

import { AppDataSource } from './db/data-source';
import { allowCrossDomain } from './middlewares/allowCrossDomain';
import { handleErrors } from './middlewares/handleErrors';
import { routes } from './routes';

const app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(routes);
app.use(handleErrors);

app.on('ready', () =>
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }),
);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.emit('ready');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
