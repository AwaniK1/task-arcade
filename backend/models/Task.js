const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  xp: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
