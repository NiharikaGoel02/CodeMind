const Project = require('../models/Project');
const CodeChunk = require('../models/CodeChunk');
const { cloneRepo } = require('../services/githubService');
const { chunkCode } = require('../services/chunkService');
const { generateEmbedding } = require('../services/embeddingService');

exports.ingestRepo = async (req, res) => {
  const { repoUrl } = req.body;

  const project = await Project.create({
    userId: req.user.id,
    repoUrl,
    repoName: repoUrl.split('/').pop()
  });

  const repoPath = await cloneRepo(repoUrl, project._id);
  const chunks = chunkCode(repoPath);

  for (const c of chunks) {
    const embedding = await generateEmbedding(c.content);
    await CodeChunk.create({ ...c, embedding, projectId: project._id });
  }
  //fs.rmSync(repoPath, { recursive: true, force: true });


  res.json({ projectId: project._id });
};
