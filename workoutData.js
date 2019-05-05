import workoutModel from './api/workouts/workoutModel';

const workouts = [{
    'location': 'Workout 1',
    'type': '123 Test St',
    'length': '132-3212',
  },
  {
    'name': 'Workout 2',
    'type': '23 Main St',
    'length': '934-4329',
  },
  {
    'name': 'Workout 3',
    'type': '4 Lower St',
    'length': '432-5832',
  },
  {
    'name': 'Workout 4',
    'type': '49 Upper Street',
    'length': '934-4290',
  },
];

export default async function loadWorkouts() {
  try {
    await workoutModel.deleteMany();
    await workoutModel.collection.insertMany(workouts);
    console.info(`${workouts.length} workouts were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Workout Data: ${err}`);
  }
}