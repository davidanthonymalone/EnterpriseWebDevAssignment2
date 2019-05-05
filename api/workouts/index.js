import express from 'express';
import {workouts} from './workouts';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
  res.send({workouts: workouts});
});

export default router