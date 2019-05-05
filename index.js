import dotenv from 'dotenv';
import express from 'express';
import workoutsRouter from './api/workouts';
import bodyParser from 'body-parser';
import loadWorkouts from './workoutData';
import './db'

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.use('/api/workouts', workoutsRouter);
app.use(express.static('public'));


if (process.env.seedDb) {
  loadWorkouts();
}

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});