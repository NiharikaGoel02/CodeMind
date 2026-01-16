const CodeChunk = require('../models/CodeChunk');
const { generateEmbedding } = require('../services/embeddingService');
const { askGemini } = require('../config/gemini');
const { cosineSimilarity } = require('../utils/cosine');

const queryProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // 1. Embed question
    const questionEmbedding = await generateEmbedding(question);

    // 2. Fetch chunks
    const chunks = await CodeChunk.find({ projectId });

    if (!chunks.length) {
      return res.status(400).json({ error: 'No code indexed for this project' });
    }

    // 3. Similarity scoring

    const scoredChunks = chunks
  .map(chunk => ({
    content: chunk.content,
    score: cosineSimilarity(questionEmbedding, chunk.embedding),
  }))
  .filter(c => c.score > 0.2); // ⭐ important


    scoredChunks.sort((a, b) => b.score - a.score);

    // 4. Build context
    // const context = scoredChunks
    //   .slice(0, 5)
    //   .map(c => c.content)
    //   .join('\n\n');
    const context = chunks
  .slice(0, 5)
  .map(c => c.content)
  .join("\n\n");


    // 5. Ask Gemini

    const answer = await askGemini(
  `
You are a codebase assistant.

Answer ONLY using the provided context.
If the answer is not present in the context, say:
"I cannot find this in the repository."

CONTEXT:
${context}

QUESTION:
${question}
`
);

    res.json({ answer });

  } catch (err) {
    console.error('QUERY ERROR:', err);
    res.status(500).json({
      error: 'AI query failed',
      debug: err.message,
    });
  }
};

module.exports = { queryProject };
