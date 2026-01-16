const CodeChunk = require('../models/CodeChunk');
const { getEmbedding, askGemini } = require('../config/gemini');

exports.answerQuestion = async (projectId, question) => {
  const qEmbedding = await getEmbedding(question);
  const chunks = await CodeChunk.find({ projectId });

  const scored = chunks.map(c => ({
    ...c._doc,
    score: cosine(qEmbedding, c.embedding)
  }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);

  const context = scored.map(s => s.content).join('\n');

  return await askGemini(
    `Answer based only on this code:\n${context}\n\nQuestion: ${question}`
  );
};

function cosine(a, b) {
  return a.reduce((s, v, i) => s + v * b[i], 0);
}
