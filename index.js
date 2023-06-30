import { readFileSync, writeFileSync } from 'fs';

// Add "gc" command to package.json script
const packageJsonPath = './package.json';
const packageJson = JSON.parse(readFileSync(packageJsonPath));

packageJson.scripts = {
  ...packageJson.scripts,
  gc: 'node node_modules/react-auto-component/generate_component/index.js'
};

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));