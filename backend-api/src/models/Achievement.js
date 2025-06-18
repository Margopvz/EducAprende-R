import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  description: String,
  image: String,
  game: String, // e.g., "math"
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Achievement", achievementSchema);
