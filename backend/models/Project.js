const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  repoUrl: String,
  repoName: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
