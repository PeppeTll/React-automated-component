import { existsSync, mkdirSync, writeFile } from 'fs';
import { index, component, barrel } from './component_templates.js';
import { index as indexTSX, component as componentTSX, barrel as barrelTSX } from './component_templates_ts.js';

const [name, fileType = 'jsx', indexType = 'css'] = process.argv.slice(2);
if (!name) {
  console.error('You must include a component name.');
  process.exit(1);
}

const validFileTypes = ['', 'jsx', 'tsx'];
if (!validFileTypes.includes(fileType)) {
  console.error(`Invalid file type "${fileType}". The file type must be empty, "jsx", or "tsx".`);
  console.log('Example: npm run gc MyComponent jsx');
  console.log('Example: npm run gc MyComponent tsx');
  process.exit(1);
}

const validIndexTypes = ['', 'css', 'scss'];
if (!validIndexTypes.includes(indexType)) {
  console.error(`Invalid index type "${indexType}". The index type must be empty, "css", or "scss".`);
  console.log('Example: npm run gc MyComponent jsx css');
  console.log('Example: npm run gc MyComponent jsx scss');
  console.log('Example: npm run gc MyComponent tsx css');
  console.log('Example: npm run gc MyComponent tsx scss');
  process.exit(1);
}

const componentsDir = './src/components/';
const dir = `${componentsDir}${name}/`;

// Create "Components" directory if it doesn't exist
if (!existsSync(componentsDir)) {
  console.log('Creating "Components" directory...');
  mkdirSync(componentsDir);
}

// Throw an error if the component directory already exists
if (existsSync(dir)) {
  console.error(`A component with the name "${name}" already exists.`);
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
