const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const index = path.join(dist, 'index.html');
const four04 = path.join(dist, '404.html');
const inputIndex = path.join(dist, 'input', 'index.html');

if (!fs.existsSync(index)) {
  console.error('index.html not found in dist. Run build first.');
  process.exit(1);
}

try {
  const data = fs.readFileSync(index, 'utf8');
  fs.writeFileSync(four04, data, 'utf8');
  // also ensure /input/index.html exists so direct requests to /input return 200
  try {
    fs.mkdirSync(path.join(dist, 'input'), { recursive: true });
    fs.writeFileSync(inputIndex, data, 'utf8');
    console.log('Copied dist/index.html -> dist/input/index.html');
  } catch (e) {
    console.warn('Failed to write input/index.html', e);
  }
  console.log('Copied dist/index.html -> dist/404.html');
} catch (e) {
  console.error(e);
  process.exit(1);
}
