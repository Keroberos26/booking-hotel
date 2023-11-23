import express from 'express';

import { connect } from './config/db/index.js';
import route from './routes/index.js';

const PORT = 8800;
const app = express();

// Connect to DB
connect();

app.use(express.json());

//Route for api
route(app);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json(errorMessage);
});

app.listen(PORT, () => {
  connect();
  console.log(`App listening at http://localhost:${PORT}/`);
});
