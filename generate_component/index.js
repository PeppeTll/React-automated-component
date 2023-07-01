import { existsSync, mkdirSync, writeFile } from 'fs';
import { index, component, barrel } from './component_templates.js';
import { index as indexTSX, component as componentTSX, barrel as barrelTSX } from './component_templates_ts.js';

const [name, fileType = 'jsx', indexType = 'css'] = process.argv.slice(2);
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

// Determine the templates based on the file type
let templates;
if (fileType === 'tsx') {
  templates = {
    index: indexTSX,
    component: componentTSX,
    barrel: barrelTSX,
  };
} else {
  templates = {
    index,
    component,
    barrel,
  };
}

// Write component files
writeFile(`${dir}/${name}.${fileType}`, templates.component(name, indexType), writeFileErrorHandler);
console.log(`Component file "${name}.${fileType}" created.`);

writeFile(`${dir}/${name}.${indexType}`, templates.index(name), writeFileErrorHandler);
console.log(`Component file "${name}.${indexType}" created.`);

writeFile(`${dir}/index.${fileType}`, templates.barrel(name), writeFileErrorHandler);
console.log(`Component file "index.${fileType}" created.`);
