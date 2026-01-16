const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');

exports.cloneRepo = async (repoUrl, projectId) => {
  const dir = path.join(__dirname, `../repos/${projectId}`);
  fs.mkdirSync(dir, { recursive: true });
  await simpleGit().clone(repoUrl, dir);
  return dir;
};
