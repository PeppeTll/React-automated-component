import { existsSync, mkdirSync, writeFile, readFileSync, writeFileSync } from 'fs';
import { index, component, barrel } from './component_templates.js';

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (existsSync(dir)) throw new Error('A component with that name already exists.');

// create the folder
mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.jsx
writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// component.scss
writeFile(`${dir}/${name}.css`, index(name), writeFileErrorHandler);
// index.jsx
writeFile(`${dir}/index.js`, barrel(name), writeFileErrorHandler);

// Add "gc" command to package.json script
const packageJsonPath = './package.json';
const packageJson = JSON.parse(readFileSync(packageJsonPath));

packageJson.scripts = {
  ...packageJson.scripts,
  gc: 'node node_modules/react-auto-component/generate_component/index.js'
};

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
