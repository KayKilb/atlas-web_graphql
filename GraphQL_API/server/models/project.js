// Define Mongoose schema for Project

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
  title: String,
  weight: Number,
  description: String,
  projectId: String
});

module.exports = mongoose.model('Project', projectSchema);