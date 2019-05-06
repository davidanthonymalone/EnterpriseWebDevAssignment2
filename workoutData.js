import workoutModel from './api/workouts/workoutModel';

const workouts = [{
  "id": 1,
  "location": "Waterford",
  "type": "walking",
  "length": "1 miles"
},
 {
  "id": 2,
  "location": "Wexford",
  "type": "Running",
  "length": "2 miles"
},
 {
 "id": 3,
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