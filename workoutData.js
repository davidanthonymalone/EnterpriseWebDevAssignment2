import workoutModel from './api/workouts/workoutModel';

const workouts = [{
  "location": "Waterford",
  "type": "walking",
  "length": "1 miles"
},
 {
  "location": "Wexford",
  "type": "Running",
  "length": "2 miles"
},
 {
  "location": "Carlow",
  "type": "Jogging",
  "length": "5 miles"
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