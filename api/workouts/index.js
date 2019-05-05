import express from 'express';
import Workout from './workoutModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


// Get all workouts, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a workouts, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
}));

// Update a workouts
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const workout = await Workout.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!workout) return res.sendStatus(404);
  return res.json(200, workout);
}));

// Delete a workouts
router.delete('/:id', asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  if (!workout) return res.send(404);
  await workout.remove();
  return res.status(204).send(workout);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;