const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const achievementSchema = Schema({
  id: { type: String, unique: true },
  name: String,
  description: String,
  image: String,
  game: String, // e.g., "math"
  requiredAciertos: Number,
  date: { type: Date, default: Date.now }
});

module.exports = model('Achievement', achievementSchema);