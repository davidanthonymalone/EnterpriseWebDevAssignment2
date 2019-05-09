import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
  location: String,
  type: String,
  length: String,
});

export default mongoose.model('Workout', WorkoutSchema);