const mongoose = require('mongoose');

const codeChunkSchema = new mongoose.Schema({
  projectId: mongoose.Schema.Types.ObjectId,
  content: String,
  embedding: [Number],
  filePath: String,
  language: String
}, { timestamps: true });

module.exports = mongoose.model('CodeChunk', codeChunkSchema);
