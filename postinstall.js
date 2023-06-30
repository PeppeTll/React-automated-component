import { writeFileSync } from 'fs';

// Read the package.json file
const packageJsonPath = './package.json';
const packageJson = require(packageJsonPath);

// Add "gc" command to scripts
packageJson.scripts = {
  ...packageJson.scripts,
  gc: 'node node_modules/react-auto-component/index.js'
};

// Write the updated package.json file
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
