import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import v1Router from './router';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.options('*', (req, res) => { res.status(200).end(); });
// app.use('/api/v1', v1Router);
app.use('/api/v1', v1Router);

// set up 404 response
app.use('/', (req, res) => {
  errors.sendError(res)(new errors.NotFoundError(`RhinoApi running, endpoint '${req.path}' not found`));
});

const server = app.listen(PORT, () => {
  console.info(`Dev server started on port ${PORT}! Happy coding!`);
});


process.on('SIGINT', () => {
  server.close(() => {
    console.error('Program has unexpectedly stopped, gracefully exiting now');
    process.exit(1);
  });
});
// for tests
export default app;
