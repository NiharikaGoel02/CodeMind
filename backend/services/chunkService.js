const fs = require('fs');
const path = require('path');


exports.chunkCode = (repoPath) => {
const chunks = [];


function walk(dir) {
fs.readdirSync(dir).forEach(file => {
const fullPath = path.join(dir, file);
if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
else if (file.endsWith('.js')) {
const content = fs.readFileSync(fullPath, 'utf8');
chunks.push({ content, filePath: fullPath, language: 'js' });
}
});
}
walk(repoPath);
return chunks;
};