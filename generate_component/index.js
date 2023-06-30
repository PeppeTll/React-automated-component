import { existsSync, mkdirSync, writeFile } from 'fs';
import { index, component, barrel } from './component_templates.js';

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const componentsDir = './src/components/';
const dir = `${componentsDir}${name}/`;

// Create "Components" directory if it doesn't exist
if (!existsSync(componentsDir)) {
  console.log('Creating "Components" directory...');
  mkdirSync(componentsDir);
}

// Throw an error if the component directory already exists
if (existsSync(dir)) {
  throw new Error('A component with that name already exists.');
}

// Create the component directory
mkdirSync(dir);
console.log(`Component directory "${name}" created.`);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.jsx
writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
console.log(`Component file "${name}.jsx" created.`);

// component.scss
writeFile(`${dir}/${name}.css`, index(name), writeFileErrorHandler);
console.log(`Component file "${name}.css" created.`);

// index.jsx
writeFile(`${dir}/index.js`, barrel(name), writeFileErrorHandler);
console.log(`Component file "index.js" created.`);
